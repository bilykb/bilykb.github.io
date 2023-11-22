// import { useState } from 'react'
import './App.css'
import Details from './components/Details'
import Title from './components/Title'
import { Flex } from '@chakra-ui/react'

function App() {

  return (
    <Flex align={'center'} direction={'column'}>
      <Title />
      <Details />
    </Flex>
  )
}

export default App
