const QUESTIONS = [
    [
        "Кем работал Гена из мультфильма Чебурашка?",
        "Работал в зоопарке крокодилом"
    ],
    [
        "Сколько голов было у Змея Горыныча? (минимальное число)",
        "3 головы"
    ],
    [
        "Кого считают родственниками драконов?",
        "Крокодила"
    ],
    [
        "Как называется «волшебная палочка» Деда Мороза?",
        "Посох"
    ],
    [
        "Зимнее явление, которое даже с предупреждениями роняет людей.",
        "Гололед"
    ],
    [
        "Какого дня недели было больше всего в прошлом, 2023 году",
        "Воскресенье"
    ],
    [
        "Сколько лучей у снежинки?",
        "6 лучей"
    ],
    [
        "Как называется самый короткий день в году?",
        "День зимнего солнцестояния"
    ],
    [
        "Чем окольцовывают елочку?",
        "Хороводом"
    ],
    [
        "В каком месяце 28 дней?",
        "Во всех"
    ]

]


window.onload = () => {
    let params = new URLSearchParams(document.location.search);
    let question = parseInt(params.get("question"), 10)
    document.getElementById("question").innerHTML = (question + 1).toString() + ". " + QUESTIONS[question][0]
    document.getElementById("answer").innerHTML = QUESTIONS[question][1]

    document.getElementById("control-menu").onclick = (e) => {
        window.location = 'index.html'
    }

    document.getElementById("control-answer").onclick = (e) => {
        document.getElementById("answer").style["display"] = "block"
    }

    document.getElementById("control-next").onclick = (e) => {
        if (question + 1 < QUESTIONS.length) {
            window.location = `quiz.html?question=${question + 1}`
        } else {
            window.location = 'index.html'
        }
    }

    document.getElementById("control-prev").onclick = (e) => {
        if (question > 0) {
            question -= 1
        }
        window.location = `quiz.html?question=${question}`
    }

}