let result="";
let store={
    win:0,
    lose:0,
    tie:0
};
console.log(store);

function onClickRock(){
    localStorage.setItem('store',JSON.stringify(store));
    let random= Math.random();
    if(random<=1/3 && random>=0)
    {
        result="Game Tie";
        store.tie++;
    }
    else if(random>1/3 && random<= 2/3)
    {
        result="You Lose";
        store.lose++;
    }
    else{
        result="You Win";
        store.win++;
    }
    resultForGame();
}

function onClickPaper(){
    let random= Math.random();
    if(random<=1/3 && random>=0)
    {
        result="You Win";
        store.win++;
    }
    else if(random>1/3 && random<=2/3)
    {
        result="Game Tie";
        store.tie++;
    }
    else{
        result="You Lose";
        store.lose++;
    }
    resultForGame();
}
function onClickScissor(){
    let random= Math.random();
    if(random<=1/3 && random>=0)
    {
        result="You Lose";
        store.lose++;
    }
    else if(random>1/3 && random<=2/3)
    {
        result="You Win";
        store.win++;
    }
    else{
        result="Game Tie";
        store.tie++;
    }
    resultForGame();
}
function resultForGame(){
   var resultContainer=document.getElementById("result");
    var res=`${result}!<br>Total  Win: ${store.win} <br> Total Lose ${store.lose} <br> Total Tie ${store.tie}`;
    resultContainer.innerHTML=res;

}