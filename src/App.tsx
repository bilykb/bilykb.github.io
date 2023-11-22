// import { useState } from 'react'
import './App.css'
import Details from './components/Details'
import Title from './components/Title'
import { Flex, Center } from '@chakra-ui/react'

function App() {

  return (
    <Flex align={'center'} direction={'column'}>
      {/* <Center w={'100rem'} h={'100rem'}> */}
        <Title />
        <Details />
      {/* </Center> */}
    </Flex>
  )
}

export default App
