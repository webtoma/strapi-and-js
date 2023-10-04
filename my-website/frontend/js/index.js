function displayArticles(articles){
    let divArticles = "";
    for(let i = 0; i < articles.length; i++){
        let article = articles[i];
        divArticles += `
            <div class="col-md-4 text-center">
                <h3>${article.attributes.title}</h3>
                <p>${article.attributes.description}</p>
                <a class="btn btn-primary" href="article.html?id=${article.id}">Read more</a>
            </div>
        `;
    }
    document.getElementById('articles').innerHTML = divArticles;
}
function displaySingleArticle(article){
    let divArticle = `
        <div class="col-md-12 text-center">
            <h3>${article.attributes.title}</h3>
            <img src="http://localhost:1337${article.attributes.cover.data.attributes.url}" class="img-fluid">
            <p>${article.attributes.description}</p>
            <a class="btn btn-primary" href="index.html">Return to home</a>
        </div>
    `;
    document.getElementById('single-article').innerHTML = divArticle;
}

let url = window.location.href;
let filename = url.split('/').pop();
filename = filename.split('.')[0];
if(filename == "index"){
    //display all articles in index.html
    fetch('http://localhost:1337/api/articles?sort=title:asc')
    .then(response => response.json())
    .then(data => displayArticles(data.data));
}else if (filename == "article"){
    //display Single article on article.html
    let parametersURL = new URLSearchParams(window.location.search);
    let id = parametersURL.get('id');
    fetch(`http://localhost:1337/api/articles/${id}?populate=*`)
    .then(response => response.json())
    .then(data => displaySingleArticle(data.data));
}