const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

console.log(lengthEl);

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value; //+ işareti koyunca stringi numbera çevivrir
  const hasLower = lowercaseEl.checked; //checkbox'ların tik olup olmamasına göre true false değeri döner
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numbersEl.checked;
  const hasSymbol = symbolsEl.checked;

  resultEl.innerHTML = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  console.log(typesCount);
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97); //String.fromCharCode her bir string değerinin numerik bir karşılığını oluşturur örneğin a 97'dir. Yani 97'den başlayıp 1 artarak z'ye kadar gider
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65); //String.fromCharCode her bir string değerinin numerik bir karşılığını oluşturur örneğin büyük A 65'dir. Yani 97'den başlayıp 1 artarak z'ye kadar gider
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48); //String.fromCharCode her bir string değerinin numerik bir karşılığını oluşturur örneğin 0 48'dir.
}

function getRandomSymbol() {
  const symbol = "!^+%&/()=?*,.";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

console.log(getRandomSymbol());

console.log(getRandomLower());

console.log(randomFunc);
