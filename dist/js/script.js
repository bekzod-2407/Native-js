window.addEventListener("DOMContentLoaded", () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        })
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function ShowTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    ShowTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    ShowTabContent(i);
                }
            })
        }
    })

    //secundomer 

    const deadLine = '2022-03-08';

    function getTimeRemaining(endime) {

        const t = Date.parse(endime) - Date.parse(new Date()),
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),   // %  ostatok
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds = Math.floor((t / 1000) % 60);



        return {
            "total": t,
            "days": days,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        }
    }

    function setClock(selector, endime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            const t = getTimeRemaining(endime);



            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval)
            }
        }

    }

    setClock('.timer', deadLine);

    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //     method: "POST",
    //     body: JSON.stringify({ name: "ahaha" }),
    //     headers: {
    //         "content-type": "application jsons"
    //     }
    // })
    //     .then(response => response.json())
    //     .then(json => console.log(json))
    // console.log(this.response);

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modalClose = document.querySelector('[data-close]'),
        modal = document.querySelector('.modal');
    // modalId = setTimeout(openModal, 5000);

    function openModal() {
        modal.classList.add('show', 'fade');
        modal.classList.remove('hide');
        document.body.style.overflow = "hidden";
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show')
        document.body.style.overflow = "visible"
        // clearInterval(modalId);
    }

    modalTrigger.forEach(btn => btn.addEventListener('click', openModal));

    modalClose.addEventListener('click', closeModal)

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();

        }

    })

    document.addEventListener('keydown', (event) => {
        if (event.code === "Escape" && modal.classList.contains("show")) {
            closeModal();
        }
    })

    function scrollModal() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', scrollModal);
        }
    }
    window.addEventListener('scroll', scrollModal);
    // DRY


    class MyCard {
        constructor(src, alt, title, descr, price, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.transfer = 27;
            this.chagneToUAH();
            this.parent = document.querySelector(parentSelector);
        }

        chagneToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {

            const element = document.createElement('div');
            element.innerHTML = `
            <div class="menu__item">
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
            </div>
            `;
            this.parent.append(element);
        }
    }

    new MyCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        10,
        ".menu .container"
    ).render();


    new MyCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        15,
        ".menu .container"
    ).render();


    new MyCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        23,
        ".menu .container"
    ).render();






    //    


    // filter
    // const shortName = users.filter(function (name) {
    //     return  name.length < 5;
    // });

    // const users = ['Akmal', 'Bexruz', 'Ivan', 'Kim', 'doe', 'Naruto'];
    // const shortName = users.filter(name => {
    //     return name.length < 5;
    // })
    // console.log(shortName);

    // // map
    // const users = ['AKmAl', 'BexruZ', 'IvAn', 'Kim', 'doE', 'NaRUto'];
    // const NewUsers = users.map(item => item.toLowerCase());
    // console.log(NewUsers);


    // // some /every

    // const example = [4, 12, 15];

    // console.log(example.every(item => typeof (item) === 'number'));


    // console.log(example.some(item => typeof (item) === 'number'));




    // const arr = [1, 2, 3, 4];

    // const res = arr.reduce((sum, current) => sum + current);
    // console.log(res);


    // const arrs = ['apple', 'cherry', 'melon'];

    // const answer = arrs.reduce((sum, current) => `${sum}, ${current}`);

    // console.log(answer);


    // const obj = {
    //     Akmal: 'student',
    //     Anna: "student",
    //     Bekzod: "teacher",
    //     Sherod: "teacher"
    // };


    // const arr = Object.entries(obj).filter(item => item[1] === 'student').map(item => item[0].toLowerCase())


    // console.log(arr);

        // const logs = function (a, b, ...rest) {
        //     console.log(a, b, rest);
        // }


        // logs('akmal', 'sherzod', 'alisher', 'bahodir', 'sherali');




        // console.log("zapros....");

        // const req = new Promise(function (resolve, reject) {

        //     setTimeout(() => {
        //         console.log('potgotovka...');

        //         const item = {
        //             name: "iphone",
        //             price: 1000

        //         }
        //         resolve(item)

        //     }, 2000)
        // }).then((item) => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             reject(item)
        //         }, 2000)
        //     })

        // }).then(item => {
        //     item.modify = true;
        //     return item;
        // }).then(item => {
        //     console.log(item);
        // }).catch(() => {
        //     console.error(" error");
        // }).finally(() => {
        //     console.log(' finally works!');
        // })

        const test = time => {
            return new Promise(resolve => {
            setTimeout(() => resolve(), time)
        });
    }

    // test(2000).then(() => console.log('2000ms'));
    // test(4000).then(() => console.log('4000ms'));
    // test(4000).then(() => console.log('4000ms'));
    // test(4000).then(() => console.log('4000ms'));
    // test(4000).then(() => console.log('4000ms'));
    // test(4000).then(() => console.log('4000ms'));
    // test(4000).then(() => console.log('4000ms'));


    // Promise.all([test(4000), test(2000), test(2500)]).then(() => { console.log('all promise is workking') })


    // Promise.race([test(4000), test(2000), test(2500)]).then(() => {

    //     console.log('race is working');
    // })




















});



























































