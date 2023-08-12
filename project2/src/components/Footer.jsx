import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineSend,
  AiFillYoutube,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillGoogleCircle,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'} color={'white'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscibe to get Updates
          </Heading>
          <HStack borderBottom={'2px solid white'} py={'2'}>
            <Input
              placeholder="Enter Email"
              border={'none'}
              borderRadius={'20px 0 0 20px'}
              outline={'none'}
            />
            <Button
              p={'0'}
              borderRadius={'0 20px 20px 0'}
              variant={'ghost'}
              colorScheme={'purple'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          width={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            VIDEO HUB
          </Heading>
          <p> All Rights Reserved</p>
        </VStack>

        <VStack width={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>

          <HStack>
            <Button variant={'link'} colorScheme="white" fontSize={'25'}>
              <a target={'blank'} href="https://google.com/ ">
                <AiFillGoogleCircle />
              </a>
            </Button>

            <Button variant={'link'} colorScheme="white" fontSize={'25'}>
              <a target={'blank'} href="https://youtube.com/ ">
                <AiFillYoutube />
              </a>
            </Button>

            <Button variant={'link'} colorScheme="white" fontSize={'25'}>
              <a target={'blank'} href="https://instagram.com/ ">
                <AiFillInstagram />
              </a>
            </Button>

            <Button variant={'link'} colorScheme="white" fontSize={'25'}>
              <a target={'blank'} href="https://twitter.com/ ">
                <AiFillTwitterCircle />
              </a>
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
