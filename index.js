let cardsArray = [
    {
        'name': 'css',
        'img': 'https://surajsharmaportfolio.000webhostapp.com/images/skills/css3.png'
    },
    {
        'name': 'js',
        'img': 'https://surajsharmaportfolio.000webhostapp.com/images/skills/js.png'
    },
    {
        'name': 'html',
        'img': 'https://surajsharmaportfolio.000webhostapp.com/images/skills/html5.png'
    },
    {
        'name': 'python',
        'img': 'https://surajsharmaportfolio.000webhostapp.com/images/skills/python.png'
    },
    {
        'name': 'github',
        'img': 'https://surajsharmaportfolio.000webhostapp.com/images/skills/github.png'
    },
    {
        'name': 'linux',
        'img': 'https://surajsharmaportfolio.000webhostapp.com/images/skills/linux.png'
    }
];

const gameCard = cardsArray.concat(cardsArray);


const myNumber = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    return array
}

const suffledChild = myNumber(gameCard)
const parentDiv = document.getElementById('cards-section');

let clickCounter = 0;
let firstCard = '';
let secoundCard = '';

const cardMatch = ()=>{
    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem)=>{
        curElem.classList.add('class_matched');
    })
}

const resetGame = ()=>{
    clickCounter = 0;
    firstCard = '';
    secoundCard = '';

    let card_selected = document.querySelectorAll('.card_selected');

    card_selected.forEach((curElem)=>{
        curElem.classList.remove('card_selected');
    })
}


parentDiv.addEventListener('click', (event) => {
    let curCard = event.target;

    if (clickCounter < 2) {
        if (curCard.id !== 'cards-section') {
            if (clickCounter === 0) {
                firstCard = curCard.parentNode.dataset.name;
                curCard.parentNode.classList.add('card_selected');
            }else{
                secoundCard = curCard.parentNode.dataset.name;
                curCard.parentNode.classList.add('card_selected');
            }
            clickCounter++;
        }
    }

    if (firstCard !== '' && secoundCard !== '') {
        if (firstCard === secoundCard) {
            // curCard.classList.add('class_matched')
            setTimeout(()=>{
                cardMatch();
                resetGame();
            },1000)
        }else{
            setTimeout(()=>{
                resetGame();
            },1000)
        }
    }
})


for (let i = 0; i < suffledChild.length; i++) {
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = suffledChild[i].name;
    // childDiv.style.backgroundImage = `url(${suffledChild[i].img})`;
    
    
    const front_div = document.createElement('div');
    front_div.classList.add('front_card');
    
    const back_div = document.createElement('div');
    back_div.classList.add('back_card');
    back_div.style.backgroundImage = `url(${suffledChild[i].img})`;

    
    
    parentDiv.appendChild(childDiv)
    childDiv.appendChild(front_div);
    childDiv.appendChild(back_div);

}

