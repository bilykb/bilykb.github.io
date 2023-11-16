import { useState } from 'react'
import { SimpleGrid, 
  Card, 
  CardHeader, 
  Heading, 
  CardFooter, 
  Button,
  useDisclosure,
} from '@chakra-ui/react'
import { DataType, sectionData } from '../data'
import SectionModal from './SectionModal'


function Details() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [ selectedSection, setSelectedSection ] = useState('')
  const [ selectedContent, setSelectedContent ] = useState<DataType[]>([])
  
  const openModal = (sectionName: string) => {
    setSelectedSection(sectionName)
    setSelectedContent(sectionData[sectionName])
    onOpen()
  }

  const closeModal = () => {
    setSelectedSection('')
    onClose()
  }

  return (
    <>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {Object.keys(sectionData).map(sectionName => {
          return (
            <Card>
              <CardHeader>
                <Heading size='md'>{sectionName.toUpperCase()}</Heading>
              </CardHeader>
              <CardFooter>
                <Button onClick={ () => openModal(sectionName) }>Expand</Button>
              </CardFooter>
            </Card>
          )
        })}
      </SimpleGrid>
      {isOpen && selectedSection && (
        <SectionModal 
          isOpen={isOpen} 
          onClose={closeModal} 
          sectionName={selectedSection.toUpperCase()} 
          selectedContent={selectedContent}
        />

      )}
    </>
  )
}

export default Details
