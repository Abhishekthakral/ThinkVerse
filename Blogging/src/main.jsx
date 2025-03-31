import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Blogcontext from './Context/Blogcontext.jsx'
import BlogcontextProvider from './Context/Blogcontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
   <BlogcontextProvider>
   <App />
   </BlogcontextProvider>
  </BrowserRouter>
)
