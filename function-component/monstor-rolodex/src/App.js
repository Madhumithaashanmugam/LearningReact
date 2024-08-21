import './App.css';
import SearchBox from './components/searchBox/searchbox.component';
//use state have the ability to encapsulate local state in functional component
import { useState } from 'react';


const App = () => {
  //use state gives us back an array of two values 
  //distructing will allow variables to values inside of an array 
  const [SearchField,setSearchField] = useState('')  //[value.setvalue]
  console.log({SearchField})

  const onSearchChange = (event) => {
    const SearchFieldString = event.target.value.ToLowerCase()
    setSearchField(SearchFieldString)
    
    }
  
  
  return (
    <div className= "App">
      <h1 className= "app-title">Monster Rolodex</h1>
      <SearchBox
      className ="monster-search-box"
      onchangeHandler={onSearchChange}
      placeholder ="searchMonsters"
      />

    </div>
    
  );
}

export default App;
