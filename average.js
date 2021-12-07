
function average(numbers) {
  var result=0;
  var no =0;
  if(numbers.length == 0){
    return NaN;
  }
  for( let a=0; a<numbers.length;a++ ){
      if( !Number.isNaN(numbers[a])){
        no++;
        result = result + numbers[a];
      } 
      
  }
  result = result / no ;
   let decimalPoint = result.toString().split('.');
  //var delta = 1 / Math.pow(10, decimalPoint[1].length+1);
  const  res = [result, 1 / Math.pow(10, decimalPoint[1].length+1) ];
  return res;

  
}   

module.exports = {average};
