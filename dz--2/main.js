// ===  Счётчик ===
let counter = 0;
const counterDisplay = document.getElementById("counterValue");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

incrementBtn.addEventListener("click", () => {
    counter++;
    counterDisplay.innerText = counter;
    counterDisplay.style.color = "green";
});

decrementBtn.addEventListener("click", () => {
    if (counter > 0) {
        counter--;
        counterDisplay.innerText = counter;
        counterDisplay.style.color = "red";
    }
});

// ===  Координаты курсора ===
const box = document.getElementById("box");
const coords = document.getElementById("coords");

box.addEventListener("mousemove", (event) => {
    const rect = box.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    coords.innerText = `X: ${Math.round(x)}, Y: ${Math.round(y)}`;
});

box.addEventListener("mouseleave", () => {
    coords.innerText = "X: 0, Y: 0";
});

// ===  Изменение фона ===
const colorInput = document.getElementById("colorInput");

colorInput.addEventListener("input", () => {
    const value = colorInput.value.toLowerCase();
    // создаем временной элемент для проверки валидности цвета
    const testColor = document.createElement("div");
    testColor.style.color = value;

    if (testColor.style.color) {
        document.body.style.backgroundColor = value;
    } else {
        document.body.style.backgroundColor = "white";
    }
});
