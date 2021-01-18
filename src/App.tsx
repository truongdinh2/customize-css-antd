import 'antd/dist/antd.css';
import React from 'react';
// import './form.scss'
import './App.css';
import TableData from './components/tableData/table';
import FormFile from './form';
import Test from './test';

function App() {
  return (
    <div>
      <FormFile />
      {/* <FormBonus/> */}
      {/* <Demo/> */}
      <Test />
      <TableData />
    </div>
  );
}

export default App;
