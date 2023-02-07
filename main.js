const quote = document.querySelector('.qoute');
const authorName = document.querySelector('.author');
const copyQuotes = document.querySelector('#copy');
const newQuote = document.getElementById('newQuotes');

newQuote.addEventListener('click', ()=> {
    fetch("https://quotable.io/random").then(res => res.json()).then(result => {
        quote.innerText = result.content;
        authorName.innerText = result.author;
    })
});

copyQuotes.addEventListener('click', ()=>{
    navigator.clipboard.writeText(quote.innerText);
});
