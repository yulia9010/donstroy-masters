document.addEventListener("DOMContentLoaded", function () {
    let openBtn = document.getElementById('menuOpen');
    let closeBtn = document.getElementById('menuClose');
    let submenu = document.getElementsByClassName('navbar__collapse')[0];
    console.log(openBtn);
    openBtn.addEventListener('click', function () {
        openBtn.style.display='none';
        closeBtn.style.display='inline-block';
        submenu.classList.remove('collapse');
    })
    closeBtn.addEventListener('click', function () {
        openBtn.style.display='inline-block';
        closeBtn.style.display='none';
        submenu.classList.add('collapse');
    });

    let radios = document.getElementsByTagName('input');
    let owls = document.getElementsByClassName('carousel__item');
    Array.from(radios).forEach(item=>{
        item.addEventListener('change',function () {
            if(item.checked){
                let radioName = item.id;
                Array.from(owls).forEach(elem=>elem.classList.remove('active'));
                let activeOwl = document.getElementById(radioName +'Owl');
                activeOwl.classList.add('active');
            }
        })
    })
})
