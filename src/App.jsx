import './App.css'
import { useState, useEffect } from 'react';
import { fetchArticles } from './services/gh';
import List from './List'

const App = () => {
  const [articles, setArticles] = useState([]); 

  const fetchPage = (e) => {
    e.preventDefault();

    fetchArticles(2).then(repsonseArticles => {
      setArticles([
        ...articles,
        ...repsonseArticles
      ]);
    });
  }

  useEffect(() => {
    fetchArticles(1).then(repsonseArticles => {
      setArticles(repsonseArticles);
    });
  }, []);

  return (
    <div>
      <h3>MRF news</h3>
      <List articles={ articles } />

      <button onClick={ fetchPage }>loadMore</button>
    </div>
  );
};

export default App;
