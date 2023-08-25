import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import bitcoin from '../assets/bitcoin.jpg';

const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'100vh'}>
      <Image
        w={'full'}
        h={'90vh'}
        objectFit={'contain'}
        src={bitcoin}
        filter={'grayscale(1)'}
      />
      <Text
        fontSize={'6xl'}
        textAlign={'center'}
        fontWeight={'thin'}
        color={'whiteAlpha.900'}
        // mt={'-20'}
      >
        xCrypto
      </Text>
    </Box>
  );
};

export default Home;
