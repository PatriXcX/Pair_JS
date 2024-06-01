function mult (a,b){
    console.log(a*b);
}



mult(2,3);
mult(5,3);
mult(1,3);

//-----------------------------------------

function media (a,b,c,d){
    console.log((a+b+c+d)/4);
}
media (2,2,2,2);
media (4,4,4,4);
media (8,8,8,8);

//-------------------------------------------------------

function esPar(a){
    if(a % 2 === 0){
        console.log('true');
    }

    else {console.log('false');

    }
}

esPar(10);
esPar(5);

//----------------------------------------------------------------
function precio (number){
    console.log(`El precio sin IVA es ${number}, IVA: 21% Total:${number*1.21}`);
}

precio (10);

//-------------------------------------------