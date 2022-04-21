import './App.css';
import React, {useState} from 'react';
import Tabs from './components/Tabs';
import Results from './components/Results';

function App() {
  const tabsArray = [
    {label: "tab 1", content: "johny rocket"},
    {label: "tab 2", content: "is a stupid"},
    {label: "tab 3", content: "name for a character"},
    {label: "tab 4", content: "tabman is way cooler"},
  ];

  const [ allTabs, setAllTabs ] = useState(tabsArray);

  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

  return (
    <div className="App">
        <Tabs 
        allTabs={ allTabs } 
        currentTabIndex={ currentTabIndex }
        setCurrentTabIndex={ setCurrentTabIndex } />
      <Results allTabs={ allTabs } currentTabIndex={ currentTabIndex } />
      
    </div>
  );
}

export default App;
