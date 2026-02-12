import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// HTML 파일(public/index.html)에 있는 id가 'root'인 요소를 찾습니다.
const root = ReactDOM.createRoot(document.getElementById('root'));

// React 앱을 strict mode(엄격 모드)로 실행합니다.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);