function getNews() {
    let NewsName = id_category.value;
    console.log(NewsName);

    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=6cc9a8ae24d04add928217386ecd882f&category=${NewsName}`).
        then(res => res.json()).then(data => displayNews(data))
}

function displayNews(data){
    let news=data.articles;
    let htmlData=``
    news.forEach(function(article){
    let title=article.title;
    let image=article.urlToImage;
    let description=article.description;
    let content=article.content;
    let url=article.url;
    let time=article.publishedAt;
        
    htmlData+=`

    <div class="card text-bg-secondary display-flux mt-3 mb-3 mx-auto" style="width: 45%;">
  <img src="${image}" class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title"><h5>Title</h5> ${title}</h5>
    <hr>
    <p class="card-text"><h5>Description</h5>  ${description}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"><h5>Brief content</h5>  ${content}</li>
    // <li class="list-group-item text-bg-light"></li>
    <li class="list-group-item"><h5>Published at</h5> ${time}</li>
  </ul>
  <div class="card-body text-bg-light">
    <a href="#" class="card-link"><h5>Url link</h5>  ${url}</a>
  </div>
</div>   
    
      
    `

   
    });  
    console.log(htmlData);
    id_news.innerHTML=htmlData

}
