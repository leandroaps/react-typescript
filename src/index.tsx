import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <main className="form-signin w-100 m-auto">
      <div className="container">
        <header>
          <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Simple React Type and Read with Typescript
              </a>
              <div
                className="collapse navbar-collapse"
                id="navbarCollapse"
              ></div>
            </div>
          </nav>
        </header>
        <App />
      </div>
    </main>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
