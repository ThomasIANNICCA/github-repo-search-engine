import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';

import logo from '../../assets/images/logo-github.png';

import './App.scss';
import SearchBar from '../SearchBar/SearchBar';
import Message from '../Message/Message';
import ReposResults from '../ReposResults/ReposResults';
import Menu from '../Menu/Menu';
import Faq from '../Faq/Faq';
import MoreResults from '../MoreResults/MoreResults';

function App() {
  const [repositories, setRepositories] = useState([]);

  // le nombre de résultats
  const [nbResults, setNbResults] = useState(0);

  // le contenu de l'input du champ de recherche
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    // console.log(`Nouveau titre avec : ${searchValue}`);

    document.title = `Github search: ${searchValue}`;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [repositories]);

  const loadResults = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=${searchValue}&sort=stars&order=desc&page=1&per_page=9`
      )
      .then((response) => {
        // console.log(response);
        // console.log(response.data.items);

        setRepositories(response.data.items);

        setNbResults(response.data.total_count);
      })
      .catch((error) => {
        console.log('catch/error', error);
      });
  };

  const fetchMoreResults = () => {
    axios
      .get(
        `https://api.github.com/search/repositories?q=${searchValue}&sort=stars&order=desc&page=${
          repositories.length / 9 + 1
        }&per_page=9`
      )
      .then((response) => {
        setRepositories([...repositories, ...response.data.items]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="logo">
        <img src={logo} alt="" />
      </header>
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                handleSubmit={loadResults}
              />
              <Message nbResults={nbResults} />
              <ReposResults results={repositories} />
              {repositories.length !== nbResults && (
                <MoreResults fetchMore={fetchMoreResults} />
              )}
            </>
          }
        />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
