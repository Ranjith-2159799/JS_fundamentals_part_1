const mark ={
    fullname:'Mark miller',
    mass:78,
    height:1.69,
    calcBMI: function(){
        this.bmi= this.mass/(this.height*this.height);
        return this.bmi;
    }
};

const john ={
    fullname:'John smith',
    mass:92,
    height:1.95,
    calcBMI:function(){
        this.bmi=this.mass/(this.height*this.height);
        return this.bmi;
    }
};
mark.calcBMI();
john.calcBMI();

if (mark.bmi>john.bmi){
    console.log(`${mark.fullname}BMI (${mark.bmi})is higher than ${john.fullname}(${john.bmi}) `)

}else if(john.bmi>mark.bmi){
    console.log(`${john.fullname} BMI (${john.bmi})is higher than ${mark.fullname}(${mark.bmi})`)
}
