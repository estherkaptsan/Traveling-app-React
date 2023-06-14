import logo from './logo.svg';
import './App.css';
import './assets/scss/main.scss'

import AppHeader from './cmps/AppHeader'
import { Route, HashRouter as Router, Routes, Switch } from 'react-router-dom';
import TravelingForms from './cmps/TravelingForms';
import TravelingTable from './cmps/TravelingTable';

function App() {
  return (

    <Router>
      <section className="main-app">
        <AppHeader />

        <main className="container">
          <Routes>
            <Route path="/forms" element={<TravelingForms />} />
            <Route path="/table" element={<TravelingTable />} />
          </Routes>
        </main>

      </section>
    </Router>
  );
}

export default App;
