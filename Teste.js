const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

const times = [];
const nomes = ['Brasil', 'Camarões', 'Suíça', 'Sérvia'];
const siglas = ['bra', 'cam', 'sui', 'ser'];

const Gerador = () => {
    for(let i = 0; i < 4; i++){
        times.push(Construtor(siglas[i], nomes[i], 0, 0));
    }
    
}
function Construtor(sigla, nome, pt, sg) {
    console.log(pt)
    return {
        sigla: sigla,
        nome: nome,
        pt: pt,
        sg: sg
    }
    console.log(pt)
}
const atualizaColocacao = () => {
    times.sort((a, b) => b.pt - a.pt);
    times.sort((a, b) => {
        if(b.pt == a.pt){
            return b.sg - a.sg
        }
    });
}
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}
Gerador();
//
async function test_case(){
    let driver = await new Builder().forBrowser("chrome").build();
    await driver.get("https://igorflores2003.github.io/CopadoMundo2022HTML/");
  // await driver.get("http://127.0.0.1:5500/index.html");
    //popula
    var entradas = await driver.findElements(By.css(".entrada"));
    
    for(let e of entradas){
        await e.clear();
        await e.sendKeys(getRandomInt(10), Key.RETURN);
    }
    var Btn = await driver.findElement(By.id("send")).click();
    console.log(await Btn)
    let valorDaVez = 0;
    let idTime1, idTime2, sgTime1, sgTime2;
    for(let i = 1; i < 7; i++ ){
       
        partida = await driver.findElements(By.css(`.p${i}`));

        console.log(partida[i])
        
        sgTime1 = await partida[0].getAttribute("value");
        sgTime1 = parseInt(sgTime1, 10);
        idTime1 = await partida[0].getAttribute("id");
        idTime1 = parseInt(idTime1, 10);
        
        sgTime2 = await partida[1].getAttribute("value");
        sgTime2 = parseInt(sgTime2, 10);
        idTime2 = await partida[1].getAttribute("id");
        idTime2 = parseInt(idTime2, 10);

        if(sgTime1 == sgTime2 && sgTime1 != 0){//empate
            times[idTime1].pt += 1;
            times[idTime2].pt += 1;
        }else if(sgTime1 > sgTime2){
            times[idTime1].pt += 3;
        }else if(sgTime1 < sgTime2){
            times[idTime2].pt += 3;
        }
        
    }
    for(let s of siglas){
        timeDaVez = await driver.findElements(By.css(`.${s}`));
        for(let time of timeDaVez){
            valorDaVez = await time.getAttribute("value");
            id = await time.getAttribute("id");
            times[id].sg += parseInt(valorDaVez, 10);
        }
    }
    atualizaColocacao();
    let col;
    for(let i = 0; i < 4; i++){
        col = await driver.findElement(By.id(`t${i}`));
        col = await col.getText();
        if(col == times[i].nome){
            console.log(`Correta colocação ${i + 1}.`);
        }else{
            console.log(`INCORRETA colocação ${i + 1}.`);
        }
    }
    console.log(times);
    await driver.quit();
    
}
test_case();
