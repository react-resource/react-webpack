require('./style/common.css')

function CreateEle (option) {
  var ele = document.createElement(option.tag);
  if(option.class){
  	 ele.classList.add(option.class);
  }
  if(option.text){
  	ele.innerHTML = option.text;
  }
  return ele;
}


var wrap = CreateEle({tag:'div',class:'wrap'});
var box = CreateEle({tag:'div',class:'box',text:'hello react'});
wrap.appendChild(box);
document.body.appendChild(wrap);