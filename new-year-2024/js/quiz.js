const QUIZ_QUESTIONS = [
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

const SONG_QUESTIONS = [
    ["1.mp3", "Три белых коня (Чародеи)"],
    ["2.mp3", "Песня про зайцев (Бриллиантовая рука)"],
    ["3.mp3", "Песенка про медведей (Кавказская пленница)"],
    ["4.mp3", "Остров невезения (Бриллиантовая рука)"],
    ["5.mp3", "Разговор со счастьем (Иван Васильевич меняет профессию)"],
    ["6.mp3", "Ой, мороз, мороз, не морозь меня! (Морозко)"],
    ["7.mp3", "Кабы не было зимы? (Зима в Простоквашино)"],
    ["8.mp3", "Пять минут (Карнавальная ночь)"],
    ["9.mp3", "Звенит январская вьюга (Иван Васильевич меняет профессию)"],
    ["10.mp3", "Голубой вагон (Чебурашка)"]
]

const MULTFILM_QUESTIONS = [
    ["1.jpg", "Двенадцать месяцев"],
    ["2.jpg", "Ночь перед Рождеством"],
    ["3.jpg", "Снеговик почтовик"],
    ["4.jpg", "Щелкунчик"],
    ["5.jpg", "Снежная королева"],
    ["6.jpg", "Дед мороз и лето"],
    ["7.jpg", "Жил был пёс"],
    ["8.jpg", "Простоквашино"],
    ["9.jpg", "Дед мороз и серый волк"],
    ["10.jpg", "Падал прошлогодний снег"]
]

const set_quiz = (question, QUESTIONS) => {
    document.getElementsByClassName("quiz")[0].style["display"] = "flex"
    document.getElementById("quiz-question").innerHTML = (question + 1).toString() + ". " + QUESTIONS[question][0]
    document.getElementById("quiz-answer").innerHTML = QUESTIONS[question][1]
    document.getElementById("control-answer").onclick = (e) => {
        document.getElementById("quiz-answer").style["display"] = "block"
    }

}

const set_song = (question, QUESTIONS) => {
    document.getElementsByClassName("song")[0].style["display"] = "flex"
    document.getElementById("song-answer").innerHTML = (question + 1).toString() + ". Откуда отрывок песни?"
    document.getElementById("music-player").src = `songs/${QUESTIONS[question][0]}`
    document.getElementById("control-answer").onclick = (e) => {
        if (document.getElementById("music-player").currentTime != 0.0) {
            document.getElementById("song-answer").innerHTML = "Ответ: " + QUESTIONS[question][1]
        }
    }
    document.getElementById("play-pause").onclick = (e) => {
        player = document.getElementById("music-player")
        if (player.paused) {
            player.play()
        } else {
            player.pause()
        }
    }

}

const set_multfilm = (question, QUESTIONS) => {
    document.getElementsByClassName("multfilm")[0].style["display"] = "block"
    document.getElementById("multfilm-answer").innerHTML = (question + 1).toString() + ". Откуда картинка?"
    document.getElementById("multfilm-image").src = `images/${QUESTIONS[question][0]}`
    document.getElementById("control-answer").onclick = (e) => {
        document.getElementById("multfilm-answer").innerHTML = QUESTIONS[question][1]
    }
}

const set_settings = () => {
    let _list = document.getElementsByClassName("control")[0].children
    for (let index = 0; index < _list.length; index++) {
        _list[index].style["border"] = "2px solid white"
        _list[index].style["text-align"] = "center"

    }
    _list[0].innerHTML = "Меню"
    _list[1].innerHTML = "Ответ"
    _list[2].innerHTML = "Предыдущий"
    _list[3].innerHTML = "Следующий"
    document.getElementById("control-answer").onclick = (e) => {
        _list[1].innerHTML = "ОТВЕТ"
    }
}

window.onload = () => {
    let params = new URLSearchParams(document.location.search);
    let question = parseInt(params.get("question"), 10)
    let quiz_type = params.get("quiz_type")
    let QUESTIONS = []
    if (quiz_type == "quiz") {
        QUESTIONS = QUIZ_QUESTIONS
        set_quiz(question, QUESTIONS)
    } else if (quiz_type == "song") {
        QUESTIONS = SONG_QUESTIONS
        set_song(question, QUESTIONS)
    } else if (quiz_type == "multfilm") {
        QUESTIONS = MULTFILM_QUESTIONS
        set_multfilm(question, QUESTIONS)
    } else {
        set_settings()
    }

    document.getElementById("control-menu").onclick = (e) => {
        window.location = 'index.html'
    }

    document.getElementById("control-prev").onclick = (e) => {
        if (question > 0) {
            question -= 1
        }
        window.location = `quiz.html?quiz_type=${quiz_type}&question=${question}`
    }

    document.getElementById("control-next").onclick = (e) => {
        if (question + 1 < QUESTIONS.length) {
            window.location = `quiz.html?quiz_type=${quiz_type}&question=${question + 1}`
        } else {
            window.location = 'index.html'
        }
    }
}