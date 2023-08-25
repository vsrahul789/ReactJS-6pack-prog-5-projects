import { Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const CoinCard = ({ id, name, img, symbol, currencySymbol = '₹', price }) => (
  <Link to={`/coin/${id}`}>
    <VStack
      w={'52'}
      shadow={'lg'}
      p={'8'}
      borderRadius={'lg'}
      m={'4'}
      transition={'all 0.5s'}
      css={{
        '&:hover': { transform: 'scale(1.1)' },
      }}
    >
      <Image
        src={img}
        w={'10'}
        h={'10'}
        objectFit={'contain'}
        alt={'Exchange'}
      />

      <Heading noOfLines={1} size={'md'}>
        {symbol}
      </Heading>
      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : 'NA'}</Text>
    </VStack>
  </Link>
);

export default CoinCard;
