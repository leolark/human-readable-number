module.exports = function toReadable (number) {
    
    let units = ["","one","two","three","four","five","six","seven","eight","nine","ten",
    "eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    let dozens = ["","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    let human;
    let arrnumber = number.toString().split("").reverse();
  
    if (number == 0) {
        human = "zero";
    } else {
        if (arrnumber.length < 3) {
          if(number<20) {
            human = units [number];
          } 
          else {
            human = dozens [Math.floor(number/10) -1 ] + " " + units [arrnumber[0]];
          };
          } 
          
        else {
          if(arrnumber[1]<2) {
            human = units [(Math.floor(number / 100))] + " hundred " + units [number-Math.floor(number/100)*100];
          } else {
            human = units [(Math.floor(number / 100))] + " hundred " + dozens [Math.floor((number - Math.floor(number/100)*100)/10)-1] + " " + units [arrnumber[0]];
          }
          }
    }
    return human.trim()
}
