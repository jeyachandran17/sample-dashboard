import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { DashBoardHead } from './DashBoardHead';
import { DashBoardPage } from './DashBoardPage';
import React from 'react';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, ArcElement} from 'chart.js';
import { Charts } from './Charts';
import { ContentPage } from './ContentPage';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  )
}

function Dashboard(){

  return(
    <div className="main">
      <DashBoardHead />
      <DashBoardPage />
      <Charts />
      <ContentPage />
    </div>
  );
}

export default App

