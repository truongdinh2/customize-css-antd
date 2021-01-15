import React from 'react';
// import './form.scss'
import './App.css'
import FormFile from './form';
import 'antd/dist/antd.css';
import FormBonus from './components/formBonus';
import Demo from './components/fields';

function App() {
  return (
    <div>
      <FormFile/>
      {/* <FormBonus/> */}
      <Demo/>
    </div>
  );
}

export default App;
