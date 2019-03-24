import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from "react-router-dom";

const baseUrl :string= document.getElementsByTagName('base')[0].getAttribute('href') as string;
const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <Route component={App} />
  </BrowserRouter>,
  rootElement);
