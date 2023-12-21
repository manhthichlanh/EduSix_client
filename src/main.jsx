import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SocketProvider } from './services/SocketService.jsx'
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
window.fbAsyncInit = function() {
  window.FB.init({
    appId: 'mã',
    autoLogAppEvents: true,
    xfbml: true,
    version: 'v11.0'
  });
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SocketProvider>
        <App />
      </SocketProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
