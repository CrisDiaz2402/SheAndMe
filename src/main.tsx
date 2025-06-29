import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import MainRouter from './MainRouter';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRouter />
  </StrictMode>
);

// Elimina todo el contenido de este archivo y deja solo:
export default MainRouter;
