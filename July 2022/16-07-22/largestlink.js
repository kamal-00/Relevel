function largestOfThree(x, y, z) {
    // Compare all 3 numbers
    if (x >= y && x >= z)

      // Return 1st number if largest
      return x;

    // Comparing 2nd no with 1st and 3rd no
    else if (y >= x && y >= z)
      return y;

    else
      // Return 3rd no, Its sure it is greatest
      return z;
  }


  var a, b, c, largest;

  a = 15;
  b = 10;
  c = 30;

  largest = largestOfThree(a, b, c);


  console.log(largest +
    " is the largest number");
