// 1.1 alert, prompt, confirm
function dialogWithUser() {
    const name = prompt("Як тебе звати?");
    if (!name) {
        alert("Ви не ввели ім'я.");
        return;
    }

    const wantsToLearn = confirm(`Привіт, ${name}! Хочеш почати навчання з Kodemy?`);
    if (wantsToLearn) {
        alert("Чудово! Kodemy чекає на тебе!");
    } else {
        alert("Можливо, наступного разу.");
    }
}

// 1.2 Інформація про розробника
function showDeveloperInfo(lastName, firstName, position = "Викладач програмування") {
    alert(`Інформація про розробника:\nПрізвище: ${lastName}\nІм'я: ${firstName}\nПосада: ${position}`);
}

// 1.3 Порівняння рядків
function compareStrings(str1, str2) {
    if (str1.length > str2.length) {
        alert(`Рядок "${str1}" довший.`);
    } else if (str2.length > str1.length) {
        alert(`Рядок "${str2}" довший.`);
    } else {
        alert("Рядки однакової довжини.");
    }
}

// 2.1 Зміна фону
function changeBackgroundFor30Seconds() {
    const originalColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = "#fdf3d1";
    setTimeout(() => {
        document.body.style.backgroundColor = originalColor;
    }, 30000);
}

// 2.2 Перенаправлення
function redirectToCourses() {
    location.href = "/courses.html";
}

// 2.3 getElementById
const paragraph = document.getElementById("main-page-paragraph");
if (paragraph) {
    paragraph.style.fontWeight = "bold";
    paragraph.innerHTML += " (оновлено через JavaScript)";
}

// 2.4 querySelectorAll — зміна кольору посилань
document.querySelectorAll("a").forEach(link => {
    link.style.color = "blue";
});

// 2.5 Властивості DOM-вузлів
function modifyPageContent() {
    const ul = document.querySelector(".lesson-list");

    // innerHTML
    const newLesson = document.createElement("li");
    newLesson.innerHTML = "Урок 4: Основи DOM";
    ul.appendChild(newLesson);

    // outerHTML
    const heading = document.querySelector("h2");
    console.log("outerHTML:", heading.outerHTML);

    // textContent
    console.log("Зміст заголовку:", heading.textContent);

    // Створення елементів
    const infoDiv = document.createElement("div");
    infoDiv.textContent = "Kodemy — навчайся з нами!";
    document.body.appendChild(infoDiv);

    // Вставка елементів різними методами
    const span = document.createElement("span");
    span.textContent = " [нове]";
    ul.lastChild.append(span);

    // replaceWith
    const highlight = document.querySelector(".highlight");
    if (highlight) {
        const strong = document.createElement("strong");
        strong.textContent = highlight.textContent;
        highlight.replaceWith(strong);
    }

    // remove
    const navMenu = document.querySelector(".menu");
    if (navMenu) {
        navMenu.remove(); // демонстрація видалення
    }
}

// --- Атрибут у HTML (onmouseover="hoverMessage(this)") ---
function hoverMessage(el) {
    el.style.backgroundColor = "#e0f7fa";
    alert("КУРСИ У ПРОДАЖІ З 1 червня!!!");
}

// --- Через властивість ---
const header = document.querySelector("h1");
if (header) {
    header.onclick = function () {
        alert("Kodemy вітає вас!!");
    };
}

// --- addEventListener: декілька обробників ---
if (paragraph) {
    function handler1() {
        console.log("Обробник 1");
    }
    function handler2() {
        console.log("Обробник 2");
    }

    paragraph.addEventListener("click", handler1);
    paragraph.addEventListener("click", handler2);

    // --- Видалення одного з обробників через 10 секунд ---
    setTimeout(() => {
        paragraph.removeEventListener("click", handler2);
        console.log("handler2 видалено через removeEventListener");
    }, 10000);
}

// --- Об'єкт з handleEvent ---
const eventLogger = {
    handleEvent(event) {
        console.log("Обробник через об’єкт:", event.currentTarget);
        alert(`Обробник об’єкта активовано на елементі: ${event.currentTarget.tagName}`);
    }
};

const logoBox = document.querySelector(".centered-box");
if (logoBox) {
    logoBox.addEventListener("click", eventLogger);
}

// === 2) Делегування: підсвічування списку ===
const courseList = document.getElementById("course-list");

if (courseList) {
    courseList.onclick = function (event) {
        const target = event.target;
        if (target.tagName === "LI") {
            target.style.backgroundColor = "#d0f0c0";
        }
    };
}

// === Меню з data-* атрибутами (поведінка) ===
const menu = document.getElementById("course-menu");

const behaviors = {
    showMath: () => alert("Курс математики: алгебра, геометрія, підготовка до НМТ."),
    showProgramming: () => alert("Курс програмування: HTML, CSS, JS, Python."),
    highlightAll: () => {
        document.querySelectorAll("#course-list li").forEach(li => {
            li.style.backgroundColor = "#fff3cd";
        });
    }
};

if (menu) {
    menu.addEventListener("click", function (event) {
        const behavior = event.target.dataset.behavior;
        if (behavior && behaviors[behavior]) {
            behaviors[behavior]();
        }
    });
}
