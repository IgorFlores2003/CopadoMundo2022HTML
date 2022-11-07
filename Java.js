const btn = document.querySelector("#send");

btn.addEventListener("click" , function(e){

    e.preventDefault();

    const name = document.querySelector("#name");

    const camaroes0 = document.querySelector("#camaroes0")

    const brazil0 = document.querySelector("#brazil0");

    const servia0 = document.querySelector("#servia0");

    const camaroes1 = document.querySelector("#camaroes1");

    const servia1= document.querySelector("#servia1");

    const brazil1 = document.querySelector("#brazil1");

    const suica1 = document.querySelector("#suica1");

    const camaroes2 = document.querySelector("#camaroes2")

    const brazil2 = document.querySelector("#brazil2");

    const servia2 = document.querySelector("#servia2");

    const suica2 = document.querySelector("#suica2");

   

    const value = name.value;
    const value2 = camaroes0.value;
    const value3 = brazil0.value;
    const value4 = servia0.value;
    const value5 = camaroes1.value;
    const value6  = servia1.value;
    const value7 = brazil1.value;
    const value8 = suica1.value;
    const value9 = camaroes2.value;
    const value10 = brazil2.value;
    const value11 = servia2.value;
    const value12 = suica2.value;

    var Ptos = 0;
    var Suica = Ptos;
    var Camaroes=Ptos;
    var Servia = Ptos;
    var Brasil = Ptos;
    var Suica2 = Ptos;
    var Camaroes2=Ptos;
    var Servia2 = Ptos;
    var Brasil2 = Ptos;
    var Suica3 = Ptos;
    var Camaroes3=Ptos;
    var Servia3 = Ptos;
    var Brasil3 = Ptos;
    var BrasilS =0;
    var SuicaS =0;
    var CamaroesS =0;
    var ServiaS = 0;

    // jOGO 1 //
if(value == value2 ){
Ptos = 1;
Suica = Ptos;
Camaroes=Ptos;
}
else if(value > value2){
    Ptos = 3;
    Suica = Ptos;
}
else{
    Ptos = 3;
    Camaroes = Ptos;
}

//  jOGO 2 //
if(value3 == value4 ){
    Ptos = 1;
    Brasil = Ptos;
    Servia=Ptos;
    }
    else if(value3 > value4){
        Ptos = 3;
        Brasil = Ptos;
    }
    else{
        Ptos = 3;
        Servia = Ptos;
    }


    // jOGO 3 //
    if(value5 == value6 ){
        Ptos = 1;
        Camaroes2 = Ptos;
        Servia2=Ptos;
        }
        else if(value5 > value6){
            Ptos = 3;
            Camaroes2 = Ptos;
        }
        else{
            Ptos = 3;
            Servia2 = Ptos;
        }

//JOGO 4 //
        if(value7 == value8 ){
            Ptos = 1;
            Brasil2 = Ptos;
            Suica2=Ptos;
            }
            else if(value7 > value8){
                Ptos = 3;
                Brasil2 = Ptos;
            }
            else{
                Ptos = 3;
                Suica2 = Ptos;
            }

//JOGO 5//
            if(value9 == value10 ){
                Ptos = 1;
                Camaroes3 = Ptos;
                Brasil3=Ptos;
                }
                else if(value9 > value10){
                    Ptos = 3;
                    Camaroes3 = Ptos;
                }
                else{
                    Ptos = 3;
                    Brasil3 = Ptos;
                }

// JOGO 6 ///
                if(value11 == value12 ){
                    Ptos = 1;
                    Servia3 = Ptos;
                    Suica3=Ptos;
                    }
                    else if(value11 > value12){
                        Ptos = 3;
                        Servia3 = Ptos;
                    }
                    else{
                        Ptos = 3;
                        Suica3 = Ptos;
                    }

                     BrasilS=Brasil+Brasil2+Brasil3;             
                     ServiaS=Servia+Servia2+Servia3;
                     SuicaS=Suica+Suica2+Suica3;
                     CamaroesS=Camaroes+Camaroes2+Camaroes3;

                    


    console.log(value);
    console.log(value2);
    console.log(value3);
    console.log(value4);
    console.log(value5);
    console.log(value6);
    console.log(value7);
    console.log(value8);
    console.log(value9);
    console.log(value10);
    console.log(value11);
    console.log(value12);
    console.log(SuicaS);
    console.log(CamaroesS);
    console.log(BrasilS);
    console.log(ServiaS);
});

