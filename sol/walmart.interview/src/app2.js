const prices = [ 1, 10, 9, 2, 4 ];


function main(prices) {
  let profit = 0;
  let buyDay = 0;
  let sellDay = 0;

  for(let i = prices.length - 1; i >= 1; i--){
    for(let j = i - 1; j >= 0; j--) {
      let diff = prices[i] - prices[j];

      if(diff > 0) {
        profit += diff;
      }
    }
  }
  
  console.log("Profit: " + profit);
}

main(prices);
