let horizontal = document.getElementById("container");

horizontal.addEventListener("wheel", (e)=>{
    e.preventDefault(); //serve a fermare un comportamente di default, in questo caso non rende possibile il scroll verticale(non è per forza neccessario in questo caso )
    horizontal.scrollLeft += e.deltaY;
})