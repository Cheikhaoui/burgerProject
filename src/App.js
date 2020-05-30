import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout2 from './components/layout/Layout2';
import BurgerBuilder from './container/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout2>
        <BurgerBuilder/>
      </Layout2>
    </div>
  );
}

export default App;
