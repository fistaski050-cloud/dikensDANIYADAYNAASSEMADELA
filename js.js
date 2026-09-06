  /* Базовый сброс отступов */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    overflow-x: hidden;
}

/* ШАПКА */
header {
    background-color: antiquewhite;
    background-image: url("img/;;;.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 150px;
    padding: 40px 20px;
}

header h1 {
    font-size: 67px;
    color: rgb(252, 247, 247);
    text-align: center;
}

/* ОСНОВНОЙ БЛОК */
main {
    background-color: aliceblue;
    background-image: url("img/fff.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 500px;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.greeting-text {
    font-family: cursive;
    font-style: italic;             
    font-weight: 700;               
    font-size: 28px;
    line-height: 1.4;
    color: rgba(81, 102, 53, 0.842);
    text-align: center;
    max-width: 800px;
}

/* АНИМАЦИЯ КРАЕВОЙ ВРАЩАЮЩЕЙСЯ ГРАФИКИ */
.image1, .image2 {
    animation: Rotate 10s linear infinite;
    max-width: 100%;
    height: auto;
}

@keyframes Rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

/* ПОДВАЛ */
footer {
    background-color: rgb(47, 54, 61);
    background-image: url("img/jjjj.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 400px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    padding: 40px 20px;
}

.footer-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.footer-item img {
    max-width: 150px;
    height: auto;
    margin-bottom: 10px;
}

.footer-item h2 {
    font-family: cursive;
    font-style: italic;
    font-weight: 700;
    font-size: 32px;
    color: rgb(156, 16, 63);
}

/* СТИЛИ И АНИМАЦИЯ ПОЯВЛЕНИЯ ТЕКСТА */
header h1, .greeting-text, .footer-item h2 {
    opacity: 0;
}

header h1.animate, .greeting-text.animate, .footer-item h2.animate {
    animation: FadeIn 1s ease-out forwards;
}

@keyframes FadeIn {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* АДАПТИВ ПОД МОБИЛЬНЫЕ УСТРОЙСТВА */
@media (max-width: 768px) {
    header h1 {
        font-size: 36px;
    }

    .greeting-text {
        font-size: 22px;
    }

    footer {
        flex-direction: column;
        gap: 40px;
    }

    .footer-item img {
        max-width: 120px;
    }

    .footer-item h2 {
        font-size: 24px;
    }
}