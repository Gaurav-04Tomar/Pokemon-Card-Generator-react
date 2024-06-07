
async function Setpoke(url,setimage,sethead,setpara,setmid){
    let a=await fetch(url);
    let b=await a.json();
    setimage(b[0].sprite);
    let c="";
    for(let i=0;i<b[0].abilities.length;i++){
       c+=b[0].abilities[i].name+': '+b[0].abilities[i].description+"\n";
    }
    const parag=c.split('\n').map((el,i)=>(
       <p key={i}>{el}</p>
    ));
    let h=[b[0].name.toUpperCase(),b[0].baseStats.hp];
    sethead(h);
    setpara(parag);
    let st="Weight: "+b[0].weight+', '+"Attack: "+b[0].baseStats.attack+', '+"Defence: "+b[0].baseStats.defense;
    setmid(st);
}

export default Setpoke;