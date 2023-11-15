// import { useState } from 'react'
import './App.css'
import { ChakraBaseProvider, extendBaseTheme } from '@chakra-ui/react'
import { theme as chakraTheme } from "@chakra-ui/theme"
import Details from './Details'

const {
  Card,
  Heading,
  Button,
} = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
    Card,
    Heading,
  },
})

function App() {

  return (
    <ChakraBaseProvider theme={theme}>
      <Details />
    </ChakraBaseProvider>
  )
}

export default App
