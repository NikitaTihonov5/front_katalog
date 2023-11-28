block = document.querySelector('.txt')
if(window.location.pathname=="/D:/site-tihon/site/book.html" ){
async function uploadMultiple() {
    const response = await fetch("http://127.0.0.1:8000/books/", {
      method: "GET",
    });
    const result = await response.json();
    console.log(result)
    for (i of result.books){
        books = document.createElement('div')
        books.appendChild(document.createElement('h3'))
        books.appendChild(document.createElement('p'))
        books.appendChild(document.createElement('img'))
        books.innerHTML = `<img src=${i.img}>
        <h3>${i.title}</h3>
        <p>${i.genre}</p>
        `;
        block.appendChild(books)
    }
}
uploadMultiple()
}
blok = document.querySelector('.txt-news')
if(window.location.pathname=="/D:/site-tihon/site/new.html" ){
async function uploadMultiple() {
    const response = await fetch("http://127.0.0.1:8000/news/", {
      method: "GET",
    });
    const result = await response.json();
    console.log(result)
    for (i of result.news){
        news = document.createElement('div')
        news.appendChild(document.createElement('h3'))
        news.appendChild(document.createElement('p'))
        news.innerHTML =
        `<h3>${i.title}</h3>
        <p>${i.content}</p>
        `;
        blok.appendChild(news)
    }
}
uploadMultiple()
}
