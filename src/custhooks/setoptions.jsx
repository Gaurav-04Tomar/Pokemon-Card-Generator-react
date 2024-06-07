
async function SetOptions(url2,setoptions){
        let a=await fetch(url2);
        let b= await a.json();
        
        console.log(b);
        setoptions(Object.values(b).map((el,i)=>(
                  <option key={i} value={i+1}>{el}</option>
        )))
      }

export default SetOptions;