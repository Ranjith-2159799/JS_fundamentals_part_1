const massmark = 95;
const heightmark =1.88;
const massjohn =85;
const heightjohn =1.76;

const BMImark = massmark / (heightmark * heightmark);
const BMIjohn = massjohn / (heightjohn * heightjohn);
const heigherBMI = BMImark > BMIjohn;
console.log(BMIjohn,BMImark)