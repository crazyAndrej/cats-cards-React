import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [title, setTitle] = useState('')
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState(cats);

  console.log('render');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setCats(users));
  }, []);

  useEffect(() => {
    const newFilteredCats = cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredCats(newFilteredCats);
  }, [cats, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>

      <SearchBox
        className="cats-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search cats"
      />
      <br />
      <SearchBox
        className="title-search-box"
        onChangeHandler={onTitleChange}
        placeholder="set title"
      />

      <CardList cats={filteredCats} />
    </div>
  );
};

export default App;
