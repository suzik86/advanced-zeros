module.exports = function getZerosCount(number, base) {
  
  function getSimpleMn(x) {
    let arr = {};
    
    for(let i = 2; i <= x; i++) {
      while(x % i == 0) {
        if (arr[i]) {
          arr[i]++;
        } else {
          arr[i] = 1;
        }
        x = x / i;
      }
      if(x/i == 1) {
        arr[i]++;
      }
    }
    return arr;
  }

  let baseSimple = getSimpleMn(base);
  let sums = {};

  for (let key in baseSimple) {
    let sum = 0;
    let baseMn = key;
    while (baseMn <= number) {     
      sum += Math.floor(number / baseMn);  
      baseMn = baseMn*key;   
    }
    sums[key] = Math.floor(sum / baseSimple[key]);
  }

  return Math.min.apply(Math, Object.values(sums));
};
