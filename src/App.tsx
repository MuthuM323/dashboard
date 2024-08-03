import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col lg:flex-row w-full h-screen">
        
        <Sidebar />
        <div className="flex flex-col w-full ">
          <Header  />
          <main className="flex-grow p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
