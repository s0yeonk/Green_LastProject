
//아카이브 _ 아코디언
let accordion=document.getElementsByClassName('accordion')
for(let i=0;i<accordion.length;i++){
  accordion[i].addEventListener('click',()=>{
    accordion[i].classList.toggle('active');
    let panel=accordion[i].nextElementSibling;
    if(panel.style.maxHeight){
    panel.style.maxHeight=null;
    }else{
      panel.style.maxHeight=panel.scrollHeight+"px";
    }
  });
}
