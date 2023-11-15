// import { useState } from 'react'
import { SimpleGrid, 
  Card, 
  CardHeader, 
  Heading, 
  CardFooter, 
  Button, 
} from '@chakra-ui/react'
import { sectionData } from '../data'


function Details() {

  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
      {Object.keys(sectionData).map(section => {
        return (
          <Card>
            <CardHeader>
              <Heading size='md'>{section.toUpperCase()}</Heading>
            </CardHeader>
            <CardFooter>
              <Button>Expand</Button>
            </CardFooter>
          </Card>
        )
      })}
    </SimpleGrid>
  )
}

export default Details
