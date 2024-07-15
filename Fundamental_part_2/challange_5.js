const calcAverage = (a,b,c) => (a+b+c)/3;
console.log (calcAverage(1,2,3));

let scoreDolphins = calcAverage (85,54,42);
let scoreKoalas = calcAverage(23,27,34);
console.log(scoreDolphins,scoreKoalas);

const checkWinner = function (avgDolphins,AvgKoalas) {
    if(avgDolphins>= 2* AvgKoalas){
        console.log(`Dolphins (${avgDolphins})wins vs (${AvgKoalas})Koalas`);
    }else if(AvgKoalas >= 2* avgDolphins){
        console.log(`Koalas (${AvgKoalas}) wins vs (${avgDolphins}Dolphins)`);
    }else {
        console.log("no team wins.");
    }
};

checkWinner(scoreDolphins,scoreKoalas);