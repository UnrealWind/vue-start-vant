var _rem = '',cWidth = '';

!function(_Width,_Dom) {
    cWidth = _Width;
    if(_Dom == "" ||_Dom == undefined ||_Dom == null)_Dom = 1;
    _rem = document.documentElement.clientWidth / 10;
    document.documentElement.style.fontSize = _rem + 'px';
    console.log(_Width + "px设计图:"+_Dom+"px = " + _Dom / _Width * document.documentElement.clientWidth * (1 / _rem) + " rem");
}(750);


var R = function(_Dom){
    console.log(_Dom + "px = " + _Dom / cWidth * document.documentElement.clientWidth * (1 / _rem) + " rem");
};