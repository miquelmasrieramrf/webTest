import './App.css'
import List from './List'

const App = () => {
  const articles = [];

  const handleClick = (e) => {};

  return (
    <div>
      <h3>MRF news</h3>
      <List articles={ articles } />

      <button onClick={ handleClick }>load more articles</button>
    </div>
  );
};

export default App;
