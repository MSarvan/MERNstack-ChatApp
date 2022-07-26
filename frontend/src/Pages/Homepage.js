import React from 'react'
import { Box, Container, Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

const Homepage = () => {
  return (
    <Container maxW='xl' centerContent>
      {/* <Box
        display='flex'
        justifyContent='center'
        p={3}
        bg={'white'}
        w='100%'
        m='40px 0 15px 0'
        borderRadius={'lg'}
        borderWidth='1px'
      >
        <Text fontSize='2xl' color='black'>Vibe n Chat</Text>
      </Box> */}
      <Box
        m='40px 0 15px 0'
        bg={'white'}
        w={'100%'}
        p={4}
        borderRadius={'lg'}
        borderWidth='1px'
      >
        <Tabs variant='soft-rounded'>
          <TabList mb={'1em'}>
            <Tab w={'50%'}>Login</Tab>
            <Tab w={'50%'}>Sign up</Tab>
          </TabList>
          <TabPanels>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Signup/>
          </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage