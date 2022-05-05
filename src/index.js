import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider, QueryClientProviderProps } from "react-query";

// const queryClient = new QueryClient();


const ATestComponent = (props) => {
  console.log(props, props.client)
  return (
    <div>
      {props.children}
    </div>
  )
}

// console.log(queryClient, "the queryclient")
// ReactDOM.createRoot(
//   document.getElementById("root"),
// )
//   .render(
//     <React.StrictMode>
//       <QueryClientProvider client={queryClient} />
//        <App />
//       <QueryClientProvider />
//     </React.StrictMode>
//   );

ReactDOM.render(
  <ATestComponent>
    <App />
  </ATestComponent>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



reportWebVitals();
