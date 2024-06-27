let bx_star = documegent.getElmentsByclassName("bx-star")
console.log("bx-star",bx_star);
for(let i =0; i < bx_star.length;i++){
    bx_star[i].addEventlistener("click",function (){
if(bx_star [i].style.color == "white"){
    bx_star[i].style.color="yellow";
}else{
    bx_star[i].style.color="white";
}
    
})
}


