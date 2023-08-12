import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        zIndex={'overlay'}
        colorScheme={'purple'}
        p={'0'}
        width={'10'}
        height={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Literal Shit</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/'}>Home</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button onClick={onClose} variant={'ghost'} colorScheme="purple">
                <Link to={'/upload'}>Upload Videos</Link>
              </Button>
            </VStack>
            <DrawerFooter>
              <HStack
                pos={'absolute'}
                bottom={'10'}
                left={'0'}
                w={'full'}
                justifyContent={'space-evenly'}
              >
                <Button
                  onClick={onClose}
                  variant={'solid'}
                  colorScheme="purple"
                >
                  <Link to={'/login'}>Log In</Link>
                </Button>

                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme="purple"
                >
                  <Link to={'/signup'}>Sign Up</Link>
                </Button>
              </HStack>
            </DrawerFooter>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
