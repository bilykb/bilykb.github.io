import { useState } from 'react'
import { SimpleGrid, 
  Card, 
  CardHeader, 
  Heading, 
  CardFooter, 
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { sectionData } from '../data'
import SectionModal from './SectionModal'


function Details() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ selectedSection, setSelectedSection ]= useState('')

  const openModal = (sectionName: string) => {
    setSelectedSection(sectionName)
    onOpen()
  }

  const closeModal = () => {
    setSelectedSection('')
    onClose()
  }

  return (
    <>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {Object.entries(sectionData).map(([sectionName, sectionContent]) => {
          return (
            <Card>
              <CardHeader>
                <Heading size='md'>{sectionName.toUpperCase()}</Heading>
              </CardHeader>
              <CardFooter>
                <Button onClick={ () => openModal(sectionName) }>Expand</Button>
                <SectionModal 
                  isOpen={isOpen && selectedSection === sectionName} 
                  onClose={closeModal} 
                  sectionName={sectionName} 
                  content={sectionContent}
                />
              </CardFooter>
            </Card>
          )
        })}
      </SimpleGrid>
    </>
  )
}

export default Details
