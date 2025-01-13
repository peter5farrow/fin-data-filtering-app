export function formatNumber(number) {
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

export function formatSmaller(number) {
  const digits = number.toString().split("");
  if (digits.length < 10 || digits.length > 12) {
    return number;
  }

  if (digits.length === 10) {
    if (number.toString().slice(1) === "000000000") {
      return `$${digits[0]} billion`;
    }
    if (+digits[2] >= 5) {
      return `$${digits[0]}.${+digits[1] + 1} billion`;
    }
    return `$${digits[0]}.${+digits[1]} billion`;
  }

  if (digits.length === 11) {
    if (number.toString().slice(2) === "000000000") {
      return `$${digits[0] + digits[1]} billion`;
    }
    if (+digits[3] >= 5) {
      return `$${digits[0] + digits[1]}.${+digits[2] + 1} billion`;
    }
    return `$${digits[0] + digits[1]}.${+digits[2]} billion`;
  }

  if (digits.length === 12) {
    if (number.toString().slice(3) === "000000000") {
      return `$${digits[0] + digits[1] + digits[2]} billion`;
    }
    if (+digits[4] >= 5) {
      return `$${digits[0] + digits[1] + digits[2]}.${+digits[3] + 1} billion`;
    }
    return `$${digits[0] + digits[1] + digits[2]}.${+digits[3]} billion`;
  }
}

export function formatEPS(number) {
  return `$${number}`;
}
