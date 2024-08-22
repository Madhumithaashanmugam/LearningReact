import './App.css';
import SearchBox from './components/searchBox/searchbox.component';
import { useState, useEffect } from 'react';
//use state have the ability to encapsulate local state in functional component
import CardList from './components/card-list/card-list.component';

const App = () => {
  //use state gives us back an array of two values 
  //distructing will allow variables to values inside of an array 
  //the value searchField is the init state value of this function
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  //here we init the monster 
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  //here we are fetching the data from outside the browser that means it is a sideeffort function 
 //if we don't use useeffect hook it will struck in the infinite rerender cycle
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => {
    //here we kept an empty array that it only runs when the function triger 

        setMonsters(users);
        setFilteredMonsters(users); // Initialize filteredMonsters with fetched data
      });
  }, []);

  const onSearchHandler = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  //---here i have used useffect becasue when every i use search field it seach the monsters because it is in the same function
 //---for example i have two search field in this function the two search field will filter the monster to avoid that    //---i given monsters and SearchField array to this use Effect
  //---when every the action triggers in the monsters or searchfield this filtered moster will apply
 //---or else it will be quite 
  //---it only run when every the monsters and searchfield value change
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);
  //now we are init a value called SearchField and setSearchField in the function
 //---we use searchFIeldString to search the value with the given data and later
 //---we are setting that searchFieldString to setSearchField

  return (
    <div className="App">
      <h1 className="app-title"> Function Monster Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        onSearchHandler={onSearchHandler}
        placeholder="Search Monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
