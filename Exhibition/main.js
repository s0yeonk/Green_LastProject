
(function(){
  'use strict'

  //모달
  const modalOpenBtn=document.querySelector('.modalOpen');
  const modal=document.querySelector('.modal');
  const modalOverlay=document.querySelector('.modal_overlay');
  const modalCloseBtn=document.querySelector('.modalClose');
  console.log(modalOpenBtn)
  const openModal=()=>{
    modal.classList.remove('modal_hidden');
    document.getElementsByTagName('body')[0].style.overflow='hidden';
  };
  modalOpenBtn.addEventListener('click',openModal);
  const closeModal=()=>{
    modal.classList.add('modal_hidden');
    document.getElementsByTagName('body')[0].style.overflow='auto';
  };
  modalOverlay.addEventListener('click',closeModal);
  modalCloseBtn.addEventListener('click',closeModal);

  // 상단 돋보기 _내려오는 검색창
  const searchIcon=document.querySelector('.search');
  const slideSearch=document.querySelector('.desk_search');
  searchIcon.addEventListener('click',()=>{
    slideSearch.classList.toggle('active_search');
  })


  // 슬라이딩 메뉴
  document.addEventListener("DOMContentLoaded",function(){
  const $menuBtn=document.querySelector('#menuBtn2');
  const $menuContain=document.querySelector('.slide-menu');
  $menuBtn.addEventListener('click',()=>{
    if($menuContain.classList.contains('slide-on')){
      $menuContain.classList.remove('slide-on');
    }else{
      $menuContain.classList.add('slide-on')
    }
  })

  const $menuBtnPc=document.querySelector('#menuBtn_pc');
  $menuBtnPc.addEventListener('click',()=>{
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
    // nav bar
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
        });
      }
    //스와이퍼 
    const swiper1 = new Swiper('.first-swiper', {
      slidesPerView: "auto",
      spaceBetween:10,
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints:{
        768:{
          spaceBetween:30,
        },
        1280:{
          spaceBetween:25,
        }
      }
    });


    // const swiper2 = new Swiper('.second-swiper', {
    //   slidesPerView: "auto",
    //   spaceBetween:12,
    //   pagination: {
    //     el: '.swiper-pagination',
    //   }
    // });
var ww = window.innerWidth;
var swiper2 = undefined;

function initSwiper() {
  if (ww < 768 && swiper2 == undefined) {
    const swiper2 = new Swiper('.second-swiper', {
      slidesPerView: "auto",
      spaceBetween:12,
      pagination: {
        el: '.swiper-pagination',
      }
    });
  } else if (ww >= 768 && swiper2 != undefined) {
    swiper2.destroy();
    swiper2 = undefined;
  }
}

initSwiper();

// $(window).on('resize', function () {
//   ww = $(window).width();
//   initSwiper();
// });

//     // const swiper2 = new Swiper('.second-swiper', {
//     //   slidesPerView: "auto",
//     //   spaceBetween:12,
//     //   pagination: {
//     //     el: '.swiper-pagination',
//     //   }
//     // });

  

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
