import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It\'s my first post', likesCount: 10}]

let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Anya'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Veronika'},
    {id: 5, name: 'Zhenya'},
    {id: 6, name: 'Vika'}]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'}]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
          <App posts={posts} dialogsData={dialogsData} messages={messages}/>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
