import React, { useState } from 'react';
import {
  Img,
  Box,
  CloseButton,
  Flex,
  Icon,
  Divider,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
} from '@chakra-ui/react';
import {
  FiMenu,
} from 'react-icons/fi';

const LinkItems = [
  { name: 'Informații generale' },
  { name: 'Analize'},
  { name: 'Boli cronice' },
  { name: 'Operații' },
  { name: 'Prescripții'},
  { name: 'Diagnoze'},
  { name: 'Vaccini'},
  { name: 'Istoria totală'},
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);


  return (
    <Box minH="100vh" bg={useColorModeValue('1FAC94', 'gray.900')}>
      <SidebarContent onClose={onClose} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <Box ml={60} p="4">
        {/* Content */}
      </Box>
    </Box>
  );
};

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      bgGradient='linear-gradient(to-t, #05C676, #4CBCAC)'
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color="white">
            NUME, PRENUME
          </Text>
      
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      <Divider orientation="horizontal" bg="white" mt="2" h="1px" /> {/* Horizontal line */}
      {LinkItems.map((link) => (
        <NavItem key={link.name}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};



const NavItem = ({ children, ...rest }) => {
  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.white',
          color: 'white',
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Box>
  );
};

export default Sidebar;

