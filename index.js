function sumItems(array) {
  // result variable
  let sum = 0;
  // for each element of the array
  array.forEach((el) => {
    // check if there are nested arrays
    if (Array.isArray(el)) {
      // if true, run that array again through the function to loop through the nested arrays (can reach any level) while adding sum of that array
      sum += sumItems(el);
    } else {
      // add the element to result variable as they are not nested
      sum += el;
    }
  });
  return sum;
}

module.exports = sumItems;
