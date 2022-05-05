import React from 'react';
import { QueryClient, QueryClientProvider } from "react-query";
import './App.css';
import logo from './logo.svg';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  

  return (
    <>
    <QueryClientProvider client={queryClient} />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React ok
          </a>
        </header>
      </div>
    <QueryClientProvider />
      
    </>
  );
}

export default App;
