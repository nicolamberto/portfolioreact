import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#404258',
      light: '#000000',
    },
    secondary: {
      main: '#E5E5CB',
    },
  },
})

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline/>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)