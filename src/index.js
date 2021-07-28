import React from 'react';
import ReactDOM from 'react-dom';
import { Connect } from '@1hive/connect-react'

import App from './App';

const orgAddress = process.env.REACT_APP_ORG_ADDRESS.toLocaleLowerCase()
const network = parseInt(process.env.REACT_APP_CHAIN_ID)

console.log(orgAddress)
console.log(network);

ReactDOM.render(
  <React.StrictMode>
    <Connect
      location={orgAddress}
      connector="thegraph"
      options={{network}}
    >
      <App />
    </Connect>
  </React.StrictMode>,
  document.getElementById('root')
);

