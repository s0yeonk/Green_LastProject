(function(){
  'use strict'

  // 슬라이딩 메뉴
  document.addEventListener("DOMContentLoaded",function(){
    const $menuBtn=document.querySelector('#menuBtn');
    const $menuContain=document.querySelector('.slide-menu');
    $menuBtn.addEventListener('click',()=>{
      if($menuContain.classList.contains('slide-on')){
        $menuContain.classList.remove('slide-on');
      }else{
        $menuContain.classList.add('slide-on')
      }
    })
    const $closeBtn=document.querySelector('.slide-menu__close');
    const $closeBtnPc=document.querySelector('.slide-menu__close_pc');
    $closeBtn.addEventListener('click',()=>{
      if($menuContain.classList.contains('slide-on')){
        $menuContain.classList.remove('slide-on');
      }
    })
    $closeBtnPc.addEventListener('click',()=>{
      if($menuContain.classList.contains('slide-on')){
        $menuContain.classList.remove('slide-on');
      }
    })
  })
  
  // 현재 전시 
    //연결
    const $nowBtn=document.querySelectorAll('.nowBtn');
    const $viewList=document.querySelectorAll('.view-List');
    if($nowBtn){
      $nowBtn.forEach(item=>{
        item.classList.remove('now_checked');
        item.addEventListener('click',e=>{
          item.classList.toggle('now_checked');
          $viewList.forEach(subitem=>{
            subitem.classList.toggle('v-none',subitem.dataset.view!==e.target.dataset.view);
          })
        })
        item.classList.remove('now_checked');
      })
    }
    //스와이퍼 
    const swiper = new Swiper('.swiper', {
      slidesPerView: "auto",
      spaceBetween:10,
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints:{
        768:{
          spaceBetween:20,
        },
        1280:{
        }
      }
    });

  const searchIcon=document.querySelector('.search');
  const slideSearch=document.querySelectorAll('.search__slide');
  searchIcon.addEventListener('click',()=>{
    slideSearch.classList.toggle('active')
  })
  
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


  const accItem=document.getElementsByClassName('archive_item');
  console.log(accItem);
  let accordionItem=null;

  function getData(){
    fetch('./archive.json')
    .then(res=>res.json())
    .then(result=>{
      accordionItem=result;
      makeList(result);
      console.log(result);
    });
  }
  function makeList(item){
    accItem.innerHTML=null;
    item.forEach((item)=>{
      for(let i=0;i>accItem.length;i++){
        const result=makeItem(item);
        accItem[i].appendChild(result)
      }
    });
  }
  function makeItem(item){
    const div=document.createElement('div');
    div.classList.add('item');
  
    div.innerHTML=`
    <div>hi</div>
    `;
    return div;
  }

  getData();
})();
