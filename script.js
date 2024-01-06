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
    resu();
//     alert(`You ${result}
// ${store}`);
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
    resu();
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
    resu();
}
function resu(){
    result=result+", Total  Win: "+ store.win+" Lose: "+store.lose+" Tie: "+store.tie
    document.getElementById('result').innerHTML = result;
}