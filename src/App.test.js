import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import expect from 'expect';
import Message from "./components/Message";
import Emailform from "./components/Emailform";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Emailform',()=>{
  it('should exist',()=>{
    expect(Emailform).toBeTruthy();
  });
});

describe('Message',()=>{
  it('should exist',()=>{
    expect(Message).toBeTruthy();
  });
});
