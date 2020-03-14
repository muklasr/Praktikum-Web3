import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card } from 'antd';
import logo from './logo.svg';
import './App.css';
const { Header, Content, Footer } = Layout;

const cardData = [
  {
    nama : "Denny Caknan",
    job : "Android Developer",
    telephone : "08884877689",
  },
  {
    nama : "Sukimin",
    job : "UIUX",
    telephone : "08883270945",
  },
  {
    nama : "Raden Supardi",
    job : "iOS Developer",
    telephone : "08884474365",
  },
  {
    nama : "Bagong Fernandes",
    job : "Web Developer",
    telephone : "08883855564",
  },
  {
    nama : "Mukidi",
    job : "Android Developer",
    telephone : "08885610009",
  },
]

function App() {
  return (
    <div className="App">
      {cardData.map(data => (
        <Card title="Member Card" style={{ width: 500 }}>
          <p className="name">{data.nama}</p>
          <p className="job">{data.job}</p>
          <p>{data.telephone}</p>
        </Card>
      ))}
    </div>
  );
}

export default App;