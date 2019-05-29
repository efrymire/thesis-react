import React from 'react';
import ReactDOM from 'react-dom';
// import "./styling/main.scss";
import App from "./containers/App";
import * as serviceWorker from './serviceWorker';
import { csv, json } from "d3-collection";

ReactDOM.render(
  <App
    // timelineData={csv("./data/timeline_data")}
    // clusterCountData={csv("./data/cluster_count_data")}
    // clusterThemeData={json("./data/cluster_theme_data")}
    timelineData={[]}
    clusterCountData={[]}
    clusterThemeData={[]}
  />,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


