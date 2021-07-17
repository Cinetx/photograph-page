$(function () {
  $(".compare__container").twentytwenty({
    no_overlay: true,
    // move_slider_on_hover: true,
  });
  const twentyHandle = document.querySelectorAll('.twentytwenty-handle');
  twentyHandle.forEach((item)=>{

    item.addEventListener('mousedown', ()=>{
      document.body.classList.add('page-body--user-select');
    });

  })

  document.body.addEventListener('mouseup', ()=>{

    document.body.classList.remove('page-body--user-select');
  })
});
