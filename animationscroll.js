var scale=1;
var transform=0.1;
function scrolling(e){
    var ele=document.querySelector('.main');
    var x=e.deltaY;
    if(x>0){
        ele.style.transform=`scale(${scale+=transform})`;
    }
   else{
    ele.style.transform=`scale(${scale-=transform})`;
   }
}