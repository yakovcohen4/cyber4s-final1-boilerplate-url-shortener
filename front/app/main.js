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

    const newURL = document.createElement('div');
    newURL.setAttribute("id", "newurl");
    newURL.classList.add("errorMessage");
    newURL.textContent = `${response}`;
    divLoader.appendChild(newURL)
    
    const copyBtn = document.createElement("button");
    copyBtn.classList.add('close-loader-btn');
    copyBtn.textContent = "copy";

    copyBtn.addEventListener("click", ()=>{
        const copyText = document.getElementById("newurl").textContent; // text
        const url = copyText.split('copy')[0];
        navigator.clipboard.writeText(url);                             // copy url
    });
    newURL.appendChild(copyBtn);

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
