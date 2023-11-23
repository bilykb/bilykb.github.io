// import { useState } from 'react'
import {
  SimpleGrid,
  Tag,
  Avatar,
  TagLabel,
  Heading
} from '@chakra-ui/react'
import { techSkills } from '../data'


function Skills() {

  return (
    <>
      <Heading mt={'3%'} mb={'1%'}>Skills</Heading>
      <SimpleGrid columns={6}>
        {techSkills.map((skill, index)=> (
          <Tag size='lg' colorScheme='white' borderRadius='full' key={index}>
            <Avatar
              src={skill.source}
              size='sm'
              name={skill.name}
              ml={-1}
              mr={2}
              mt={1}
              borderRadius='none'
            />
            <TagLabel>{skill.name}</TagLabel>
          </Tag>
        ))}
      </SimpleGrid>
    </>
  )
}

export default Skills
