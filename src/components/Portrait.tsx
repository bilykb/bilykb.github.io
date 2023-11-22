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
        borderRadius='full'
      />
    </Box>
  )
}

export default Portrait
