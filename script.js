// your code here
function query(){
    let url = document.getElementById("url");
    let name1 = document.getElementById("name").value;
    let year = document.getElementById("year").value;

    console.log(name1,year);
    if(name1 !="" && year !=""){
        url.innerText = `https://localhost:8080/?name=${name1}&year=${year}`
    }
    else if(name1 !="" && year==""){
        url.innerText = `https://localhost:8080/?name=${name1}`
    }
    else if(name1 =="" && year != ""){
        url.innerText = `https://localhost:8080/?year=${year}`
    }
}