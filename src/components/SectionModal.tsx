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
  Text,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'

//@ts-expect-error properties are typed via chakra
function SectionModal({ isOpen, onClose, sectionName, content }) {

  //@ts-expect-error asdfasdf
  const [ title, setTitle ] = useState('')

  useEffect(() => {
    setTitle(sectionName)
  }, [sectionName])

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{ title }</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              here here
            </Text>
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
