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
    if(random<=1/3 && random>0)
    {
        result="Tie";
        store.tie++;
    }
    else if(random>1/3 && random<2/3)
    {
        result="Lose";
        store.lose++;
    }
    else{
        random="Win";
        store.win++;
    }
    alert(`You ${result}
${store}`);
}

function onClickPaper(){
    let random= Math.random();
    if(random<=1/3 && random>0)
    {
        result="Win";
        store.win++;
    }
    else if(random>1/3 && random<2/3)
    {
        result="Tie";
        store.tie++;
    }
    else{
        random="Lose";
        store.lose++;
    }
    localStorage.setItem('store',JSON.stringify(store));
    alert(`You ${result}
${store}`);
}
function onClickScissor(){
    let random= Math.random();
    if(random<=1/3 && random>=0)
    {
        result="Lose";
        store.lose++;
    }
    else if(random>1/3 && random<2/3)
    {
        result="Win";
        store.win++;
    }
    else{
        random="Tie";
        store.tie++;
    }
    localStorage.setItem('store',JSON.stringify(store));
    alert(`${result} the game
${store}`);
}