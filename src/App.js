import React from "react";
import BusinessList from "./bislist";
import SearchBar from "./searchbar";
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;
