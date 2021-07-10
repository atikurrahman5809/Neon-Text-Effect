var btn = document.getElementById("btn");
btn.onclick = function(){
    if(btn.classList.contains("neon")){
        btn.classList.remove("neon");
        btn.innerHTML = "CLOSED";
    }
    else{
        btn.classList.add("neon");
        btn.innerHTML = "OPEN";
    }
}