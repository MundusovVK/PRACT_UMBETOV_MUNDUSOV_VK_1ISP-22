let alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function textDecode(inputEncodeText) {
  let decodeResult = "";

  // проходимся по введеному тексту
  for (let i = 0; i < inputEncodeText.length; i++) {
    let symbolOfInputText = inputEncodeText[i];
    let checkAlphabetSymbol = false;

    // Проверяем наличие символа в массиве с алфавитом
    for (let j = 0; j < alphabet.length; j++) {
      if (symbolOfInputText === alphabet[j]) {
        checkAlphabetSymbol = true;
        // преврка заглавных
        let bigSymbol = j < 26;

        // индекс после отступа
        let newSymbolIndex;
        if (bigSymbol) {
          // заглавные
          newSymbolIndex = (j - 13 + 26) % 26; // минусуем 13 для дешифровки, плюсуем 26 чтобы избежать минусового индекса,
          // берем остаток от деления на 26 чтобы не получить индекс строчной буквы(26-51)
        } else {
          // строчные
          newSymbolIndex = 26 + ((j - 26 - 13 + 26) % 26);
        }

        decodeResult += alphabet[newSymbolIndex];
      }
    }

    // для не буков
    if (!checkAlphabetSymbol) {
      decodeResult += symbolOfInputText;
    }
  }

  return decodeResult;
}

let inputText = document.getElementById("input-encode-text");
let outputDecodeText = document.getElementById("output-decode-text");

inputText.addEventListener("change", function () {
  //запуск функции при вводе текста в форму
  // получtv вводимый текст для функцци
  let inputEncodeText = inputText.value;

  // вывод расшифрки
  outputDecodeText.innerHTML = textDecode(inputEncodeText);
});
