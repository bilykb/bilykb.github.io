// import { useState } from 'react'
import {
  Image,
  Box
} from '@chakra-ui/react'

function Portrait() {

  return (
    <Box boxSize='sm'>
      <Image 
        src='../../images/portrait.jpeg'
        boxSize='85%'
        borderRadius='full'
      />
    </Box>
  )
}

export default Portrait
