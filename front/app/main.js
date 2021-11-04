// import "./styles/index.scss";
import "./styles/style.css";
document.getElementById("submit").addEventListener("click", shortApi);
const div = document.getElementById("shorturl");

async function shortApi(){
    let longUrl = document.getElementById("url_input").value;
    div.style.display ="block";

    try{
        let response = await axios.post("http://localhost:3000/api",{
            "longUrl":longUrl
        })
        console.log(response.data);
        div.innerText = "your new url:" + "  " + (response.data);
        
    }
    catch(error){
        document.getElementById("shorturl").innerText = (error.response.data.error);
    }
}
