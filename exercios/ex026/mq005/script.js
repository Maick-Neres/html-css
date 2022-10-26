const icon =document.getElementById("icon");
  icon.addEventListener("click",()=>{
    const menu =document.getElementById("dv1");
      if(menu.style.display=="block"){
          menu.style.display="none"
      }else{
          menu.style.display="block"
     }
})

function size (){
 
  const menu =document.getElementById("dv1");
  if(window.innerWidth >=768){
    menu.style.display="block"
  }else{
    menu.style.display="none"
  }
}

