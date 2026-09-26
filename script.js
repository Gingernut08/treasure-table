let wave =document.getElementById("wave");
let st=-window.innerHeight*0.8;
wave.style.top="20vh";
window.addEventListener("scroll",function(){
    let pos=-95+window.scrollY/5;
    if(pos>-35){
        pos=-35;
    };
    wave.style.transform="translateY("+pos+"%)";
});
//TOTAL cinema( ik its absolute but wtv wtv)
let but=document.getElementById("add");
let sel=document.querySelectorAll(".select");
let tot=document.getElementById("total");
but.addEventListener("click",function(){
    let num=0;
    sel.forEach(function(sels){
        if(sels.checked){
            num+=Number(sels.dataset.weight);
        }
    });
    tot.textContent="total:"+num+"g";
});