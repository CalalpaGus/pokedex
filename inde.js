function createNode(element) {
    return document.createElement(element);
}

const ul = document.getElementById('abbility');
function append(parent, el) {
  return parent.appendChild(el);
}
function busca(){
const pname = document.getElementById('pokeName');
let pokeInput = pname.value.toLowerCase();
const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;


fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let nam = data.name;
  let inputName = data;
  
    let li = createNode('li');
    let spanName = createNode('span');
    
    spanName.innerHTML = `${nam}`;
    
    
    append(li, spanName);
    append(ul, li);
    move(inputName);
    type(inputName);
    stat(inputName);
    
    
  
})
.catch(function(error) {
  console.log(error);
})

}
function move(inputMove){
    let Move=inputMove.moves;
    let mesure=Move.length;
    console.log("Movimientos");
    for (let i=0; i<mesure; i++){
        
        console.log(i+1 +"-" +Move[i].move['name']);
 
    }
}

function type(inputType){
    
    let Type= inputType.types;
    let mesure=Type.length;
    console.log("Tipo");
    for (let i=0; i<mesure; i++){
        var a= i+1
        console.log("Tipo "+ a + " : " + Type[i].type['name']);
    }
}

function stat(inputStat){
  let Stat=inputStat.stats;
  let mesure=Stat.length;
  console.log("Estadísticas");
  for(let i=0; i<mesure; i++){
    console.log(Stat[i].stat['name']);
    console.log("Level: "+ Stat[i]['effort']);
  }
}

