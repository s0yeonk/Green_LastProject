
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


  //투표 모달
   //1
  const voteModalOpen=document.querySelector('.vote_modalOpen1');
  const voteModalOpen2=document.querySelector('.vote_modalOpen2');
  const voteModalOpen3=document.querySelector('.vote_modalOpen3');
   //투표 open img
  const voteModal=document.querySelector('.vote_modal1');
  const voteModal2=document.querySelector('.vote_modal2');
  const voteModal3=document.querySelector('.vote_modal3');
  //투표 x 버튼
  const voteClose=document.querySelector('.voteClose');
  const voteClose2=document.querySelector('.voteClose2');
  const voteClose3=document.querySelector('.voteClose3');
  const openVote=()=>{
    voteModal.classList.remove('modal_hidden');
    document.getElementsByTagName('body')[0].style.background='#7DA796';
    document.getElementsByTagName('body')[0].style.overflow='hidden';
  };
  const openVote2=()=>{
    voteModal2.classList.remove('modal_hidden');
    document.getElementsByTagName('body')[0].style.background='#CADCF7';
    document.getElementsByTagName('body')[0].style.overflow='hidden';
  };
  const openVote3=()=>{
    voteModal3.classList.remove('modal_hidden');
    document.getElementsByTagName('body')[0].style.background='#E7AA6D';
    document.getElementsByTagName('body')[0].style.overflow='hidden';
  };
  voteModalOpen.addEventListener('click',openVote);
  voteModalOpen2.addEventListener('click',openVote2);
  voteModalOpen3.addEventListener('click',openVote3);
  const closeVote=()=>{
    voteModal.classList.add('modal_hidden');
    document.getElementsByTagName('body')[0].style.background='#FFFFFF';
    document.getElementsByTagName('body')[0].style.overflow='auto';
  }
  const closeVote2=()=>{
    voteModal2.classList.add('modal_hidden');
    document.getElementsByTagName('body')[0].style.background='#FFFFFF';
    document.getElementsByTagName('body')[0].style.overflow='auto';
  }
  const closeVote3=()=>{
    voteModal3.classList.add('modal_hidden');
    document.getElementsByTagName('body')[0].style.background='#FFFFFF';
    document.getElementsByTagName('body')[0].style.overflow='auto';
  }
  voteClose.addEventListener('click',closeVote);
  voteClose2.addEventListener('click',closeVote2);
  voteClose3.addEventListener('click',closeVote3);
  modalOverlay.addEventListener('click',closeVote);
    //2



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
          item.addEventListener('click',e=>{
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
      spaceBetween:20,

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
      //모달스와이퍼
    const swiper3 = new Swiper('.modal_swiper', {
      // Optional parameters
      slidesPerView: "auto",
      spaceBetween:15,
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints:{
        768:{
          spaceBetween:15,
        },
        1280:{
          spaceBetween:25,
        }
      }
    });  

  



  // const accItem=document.getElementsByClassName('archive_item');
  // console.log(accItem);
  // let accordionItem=null;

  // function getData(){
  //   fetch('./archive.json')
  //   .then(res=>res.json())
  //   .then(result=>{
  //     accordionItem=result;
  //     makeList(result);
  //     console.log(result);
  //   });
  // }
  // function makeList(item){
  //   accItem.innerHTML=null;
  //   item.forEach((item)=>{
  //     for(let i=0;i>accItem.length;i++){
  //       const result=makeItem(item);
  //       accItem[i].appendChild(result)
  //     }
  //   });
  // }
  // function makeItem(item){
  //   const div=document.createElement('div');
  //   div.classList.add('item');
  
  //   div.innerHTML=`
  //   <div>hi</div>
  //   `;
  //   return div;
  // }

  // getData();
})();
