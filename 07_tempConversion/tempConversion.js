const decimalPlaces = 1;

function placesToMult(places) {
  let output = '1';
  for (i = 1; i <= places; i++) {
    output += '0';
  }
  return +output;
}

const multiplier = placesToMult(decimalPlaces);

const ftoc = function(f) {
  return Math.round((f - 32) * (5 / 9) * multiplier) / multiplier;
};

const ctof = function(c) {
  return Math.round(((c * (9/5)) + 32) * multiplier) / multiplier;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
