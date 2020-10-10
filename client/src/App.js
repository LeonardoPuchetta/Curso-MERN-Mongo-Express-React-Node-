import React from 'react';
import { DatePicker, Space } from 'antd';
import { Card } from 'antd';
import './App.scss';

function App() {

const test = (date , dateString)=> {
console.log (date);
console.log(" ");
console.log(dateString)
}

  return (
    <div className="app">
      <h1> Web Personal - Client </h1>
      <h2>Proyecto</h2>
      <DatePicker onChange = {test} />
      <Card title="test ...." extra={<a href="#">More</a>} style={{ width: 350 }}>
      <p>Hola mundo</p>
      
    </Card>
    </div>
  );
}

export default App;
