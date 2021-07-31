import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch, Link } from 'react-router-dom';
import NotFound from 'components/NotFound';
import Header from 'components/Header';


//lazy load - code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div > Loading... </div>}>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Redirect exact from='/' to='/photos'></Redirect>
            <Route path='/photos'>
              <Photo></Photo>
            </Route>
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div >
  );
}

export default App;
