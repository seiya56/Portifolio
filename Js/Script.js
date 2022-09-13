//Parte da formação
const design = document.getElementById('design');

const analise = document.getElementById('analise');

const aws = document.getElementById('AWS');

const periodo = document.getElementById('periodo');

const selecaoimg = document.getElementById('selecao')

function designtroca () {

    const tempo = '2018 a 2022'
    periodo.textContent = `${tempo}`;
    selecaoimg.src = 'Img/Ellipse 2-Zion.png'
};

design.addEventListener('click', designtroca);

function analisetroca () {
    const tempo = '2022 a 2024';
    periodo.textContent = `${tempo}`;
    selecaoimg.src = 'Img/Ellipse 2-unisuam.png'
};

analise.addEventListener('click', analisetroca);

function awstroca () {
    const tempo = '2022';
    periodo.textContent = `${tempo}`;
    selecaoimg.src = 'Img/Ellipse 2-aws.png'
};

aws.addEventListener('click', awstroca);

//Parte dos Projetos

const Lamp = document.getElementById('lamp');

const Land = document.getElementById('land');

const Poke = document.getElementById('poke');

const Descri = document.getElementById('descricao');

const Descrien = document.getElementById('descricaoen');

function descrilamp () {

    Descri.textContent =`Uma lampada feita de JavaScript, como um teste de conhecimento foi um grande aprendizado, mas algumas vezes tive que recorrer a internet para achar. `

    Descrien.textContent =`A lightbulb made of JavaScript, as a test of knowledge was a great learning experience, but sometimes I had to go to the internet to find it. `
};

function descriland () {

    Descri.textContent =`Uma landing Page que fiz apenas com html e css para testa o @mediaquery e como poderia usa-lo em um projeto real como esse.  `

    Descrien.textContent =`A landing page I made with just html and css to test @mediaquery and how I could use it in a real project like this.  `
};

function descripoke () {

    Descri.textContent =`Foi o projeto mais ambicioso que fiz levando em torno de algumas horas, e muitos ajustes além de ser meu primeiro projeto com uma api. Posso dizer que foi um enorme aprendizado, e um projeto que tenho muito orgulho e gratidão. `

    Descrien.textContent =`It was the most ambitious project I've done taking around a few hours, and a lot of tweaking besides being my first project with an api. I can say that it was a huge learning experience, and a project that I am very proud and grateful for. `
};

Lamp.addEventListener('click',descrilamp);

Land.addEventListener('click',descriland);

Poke.addEventListener('click',descripoke);
