let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    historyList.innerHTML += `<li>${display.value} = ${result}</li>`;
    display.value = result;
  } catch {
    display.value = "Error";
  }
}

function toggleSign() {
  if (display.value) {
    display.value = String(-parseFloat(display.value));
  }
}

function reciprocal() {
  if (display.value !== "") {
    display.value = 1 / parseFloat(display.value);
  }
}

function square() {
  if (display.value !== "") {
    display.value = Math.pow(parseFloat(display.value), 2);
  }
}

function sqrt() {
  if (display.value !== "") {
    display.value = Math.sqrt(parseFloat(display.value));
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

function copyResult() {
  navigator.clipboard.writeText(display.value);
}

// ✅ Keyboard Support
document.addEventListener("keydown", function (e) {
  const key = e.key;

  if (!isNaN(key) || "+-*/.%".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape" || key === "Delete") {
    clearDisplay();
  } else if (key === "^") {
    square(); // Optional shortcut
  }
});
