// import { useState } from 'react'
import { 
  Modal, 
  ModalOverlay, 
  ModalContent, 
  ModalHeader, 
  ModalCloseButton, 
  ModalBody,
  ModalFooter,
  Button,
  UnorderedList,
  ListItem,
  Heading,
} from '@chakra-ui/react'
import { DataType } from '../data'

//@ts-expect-error properties are typed via chakra
function SectionModal({ isOpen, onClose, sectionName, selectedContent }) {

  //@ts-expect-error will be addressed
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW='50%'>
          <ModalHeader>{ sectionName }</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <UnorderedList styleType="none">
              {selectedContent.map((sectionInfo: DataType, index: number) => (
                <ListItem key={index}>
                  <Heading as='h1' size='lg'>{sectionInfo.header}</Heading>
                  <Heading as='h2' size='sm'>{sectionInfo.subheader}</Heading>
                  <Heading as='h3' size='sm'>{sectionInfo.date}</Heading>
                  <UnorderedList>
                    {sectionInfo.content.map((contentPoints, index) => (
                      <ListItem key={index}>{contentPoints}</ListItem>
                    ))}
                  </UnorderedList>
                </ListItem>
              ))}
            </UnorderedList>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={() => onClose()}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default SectionModal
