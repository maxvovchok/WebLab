document.getElementById("width").addEventListener("input", calculateRectangle);
document.getElementById("height").addEventListener("input", calculateRectangle);

function calculateRectangle() {
  const width = parseFloat(document.getElementById("width").value);
  const height = parseFloat(document.getElementById("height").value);

  if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    return;
  }

  const perimeter = 2 * (width + height);
  const area = width * height;
  const diagonal = Math.sqrt(width ** 2 + height ** 2).toFixed(2);

  document.getElementById("perimeter").textContent = perimeter;
  document.getElementById("area").textContent = area;
  document.getElementById("diagonal").textContent = diagonal;
}

function sendMessage(user) {
  const messageInput = document.getElementById(user);
  const message = messageInput.value.trim();
  if (message === "") return;

  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("p");

  if (user === "user1") {
    messageElement.style.textAlign = "left";
    messageElement.textContent = "Користувач 1: " + message;
  } else if (user === "user2") {
    messageElement.style.textAlign = "right";
    messageElement.textContent = "Користувач 2: " + message;
  }

  chatBox.appendChild(messageElement);
  messageInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

const transliterationMap = {
  А: "A",
  Б: "B",
  В: "V",
  Г: "H",
  Ґ: "G",
  Д: "D",
  Е: "E",
  Є: "Ye",
  Ж: "Zh",
  З: "Z",
  И: "Y",
  І: "I",
  Ї: "Yi",
  Й: "Y",
  К: "K",
  Л: "L",
  М: "M",
  Н: "N",
  О: "O",
  П: "P",
  Р: "R",
  С: "S",
  Т: "T",
  У: "U",
  Ф: "F",
  Х: "Kh",
  Ц: "Ts",
  Ч: "Ch",
  Ш: "Sh",
  Щ: "Shch",
  Ю: "Yu",
  Я: "Ya",
  а: "a",
  б: "b",
  в: "v",
  г: "h",
  ґ: "g",
  д: "d",
  е: "e",
  є: "ie",
  ж: "zh",
  з: "z",
  и: "y",
  і: "i",
  ї: "i",
  й: "i",
  к: "k",
  л: "l",
  м: "m",
  н: "n",
  о: "o",
  п: "p",
  р: "r",
  с: "s",
  т: "t",
  у: "u",
  ф: "f",
  х: "kh",
  ц: "ts",
  ч: "ch",
  ш: "sh",
  щ: "shch",
  ю: "iu",
  я: "ia",
  ь: "",
  ʼ: "",
};

document
  .getElementById("ukrainian-text")
  .addEventListener("input", function () {
    const inputText = this.value;
    const transliteratedText = inputText
      .split("")
      .map((char) => transliterationMap[char] || char)
      .join("");
    document.getElementById("transliterated-text").value = transliteratedText;
  });
