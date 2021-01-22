import 'antd/dist/antd.css';
import MUIDataTable from 'mui-datatables';
import React from 'react';
// import './form.scss'
import './App.css';
import TableData from './components/tableData/table';
import Example from './example';
import FormFile from './form';
import MuDataTable from './muiDataTable/MuiDataTable';
import Test from './test';

function App() {
  return (
    <div>
      <FormFile />
      {/* <FormBonus/> */}
      {/* <Demo/> */}
      <Test />
      <TableData />
      <MuDataTable/>
    </div>
  );
}

export default App;
