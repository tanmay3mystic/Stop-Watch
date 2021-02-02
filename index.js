const watch = document.querySelector('.watch');

const minS = document.querySelector('.minS');
const secS = document.querySelector('.secS');
const hrsS = document.querySelector('.hrsS');
const miliS = document.querySelector('.miliS');

const start = document.getElementById('start');
const stop = document.getElementById('stop');
const pause = document.getElementById('pause');

var sec =0 , toggle = false ;

const initialise = function() {
    sec = 0  , toggle=false;
    miliS.innerText = "00";
    minS.innerText = "00";
    secS.innerText = "00";
    hrsS.innerText = "00";
}
const increSec = function()  {
        var idS = setInterval(()=>{
            if(toggle) return; 
            sec++;

            let tempmili = sec%100;
            if(tempmili<10) miliS.innerText = '0'+ tempmili;
            else miliS.innerText = tempmili;

            let tempsec = (parseInt(sec/100)%60);
            if(tempsec<10) secS.innerText = '0'+ tempsec;
            else secS.innerText = tempsec;

            let tempmin = parseInt(parseInt(sec/100)/60)%60;   
            if(tempmin<10) minS.innerText = '0'+ tempmin;
            else minS.innerText = tempmin;

            let temphrs = parseInt(parseInt(parseInt(sec/100)/60)/60)%24;
            if(temphrs<10) hrsS.innerText = '0'+ temphrs;
            else hrsS.innerText = temphrs;

            btnStop(idS);
        },10);  
}

const disable = (obj)=>{
    obj.disabled = true;
}
const enable = (obj)=>{
    obj.disabled = false;
}

const btnStop  = (obj)=>{
    stop.addEventListener('click' , ()=>{
        watch.style.fontWeight = "500";
        clearInterval(obj);
        disable(pause);
    });
}
const btnPause = ()=>{
    pause.addEventListener('click' , ()=> {
        toggle = !toggle;
    });
}

btnPause();

stop.addEventListener('dblclick' , ()=>{
    enable(start);
    disable(pause);
    miliS.innerText = "00";
    minS.innerText = "00";
    secS.innerText = "00";
    hrsS.innerText = "00";
});

start.addEventListener('click' ,  ()=>{
        watch.style.fontWeight = "800";
        disable(start);
        enable(pause);
        initialise();
        increSec();
    }
)