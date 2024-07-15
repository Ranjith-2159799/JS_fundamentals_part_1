/* Write your code below. Good luck! 🙂 */

const calcAverage = (a,b,c)=> (a + b + c) /3;
console.log(calcAverage(1, 2, 3));

let scoreDolphins = (44,23,71);
let scoreKoalas = (65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkwinner = function(avgDolphins,avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        console.log (`dolphins (${avgDolphins})wins vs koalas(${avgKoalas})`);
    }else if(avgKoalas >=2 * avgDolphins){
        console.log (`koalas (${avgKoalas}) wins vs dolphins(${avgDolphins})`);
    }else {
        console.log('No team wins.');
    }
};

checkwinner(scoreKoalas,scoreDolphins);







