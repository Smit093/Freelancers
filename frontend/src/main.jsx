import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginContextProvider from './contexts/LoginContextProvider.jsx'
import UserContextProvider from './contexts/UserContextProvider'

createRoot(document.getElementById('root')).render(
    <LoginContextProvider>
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </LoginContextProvider>
)
