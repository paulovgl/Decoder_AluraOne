///////////////////Variáveis///////////////////
var input = document.getElementById("input-txt");
var output = document.getElementById("output-result");
var outputArea = document.getElementById("output-area");
var outputEmpty = document.getElementById("output-empty");
var criptBtn = document.getElementById("button-cript");
var descriptBtn = document.getElementById("button-descript");
var copyBtn = document.getElementById("output-button");

///////////////////Funções///////////////////
function CoderKey(txt) {
  var result = "";

  for (let i = 0; i < txt.length; i++) {
    switch (txt[i]) {
      case "e":
        result += "enter";
        break;
      case "i":
        result += "imes";
        break;
      case "a":
        result += "ai";
        break;
      case "o":
        result += "ober";
        break;
      case "u":
        result += "ufat";
        break;
      default:
        result += txt[i];
        break;
    }
  }
  return result;
}

function DescoderKey(txt) {
  var result = "";

  for (let i = 0; i < txt.length; i++) {
    switch (txt[i]) {
      case "e":
        result += "e";
        i = i + 4;
        break;
      case "i":
        result += "i";
        i = i + 3;
        break;
      case "a":
        result += "a";
        i = i + 1;
        break;
      case "o":
        result += "o";
        i = i + 3;
        break;
      case "u":
        result += "u";
        i = i + 3;
        break;

      default:
        result += txt[i];
        break;
    }
  }

  return result;
}

function UndoConfirmCopy() {
  copyBtn.style.backgroundColor = "white";
  copyBtn.style.transition = "all 1000ms";
  copyBtn.innerHTML = "Copiar";
  ClearOutput();
}

function ConfirmCopy() {
  copyBtn.style.backgroundColor = "#4cbb17";
  copyBtn.style.transition = "all 200ms";
  copyBtn.innerHTML = "Copiado &#9989;";
  setTimeout(UndoConfirmCopy, 1000);
}

function ShowOutput() {
  outputEmpty.style.display = "none";
  outputArea.style.display = "block";
}

function HideOutput() {
  outputEmpty.style.display = "flex";
  outputArea.style.display = "none";
}

function ClearInput() {
  input.value = "";
}

function ClearOutput() {
  output.value = "";
  HideOutput();
}

///////////////////Executáveis///////////////////
criptBtn.onclick = () => {
  var txt = input.value;
  output.value = CoderKey(txt);
  ClearInput();
  ShowOutput();
};

descriptBtn.onclick = () => {
  var txt = input.value;
  output.value = DescoderKey(txt);
  ClearInput();
  ShowOutput();
};

copyBtn.onclick = () => {
  var copyTxt = output.value;
  navigator.clipboard.writeText(copyTxt);
  ConfirmCopy();
};
