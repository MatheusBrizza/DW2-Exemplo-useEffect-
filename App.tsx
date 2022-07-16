import * as React from 'react';
import './style.css';
import axios from 'axios';

export default function App() {
  const [user, set] = React.useState({});

  React.useEffect(() => {
    const response = axios
      .get('https://api.github.com/users/mathiasgheno')
      .then((response) => {
        set(response.data);
      });
  });
  return (
    <div className="App">
      <h1>Hello StackBlitz!</h1>
      <p>{user.name}</p>
    </div>
  );
}
