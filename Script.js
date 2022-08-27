const OPsec=document.getElementById("sec");
const OPmin=document.getElementById("min");
const OPcentiSec=document.getElementById("centiSec");
const btnStart=document.getElementById("Start");
const btnStop=document.getElementById("Stop");
const btnReSet=document.getElementById("Reset");
let min=0;
let sec=0;
let centiSec=0;
let Interval;
btnReSet.style.display="none";
btnStop.style.display="none";

btnStart.addEventListener('click',()=>{
    btnReSet.style.display="inline";
    btnStop.style.display="inline";
    btnStart.style.display="none";
   Interval= setInterval(()=>{
        centiSec++;
        if(centiSec<10){
            OPcentiSec.innerHTML='0'+centiSec;
        }else if(centiSec==100){
            sec++;
            centiSec=0;
            OPcentiSec.innerHTML='00';
            OPsec.innerHTML='0'+sec;
        }else{
            OPcentiSec.innerHTML=centiSec;
        }
        if(sec>9){
            OPsec.innerHTML=sec;
        }
        if(sec==60){
            min++;
            OPmin.innerHTML='0'+min;
            sec=0;
            OPsec.innerHTML='00';
        }
        if(min>9){
            OPmin.innerHTML=min;
        }
    },10)
})

btnStop.addEventListener('click',()=>{
    btnStop.style.display="none";
    btnStart.style.display="inline";
    btnReSet.style.display="none";
    clearInterval(Interval);
})

btnReSet.addEventListener('click',()=>{
    btnStop.style.display="none";
    btnStart.style.display="inline";
    btnReSet.style.display="none";
    clearInterval(Interval);
    centiSec=0;
    min=0;
    sec=0;
    OPcentiSec.innerHTML='00';
    OPsec.innerHTML="00";
    OPmin.innerHTML="00";
})