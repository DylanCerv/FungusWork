export const ArticleList = ({ articles }) => {
    return (
      <div className="bg-black article-list">
        {Array.isArray(articles) ? (
          articles.map((article) => (
            <div className="article-container" key={article.id}>
              <div className="img-container">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="article-body">
                <h2 className="text-green-500">{article.title}</h2>
                <p>{article.description}</p>
                <div className="article-footer">
                  <a href={article.url} target="_blank" rel="noreferrer">Ver Sitio</a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No articles available.</p>
        )}
      </div>
    );
  };
  
