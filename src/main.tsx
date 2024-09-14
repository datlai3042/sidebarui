import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import SidebarProvider from './context/SidebarContext.tsx'
import './index.css'
import RouterWrapper from './router.tsx'

createRoot(document.getElementById('root')!).render(
      <StrictMode>
            <BrowserRouter>
                  <SidebarProvider>
                        <App>
                              <RouterWrapper />
                        </App>
                  </SidebarProvider>
            </BrowserRouter>
      </StrictMode>
)
