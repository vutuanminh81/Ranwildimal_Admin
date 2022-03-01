import logo from './logo.svg';
import './App.css';
import LoginForm from './Login/LoginForm';
import { useState } from 'react';
import Dashboard from './Dashboard/Dashboard';

function App() {
  const account = {
    acc : "minhdepzai",
    pass :  "superdepzai"
  }

  const [user, setUser]  = useState({username: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);
  }

  const Logout = details => {
    console.log("Logout");
  }

  return (
    <div className="App">
      {(user.username !== "") ? (
        <div>
          <Dashboard/>
        </div>
      ) : (
        <LoginForm/>
      )}
    </div>
  );
}

export default App;
