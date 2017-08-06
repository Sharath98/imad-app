console.log('Loaded!');

var element= document.getElementById('main-text');

element.innerHTML = 'New Value';

var img=document.getElementById('madi');
var moveleft=0;
function moveRight(){
    moveleft=moveleft+10;
    img.style.moveleft=moveleft+ 'px';
}
img.onclick = function() {
    var interval=setInterval(moveRight,100);
    };