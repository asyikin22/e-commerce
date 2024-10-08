import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { MedusaProvider } from 'medusa-react'

// const MEDUSA_API_URL = 'http://localhost:7001';
// const MEDUSA_API_KEY = process.env.REACT_APP_MEDUSA_API_KEY;
// console.log("Medusa API key:", MEDUSA_API_KEY)

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(
//     <React.StrictMode>
//         <MedusaProvider baseUrl={MEDUSA_API_URL} apiKey={MEDUSA_API_KEY}>
//             <App />
//         </MedusaProvider>
//     </React.StrictMode>
// );

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);


