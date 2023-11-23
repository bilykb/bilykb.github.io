import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { theme as chakraTheme } from "@chakra-ui/theme"
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'

const {
  Card,
  Heading,
  Button,
  Modal,
  Tag,
  Avatar
} = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
    Card,
    Heading,
    Modal,
    Tag,
    Avatar
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
