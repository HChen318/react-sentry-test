import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import './index.css';
import App from './App'

// if(process.env.NODE_ENV === 'production'){}
Sentry.init({
  dsn: 'https://e22a0ccdf9a94366b365196bb5aaf512@webr.akulaku.net/sentry/116',
  integrations: [new Integrations.BrowserTracing({})],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
  // release: // 上报版本
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
