import React from 'react';
import './CSSModule.module.css';

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import "@blueprintjs/select/lib/css/blueprint-select.css";

import { HeadNav } from './Container/Menu/HeadNav';
import CounterContainer from './Container/CounterContainer';
import TodoApp from './Container/TodoApp';
import Router from './Container/Router';

const App = () => {
  return (
    <>
    <HeadNav />
    <Router/>
    </>
  );
}

export default App;
