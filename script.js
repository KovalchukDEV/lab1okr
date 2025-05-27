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
