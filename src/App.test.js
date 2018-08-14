import React from 'react';
import ReactDOM from 'react-dom';
import './style/App.css'
import './style/media.css'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
