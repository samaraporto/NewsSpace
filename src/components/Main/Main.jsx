import { Article } from '../Article/Article'
import { ThreeCircles } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import axios from 'axios';

import './style.css'

export function Main(){
    const [news, setNews] = useState([]);

    useEffect(() => {
      async function loadNews() {
        try {
          const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles');
          const newsData = response.data.results; // Corrigir aqui se necessário
          setNews(newsData);
        } catch (error) {
          console.error('Error fetching news:', error);
        }
      }
  
      loadNews();
    }, []);
    return(
        <main id="articles">
        {news.length === 0 ? (
          <div style={{ height: '400px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <ThreeCircles
              height="80"
              width="80"
              radius="9"
              color="pink"
              ariaLabel="loading"
            />
          </div>
        ) : (
          news.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              description={article.summary}
              provider={article.news_site}
              img={article.image_url}
              url={article.url}
            />
          ))
        )}
      </main>
    )
}