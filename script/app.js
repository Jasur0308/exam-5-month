const $cards = document.querySelector(".cards");
const $card = document.querySelector(".card");

const renderArticles = (articles) => {
    $card.remove()
    articles.data.forEach(article => {
        const articleElement = $card.cloneNode(true);
        articleElement.style.display = 'block';
        articleElement.querySelector("#image").src = article.image;
        articleElement.querySelector(".title").innerHTML = `${article.title}`;
        articleElement.querySelector(".description").innerHTML = `${article.description}`;
        articleElement.querySelector(".name").innerHTML = `${article.author}`;
        articleElement.querySelector(".role").innerHTML = `${article.tags}`;
        $cards.appendChild(articleElement);
    });
}

function loadData() {
    axios.get('https://blog-post-production-b61c.up.railway.app/api/v1/blogs')
    .then(response => {
        const articles = response.data;
        renderArticles(articles);
    })
    .catch(error => console.error(error));
}

loadData();