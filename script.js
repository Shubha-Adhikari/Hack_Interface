//accessing html code
const start = document.getElementById('start');
const interface = document.getElementById('main-interface');
const user = document.getElementById('username');
const search = document.getElementById('search');
const form = document.getElementById('form');
const progress = document.getElementById('progress-bar');
const progress_text = document.getElementById('progress-text');
const progress_cont = document.getElementById('progress-cont');
const title = document.getElementById('progress-title');
const progress_bar_bg = document.getElementById('progress_bar_bg');
const empty_field = document.getElementById('empty_field');
const max_length = document.getElementById('max_length');
const warning_up = document.getElementById('warning_up');
const headingg = document.getElementById('heading');

start.addEventListener('click', () => {
    start.classList.add('hidden');
    form.classList.toggle('hidden');
    setInterval(() => {

        warning_up.classList.add('hidden');
        headingg.style.paddingTop = '5.35em';
    }, 2000)
})


const main_func = async () => {
    let conv_user = user.value;
    let given_user = conv_user.toString();



    if (given_user == "") {

        empty_field.classList.remove('hidden');
        max_length.classList.add('hidden');

    } else {

        progress.style.width = `${0}%`;
        progress_text.innerHTML = `${0}%`;

        empty_field.classList.add('hidden');
        form.classList.toggle('hidden');
        progress_cont.classList.toggle('hidden');


        let array = [
            `Initializing hack program...`,
            `Connecting to Kali Linux Server...`,
            `Connected Successfully!`,
            `<b class="ms-5 bold">kali-hack-server:~$</b> Searching ${given_user}'s username...`,
            `<b class="ms-5 bold">kali-hack-server:~$</b> Username found!`,
            `<b class="ms-5 bold">kali-hack-server:~$</b> Connecting to Facebook...`,
            `<b class="ms-5 bold">kali-hack-server:~$</b> Hacking ${given_user}'s account...`,
            `<b class="ms-5 bold">kali-hack-server:~$</b> Trying 10,000 password combinations...`,
            `<span class="text-danger"><b class="ms-5 bold">kali-hack-server:~$ Error: Match not found!</b></span>`,
            `<b class="ms-5 bold">kali-hack-server:~$</b> Trying more password combinations...`,
            `<span class="text-danger"><b class="ms-5 bold">kali-hack-server:~$ Error: Match not found!</b></span>`,
            `<b class="ms-5 bold">kali-hack-server:~$</b> Using Brute force!`,
            `<b class="ms-5 bold">kali-hack-server:~$</b> Launching DDoS attacks!`,
            `<b class="ms-5 bold">kali-hack-server:~$</b> Password match found!`,
            `<b class="ms-5 bold">kali-hack-server:~$</b> ${given_user}'s account is hacked!`,
        ]


        const seconds = async (secs) => {
            return new Promise((resolve, reject) => {
                setInterval(() => {
                    resolve(true);
                }, secs * 1000);
            })
        }

        const showHack = async (value) => {
            await seconds(Math.floor(Math.random() * 4) + 2);
            interface.innerHTML += value;
        }

        (async () => {
            let x = 0;
            let progress_bar_formula = 100 / array.length;
            for (let index = 0; index < array.length; index++) {

                await showHack(`<p class="interface-text">${array[index]}</p>`);
                x = x + progress_bar_formula;

                progress.style.width = `${Math.round(x)}%`;
                progress_text.innerHTML = `${Math.round(x)}%`;
            }
            if (progress.style.width == '100%') {

                setTimeout(() => {

                    progress.classList.toggle('hidden');
                    progress_text.classList.toggle('hidden');
                    progress_bar_bg.classList.toggle('hidden');
                    title.innerHTML = `<h1 id="progress-title">Hacking Process Completed!</h1>`;

                }, 4000)
            }
        })()
    }
}

search.addEventListener('click', main_func);

let current_text_length = () => {
    let max = user.getAttribute('maxlength');
    let current = user.value.length;

    if (current >= max) {
        max_length.classList.remove('hidden');
        empty_field.classList.add('hidden');
    }
}

user.oninput = () => {
    current_text_length();
}

user.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {

        e.preventDefault();
        search.click();
    }
});