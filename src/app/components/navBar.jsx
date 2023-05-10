import React from 'react'
import {Tab, TabIndicator, TabList, Tabs} from '@chakra-ui/react'

const NavBar = () => {
  return (
    <Tabs position="relative" variant="unstyled">
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bg="blue.500"
        borderRadius="1px"
      />
    </Tabs>
  )
}

export default NavBar