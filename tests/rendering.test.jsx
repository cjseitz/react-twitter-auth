import React from 'react';
import ReactDOM from 'react-dom';
import TwitterLogin from 'TwitterLogin';

describe('TwitterLogin', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TwitterLogin loginUrl="https://localhost:8080/" requestTokenUrl="https://localhost:8080/reverse" onFailure={console.log("failed")} onSuccess={console.log("success")}/>, div);
  });
});
