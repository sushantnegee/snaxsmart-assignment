import { Box, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import React from 'react'
import Login from '../Components/Authentication/Login'

const HomePage = () => {
  return (
    <Container border={'1px solid red'} maxW={'xl'} centerContent>
        <Box
        padding={3}
        width={'100%'}
        m={"50px 0px 80px 0px"}
        p={4}
        borderRadius={'lg'}
        borderWidth={'1px'}
        >
        <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab w={'50%'}>Login</Tab>
    <Tab w={'50%'}>Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      {/* <p>two!</p> */}
    </TabPanel>
  </TabPanels>
</Tabs>
</Box>
    </Container>
  )
}

export default HomePage