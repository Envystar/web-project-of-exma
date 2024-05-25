function load(){
    var list=document.querySelector('.header-box-list')
    list.innerHTML+=list.innerHTML //复制长度为两倍
    let left=list.style.left; //为list的左距离
    let timer;//为定时器
    clearInterval(timer);
    var length = list.children[0].width * list.childElementCount / 2;
    timer=setInterval((env)=>{
        left=left - 2;
        if(left <= -length){ 
            left=0;
        }
        console.log(1);
        list.style.left=left + 'px';
    }, 10);
};
document.addEventListener('DOMContentLoaded',load);