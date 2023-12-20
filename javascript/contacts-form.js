(function () {
    const form = document.querySelector('.contact-form-nodejs'); //знаходимо форму селектором

    async function handleSubmit(event) {
        event.preventDefault(); //відключає відправку подій по замовчуванню
        const status = document.querySelector('.contact-form-status'); //знаходить поле зі статусом по селектору
        const data = JSON.stringify({ //із обʼєкта js робить json
            name: document.querySelector('.contact-form-nodejs input[name=user-name]').value,
            number: document.querySelector('.contact-form-nodejs input[name=user-number]').value,
            email: document.querySelector('.contact-form-nodejs input[name=user-email]').value,
            text: document.querySelector('.contact-form-nodejs input[name=user-text]').value
        }); //готує дані для відправки

        try {
            await fetch(event.target.action, { //відправляє дані на сервер
                method: form.method, //тут post
                body: data, //бере дані
                headers: { //задає заголовки
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }//треба задати, шо це json
            });

            status.innerHTML = "Thanks for your submission!";
            form.reset(); //скидання форми, щоб поля після сабміт були пусті
        
        } catch { //якщо у try буде помилка, тоді воног перейде в цей блок і видасть текст
            //якщо в try помилки не буде, то воно блок catch пропустить і піде далі
            status.innerHTML = "Oops! There was a problem submitting your form";
        }
    }
    
    form.addEventListener("submit", handleSubmit)
})();