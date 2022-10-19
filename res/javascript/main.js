const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade");

let cookies = 0;
let clickIncrease = 1;
let clickIncreasePrice = 100;

let autoclickerIncrease = 0; 
let autoclickerPrice = 200; //cena

cookie.onclick = () => {
  cookies += clickIncrease; //zvedne o jednu
  counter.innerHTML = cookies;
};

clickUpgrade.onclick = () => {
    if(cookies >= clickIncreasePrice){
    cookies -= clickIncreasePrice;
    clickIncreasePrice += 100;
    clickUpgrade.innerHTML = `Buy Upgrades: ${clickIncreasePrice}`;
    counter.innerHTML = cookies;
    clickIncrease++;
    }
    
}

autoclickerUpgrade.onclick = () => {
    if(cookies >= autoclickerPrice){
        cookies -= autoclickerPrice;
        counter.innerHTML = cookies;
        autoclickerPrice += 100;
        autoclickerUpgrade.innerHTML = `Buy autoclicker upgrade: ${autoclickerPrice}`;
    }
    if(autoclickerIncrease==0){
        setInterval(() => {
            cookies += autoclickerIncrease; //zvedne o jednu
            counter.innerHTML = cookies;
        }, 0.1); // opakovani kazdou sekundu
    }
    autoclickerIncrease++;
}