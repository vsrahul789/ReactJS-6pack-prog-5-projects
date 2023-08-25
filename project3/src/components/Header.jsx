import React from 'react';
import { Button, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack
      h={16}
      bgColor={'blackAlpha.900'}
      justifyContent={'flex-end'}
      pr={'24'}
      gap={8}
      zIndex={-1}
    >
      <Button variant={'unstyled'}>
        <Link to={'/'}>Home</Link>
      </Button>
      <Button variant={'unstyled'}>
        <Link to={'/coins'}>Coins</Link>
      </Button>
      <Button variant={'unstyled'}>
        <Link to={'/exchanges'}>Exchange</Link>
      </Button>
    </HStack>
  );
};

export default Header;
