import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from "react-router-dom";


// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FavoritesContextProvider } from './ammo/favorites-context';
import App from "./App";



ReactDOM.render(
  <FavoritesContextProvider >
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);