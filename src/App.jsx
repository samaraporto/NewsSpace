import { useState, useEffect } from 'react';
import axios from 'axios';
import { NavBar } from './components/NavBar/NavBar';
import { Article } from './components/Article/Article';
import { ThreeCircles } from 'react-loader-spinner';
import { Counter } from './components/Counter/Counter';
import {Footer} from './components/Footer/Footer'

import './styles/App.css';

import articleImg1 from "./assets/images/article1.jpeg";
import articleImg2 from "./assets/images/article2.jpeg";
import articleImg3 from "./assets/images/article3.jpeg";

function App() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function loadNews() {
      try {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v4/articles');
        const newsData = response.data.results; // Corrigir aqui se necessário
        console.log(newsData)
        setNews(newsData);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    }

    loadNews();
  }, []);

  return (
    <>
      <NavBar />
      {/* <Counter /> */}

      <section id="articles">
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
      </section>
      <Footer/>
    </>
  );
}

export default App;