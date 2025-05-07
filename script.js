function internalDialogs() {
    alert("Ласкаво просимо на Kodemy!");
    const name = prompt("Як вас звати?");
    const isStudent = confirm("Ви студент?");
    alert(`Приємно познайомитись, ${name}! Студент: ${isStudent ? "так" : "ні"}`);
}

// ===== 2. Функція «Діалог з користувачем» із змінними, умовами, циклами =====
function dialogWithUser() {
    let userName = prompt("Введіть ваше ім'я:");
    while (!userName) {
        userName = prompt("Будь ласка, введіть ваше ім'я ще раз:");
    }

    let age = prompt("Скільки вам років?");
    age = parseInt(age);

    if (isNaN(age)) {
        alert("Введено некоректний вік.");
        return;
    }

    if (age < 12) {
        alert(`Привіт, ${userName}! Тобі ще зарано до школи Kodemy 😉`);
    } else if (age <= 18) {
        alert(`Привіт, ${userName}! Ми маємо чудові курси для школярів!`);
    } else {
        alert(`Привіт, ${userName}! У нас є програма для дорослих також!`);
    }
}

// ===== 3. Функція про розробника =====
function showDeveloperInfo(surname, name, position = "Розробник сайту") {
    alert(`Розробник: ${surname} ${name}\nПосада: ${position}`);
}

// ===== 4. Функція порівняння рядків =====
function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Більший рядок: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`Більший рядок: ${str2}`);
    } else {
        alert("Рядки однакової довжини.");
    }
}

// ===== 5. DOM: зміна фону сторінки на 30 секунд =====
function changeBackgroundFor30Seconds() {
    const original = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#f0e68c";
    setTimeout(() => {
        document.body.style.backgroundColor = original;
    }, 30000);
}

// ===== 6. BOM: Перенаправлення на іншу сторінку =====
function redirectToPrometheus() {
    location.href = "https://prometheus.org.ua/";
}

// ===== 7. DOM-робота з елементами: getElementById, querySelectorAll і т.д. =====
function modifyPageContent() {
    // innerHTML, textContent, outerHTML
    const mainPara = document.getElementById("main-page-paragraph");
    if (mainPara) {
        mainPara.textContent += " (оновлено скриптом)";
    }

    // querySelectorAll
    const highlights = document.querySelectorAll(".highlight");
    highlights.forEach(el => {
        el.style.color = "blue";
        el.style.fontWeight = "bold";
    });

    // Створення та вставка елементів
    const newEl = document.createElement("div");
    newEl.textContent = "Цей блок створено JavaScript!";
    document.body.append(newEl);

    const textNode = document.createTextNode("Додатковий текст.");
    newEl.appendChild(textNode);

    const afterEl = document.createElement("p");
    afterEl.textContent = "Елемент після таблиці.";
    const table = document.querySelector("table");
    table?.after(afterEl);

    // Видалення вузла
    setTimeout(() => {
        newEl.remove();
    }, 10000);
}
