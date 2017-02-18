function getFirstSelector(selector){
var getSelector = document.querySelector(selector)
return getSelector
}

function nestedTarget(){
  var nestedLook  =document.querySelector('.target')
  return nestedLook
}

function deepestChild(){
var child = document.querySelectorAll('#grand-node')
for(var i = 0; i < child.length; i++){
 return child[i]
}
}


function increaseRankBy(n){

  var list = document.querySelectorAll('.ranked-list')
  for(var i = 0; i < list.length; i++){
  list[i].innerHTML = (i + 1).toString()
  }
 }
