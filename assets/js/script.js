/**
 * 
 * DOM
 * Document Object Model(Modelo de Objeto do Documento)
 * 
 */

/**
 * 
 * eventos
 * 
 * addEventListener
 * 
 * elemento.addEventListener('evento', função);
 * 
 */
/**
 * passo a passo
 * 
 * 1º passo: capturar o valor da textarea para criar o tweet
 * 2º passo: construir o tweet
 * 3º passo: imprimir esse tweet
 * 
 */
const elementTextArea = document.querySelector('textarea');
const elementButton = document.querySelector('.postar');
const elementFeed = document.querySelector('.conteudoPrincipal__listaTweets')
function capturaTweet(event){
    event.preventDefault();
    const contentTextArea = elementTextArea.value;
    estruturaPost(contentTextArea);
}

function estruturaPost(tweet){
    let agora = new Date();
    let hora = agora.getHours();
    let minutos = agora.getMinutes();
    if(minutos<10){
        minutos = `0${minutos}`;
    }
    const post = {
        nome:'Jhonatan Gonçalves Pereira ',
        foto:'./assets/img/eu 1X1.jpg',
        iconeVericacao:"./assets/img/marca-de-verificacao.png",
        usuario: '@Jhonata73967120',
        texto:tweet,
        tempo:`${hora}:${minutos}`,
        link: 'https://twitter.com/Jhonata73967120'
    }
    imprimeNoFeed(post);
}

function imprimeNoFeed(post){

    //desestruturando o objeto post
    const {nome,foto,iconeVericacao,usuario, texto, tempo,link} = post;


    /*
    .createElement(), 
    .innerText()
    .appendChild()
    .classList.add()
    */
    
    //criação de elementos HTML createElement();
    //adição de conteúdo no elemento html innerText = ''
    // e adição das classes com classList.add()
    let li = document.createElement('li');
    li.classList.add('conteudoPrincipal__tweet')

    let img = document.createElement('img');
    img.src = foto;
    img.classList.add('tweet__fotoPerfil');

    let imgIconeVerificacao = document.createElement('img');
    imgIconeVerificacao.src = iconeVericacao;

    let div = document.createElement('div');
    div.classList.add('tweet__conteudo');

    let h2 = document.createElement('h2');
    h2.innerText = nome;

    let a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.innerText = ` ${usuario}`;

    let spanVerPerfil = document.createElement('span');
    spanVerPerfil.innerText = ' Ver perfil';
    spanVerPerfil.classList.add('perfil');
    console.log(spanVerPerfil);


    let span = document.createElement('span');
    span.innerText = ` ${tempo}`;
    span.classList.add('tempo');
    
    

    let p = document.createElement('p');
    p.innerText = texto;


    //Adição do ícone no h2
    h2.appendChild(imgIconeVerificacao)

    //Adição span ver Perfil ao <a>
    a.appendChild(spanVerPerfil);

    //Adição de elementos dentro da div
    div.appendChild(h2);
    div.appendChild(a);
    div.appendChild(span);
    div.appendChild(p);
    

    //adição dos elementos na li
    li.appendChild(img);
    li.appendChild(div);

    //colocando elementos no feed
    elementFeed.appendChild(li);

    //limpando o textarea
    elementTextArea.value = '';
}

elementButton.addEventListener('click', capturaTweet);