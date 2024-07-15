const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
if (BMIMark>BMIJohn) {
    console.log(`Mark's BMI(28.3) (${BMIMark} is higher than john's BMI(23.9) (${BMIJohn})!`)
}else {
    console.log(`John's BMI(23.9) (${BMIJohn}) is higher than Marks's BMI(28.3) (${BMIMark})!`)
}






