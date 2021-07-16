
import Complex, { clasa } from './defaultValues.js';
import {mareSmekerie} from './script4.js';
import {req} from './script4.js';


let trunkRatio;
let tA,tAS,tB,tBS, culoareJos, culoareSus,nrBucati;
let contor=0;





let inp1=document.getElementById("input1").addEventListener("keyup", (e)=>{  
    if(e.key==='Enter'){
 
   
        tA=parseFloat(e.target.value) ;
        clasa.val1=tA;
        cancelAnimationFrame(req);
        mareSmekerie(clasa);
    }

});


let inp2=document.getElementById("input2").addEventListener("keyup", (e)=>{  
    if(e.key==='Enter'){
 
   
        tAS=parseFloat(e.target.value) ;
        clasa.val2=tAS;
        cancelAnimationFrame(req);
        mareSmekerie(clasa);
    }

});
let inp3=document.getElementById("input3").addEventListener("keyup", (e)=>{  
    if(e.key==='Enter'){
 
   
        tB=parseFloat(e.target.value) ;
        clasa.val3=tB;
        cancelAnimationFrame(req);
        mareSmekerie(clasa);
    }

});
let inp4=document.getElementById("input4").addEventListener("keyup", (e)=>{  
    if(e.key==='Enter'){
 
   
        tBS=parseFloat(e.target.value) ;
        clasa.val4=tBS;
        cancelAnimationFrame(req);
        mareSmekerie(clasa);

    }

});
let inp5=document.getElementById("input5").addEventListener("keyup",(e)=>{
    console.log(e);
    if(e.key==='Enter'){
  
    
        trunkRatio=parseFloat(e.target.value) ;
        clasa.val5=trunkRatio;
        cancelAnimationFrame(req);
        mareSmekerie(clasa);
    }
 })
 let inp7=document.getElementById("input6").addEventListener("keyup",(e)=>{
  
    if(e.key==='Enter'){
  
    console.log(e.target.value);
            nrBucati=parseInt(e.target.value) ;
        clasa.limitaBucConstruite=nrBucati;
        cancelAnimationFrame(req);
        mareSmekerie(clasa);
    }

 
})
let inp8=document.getElementById("input7").addEventListener("keyup",(e)=>{
    // let check=document.getElementById('grosime-check');
// clasa.bifat=check.checked;
// console.log(clasa.bifat);
    if(e.key==='Enter'){

           let grosime=parseFloat(e.target.value) ;
        clasa.grosimea=grosime;
        cancelAnimationFrame(req);
        mareSmekerie(clasa);
    }

 
})
let inp9=document.getElementById("grosime-check").addEventListener("change",(e)=>{

clasa.bifat=!clasa.bifat;
cancelAnimationFrame(req);
mareSmekerie(clasa);
   

 
})
 let inp6=document.getElementById("colorpicker1").addEventListener("click",(e)=>{
       let  culoare1=(e.target.value) ;
       console.log(culoare1);
      clasa.culoare1=culoare1;
    
 })
 let inp66=document.getElementById("colorpicker2").addEventListener("input",(e)=>{
    let  culoare2=(e.target.value) ;
   clasa.culoare2=culoare2;
 
})



// function myFunc(){
//     console.log("cave");
// }

export{clasa}


