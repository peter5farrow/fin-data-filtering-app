export default function formatNumber(number) {
  const digits = number.toString().split("");
  const skip = digits.length % 3;

  for (let i = skip; i < digits.length; i += 4) {
    digits.splice(i, 0, ",");
  }

  if (digits[0] === ",") {
    digits.splice(0, 1);
  }
  digits.unshift("$");
  return digits.join("");
}

// for (let i = 1; i < 10000000000000; i *= 10) {
//   console.log(formatNumber(i));
// }
