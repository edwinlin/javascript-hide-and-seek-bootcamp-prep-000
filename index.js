
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  var ranked = document.querySelectorAll('.ranked-list li')
  var i = 0
  while(i<ranked.length){
    // console.log(ranked[i].innerHTML)
    ranked[i].innerHTML = (parseInt(ranked[i].innerHTML,10) + n).toString()
    i++
  }
}

function deepestChild(){
  var string = 'div#grand-node'
  var grand = document.querySelector(string)
  var something = grand.querySelectorAll('div')

  var i = 0
  while(i < something.length){
    string += " div"
    i++
  }
  return (document.querySelector(string))
}

// official solution - how could we possibly know .children method?
// function deepestChild() {
//   let node = document.getElementById('grand-node');
//   let nextNode = node.children[0];

//   while (nextNode) {
//     node = nextNode;
//     nextNode = node.children[0];
//   }

//   return node;
// }
