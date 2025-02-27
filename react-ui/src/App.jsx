import { useState } from 'react'
import TopBar from './components/TopBar';
import MainDash from './components/mainDash';
import PodProgress from "./components/podProgress";

import './App.css';

function App() {
  return (
      <div>
        <TopBar />
        <MainDash />
        <PodProgress />
      </div>
  );
}

export default App
