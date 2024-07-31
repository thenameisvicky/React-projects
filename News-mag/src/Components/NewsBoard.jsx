import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types'

export const Newsboard = ({category , country}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const articlesWithImages = data.articles.filter(article => article.urlToImage);
        const articlesWithoutImages = data.articles.filter(article => !article.urlToImage);
        setArticles([...articlesWithImages, ...articlesWithoutImages]);
      });
  }, [category , country]);

  return (
    <div className="container">
      <h2 className="text-center my-4">
        News <span className="badge bg-danger"> Now </span>
      </h2>
      <div className="row justify-content-center">
        {articles.map((article, index) => (
          <div key={index} className="col-md-4 mb-4">
            <NewsItem 
              title={article.title} 
              description={article.description} 
              url={article.url} 
              src={article.urlToImage} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
Newsboard.propTypes={
  category:PropTypes.string.isRequired,
  country:PropTypes.string.isRequired,
}


export default Newsboard