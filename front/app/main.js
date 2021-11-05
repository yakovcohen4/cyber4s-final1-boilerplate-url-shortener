// import "./styles/index.scss";
import "./styles/style.css";

const shortbtn = document.getElementById("submit")
shortbtn.addEventListener("click", shortApi);

const div = document.getElementById("shorturl");
const divLoader = document.getElementById("loader");

async function shortApi(){
    const longUrl = document.getElementById("url_input");
    div.style.display = "block";

    try{
        let response = await axios.post("http://localhost:3000/api",{
            "longUrl":longUrl.value
        })

        newURL(response.data);
        longUrl.value = "";
    }
    catch(error){
        longUrl.value = "";
        errormessage(error)
    }
}

// error fun 
function newURL(response) {

    console.log(response);
    console.log(response.split("api/")[1]);
    const id = response.split("api/")[1];

    const newURL = document.createElement('div');
    const url = document.createElement("span")
    newURL.setAttribute("id", "newurl");
    newURL.classList.add("errorMessage");
    url.textContent = `${response}`;
    url.setAttribute("id", "url");
    newURL.appendChild(url);
    divLoader.appendChild(newURL)
    
    // copy
    const copyBtn = document.createElement("button");
    copyBtn.classList.add('close-loader-btn');
    copyBtn.textContent = "copy";
    copyBtn.addEventListener("click", ()=>{
        const copyText = document.getElementById("newurl").textContent; // text
        const url = copyText.split('copy')[0];
        navigator.clipboard.writeText(url);                             // copy url
    });
    newURL.appendChild(copyBtn);

    // show 
    const sticBtn = document.createElement("button");
    console.log(sticBtn);
    sticBtn.classList.add('close-loader-btn');
    sticBtn.textContent = "show stic";
    sticBtn.addEventListener("click", showData);

    newURL.appendChild(sticBtn);
}

// error fun 
function errormessage(error) {

    const errorMessage = document.createElement('div')
    errorMessage.classList.add("errorMessage");
    errorMessage.textContent = error.response.data.error;
    divLoader.appendChild(errorMessage)
    
    const closeBtn = document.createElement("button");
    closeBtn.classList.add('close-loader-btn')
    closeBtn.textContent = "close";
    closeBtn.addEventListener("click", ()=> {
        document.querySelector(".errorMessage").remove()
    });
    errorMessage.appendChild(closeBtn);
    
    setTimeout(()=>{
        divLoader.removeChild(errorMessage)
    },4000)
    
}

// show my stic
async function showData(){
    const idEl = document.getElementById("url");
    console.log(idEl.textContent.split("api/")[1]);
    const id = idEl.textContent.split("api/")[1];
    console.log('in the show func ');
    let div = document.getElementById("shorturl")
    removeAllChildNodes(div)
    let response = await axios.get(`http://localhost:3000/api/statistic/${id}`)
    let data = (response.data);
    let p = document.createElement("p");
    p.innerText=(`creation Date:${data.date}  
    redirect Count:${data.redirectCount}`);
    div.appendChild(p);
}
// remove childs
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}