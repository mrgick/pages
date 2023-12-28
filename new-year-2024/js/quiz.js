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
    ["1.mp3", "Морозко"]
]

const set_quiz = (question) => {
    document.getElementsByClassName("quiz")[0].style["display"] = "flex"
    document.getElementById("quiz-question").innerHTML = (question + 1).toString() + ". " + QUIZ_QUESTIONS[question][0]
    document.getElementById("quiz-answer").innerHTML = QUIZ_QUESTIONS[question][1]

    document.getElementById("control-answer").onclick = (e) => {
        document.getElementById("quiz-answer").style["display"] = "block"
    }

    document.getElementById("control-next").onclick = (e) => {
        if (question + 1 < QUIZ_QUESTIONS.length) {
            window.location = `quiz.html?quiz_type=quiz&question=${question + 1}`
        } else {
            window.location = 'index.html'
        }
    }


}

const set_song = (question) => {
    document.getElementsByClassName("song")[0].style["display"] = "flex"
    document.getElementById("song-answer").innerHTML = (question + 1).toString() + ". Откуда отрывок песни?"
    document.getElementById("control-answer").onclick = (e) => {
        if (document.getElementById("music-player").currentTime != 0.0) {
            document.getElementById("song-answer").innerHTML = "Ответ: " + SONG_QUESTIONS[question][1]
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


window.onload = () => {
    let params = new URLSearchParams(document.location.search);
    let question = parseInt(params.get("question"), 10)
    let quiz_type = params.get("quiz_type")
    if (quiz_type == "quiz") {
        set_quiz(question)
    } else if (quiz_type == "song") {
        set_song(question)
    } else if (quiz_type == "multfilm") {

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

}