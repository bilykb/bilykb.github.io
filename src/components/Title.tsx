// import { useState } from 'react'
import {
  Flex,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react'
import Portrait from './Portrait'

function Title() {

  return (
    <Flex maxW={'75%'} m={'10%'} justify={'center'}>
      <Portrait />
      <Box maxW={'25%'}>
        <Heading mb={4}>Brett Bilyk</Heading>
        <Text fontSize='xl'>
          Passionate and versatile Full Stack Developer, with a strong drive for continuous learning. Adept at problem-solving, taking initiative, and collaborating within a team environment. Equipped with a diverse skill set and the ability to adapt to any software stack. Experienced working in a full stack (frontend and backend) and software development cycle in the Agile framework. Committed to being an effective Developer who is engaging, resourceful, and not afraid to ask questions.
        </Text>
      </Box>

    </Flex>
  )
}

export default Title
