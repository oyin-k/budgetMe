export const formatNumber = (num, type) => {
  /* 
        To: add + or - before number
            make amount exactly 2 decimal points
            make comma seperate thousands
            E.g
            2310.4567 -> + 2,310.46
            2000 -> + 2,000.00
    */
  let numSplit, int, dec;

  num = Math.abs(num);
  num = num.toFixed(2);

  numSplit = num.split('.');

  int = numSplit[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // input 24500, output 24,500

  dec = numSplit[1];

  return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
};
