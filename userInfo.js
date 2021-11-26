let Name = sessionStorage.getItem("name");  
let point = sessionStorage.getItem('Points');

document.querySelector(".name").innerHTML = Name;
document.querySelector(".points").innerHTML = point;