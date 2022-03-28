
//esto es la consulta a la api
const  fetchPokemon =() => {
    const pokeName = document.getElementById("pokeName"); //<--Busca el elmento en el html
    let pokeInput = pokeName.value.toLowerCase();
    const url= `https://pokeapi.co/api/v2/pokemon/${pokeInput}`
    /*esto es una promesa*/
   fetch(url).then((res)  =>{
        if (res.status != "200") {
        
            console.log(res);
            pokeImage("./Img/pika-cry.JPG");
            Namer("Error");
            typos("Error","Error");
            move("ERROR");
        }else{
            return res.json();
        }
        
    }).then((data) =>{
        
        let pokeName =data.name;
        let pokeImg= data.sprites.front_default;
        
        pokeImage(pokeImg);
        Namer(pokeName);
        type(data);
        stat(data);
        move(data);
    })
        
}  
const pokeImage = (url)=>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src=url;
}

function Namer(pokeName){
    document.getElementById('poke').innerHTML=pokeName.toUpperCase();  
}

function typos(i,typ){
    if (i==0){
        document.getElementById('typos0').innerHTML= typ.toUpperCase();
        document.getElementById('typos1').innerHTML= "TIPO 2 : NA";
    }else if(i=="Error"){
        document.getElementById('typos0').innerHTML= "ERROR";
        document.getElementById('typos1').innerHTML= "ERROR";
    }else{
        document.getElementById('typos1').innerHTML= typ.toUpperCase();
    }

}

function type(inputType){
    
    let Type= inputType.types;
    let mesure=Type.length;

    console.log("Tipo");
    for (let i=0; i<mesure; i++){
        var a= i+1
       let fb= ("Tipo "+ a + " : " + Type[i].type['name']);
        console.log(i,fb);
        typos(i,fb);
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
  function move(inputMove){
    let Move=inputMove.moves;
    let mesure=Move.length;
    let movents=[]
    console.log(inputMove)
    if (inputMove=="ERROR"){
        document.getElementById("arrayPrint").innerHTML= "ERROR";
    }else{
        for (let i=0; i<6; i++){
            movents.push(i+1 +"-" +Move[i].move['name']);
        }
        document.getElementById("arrayPrint").innerHTML= movents.toString();
    }

    
            
    
}