import React from 'react';
import {
  Button,
  Container,
  Heading,
  Input,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
        >
          <Heading> Welcome Back</Heading>

          <Input
            placeholder={'Username'}
            type="name"
            focusBorderColor="purple.500"
            required
          />
          <Input
            placeholder={'Email'}
            type="email"
            focusBorderColor="purple.500"
            required
          />
          <Input
            placeholder={'Password'}
            type="password"
            focusBorderColor="purple.500"
            required
          />

          <Button colorScheme="purple" type="submit">
            Sign Up
          </Button>

          <Text textAlign={'right'}>
            Already Signed Up?
            <Button variant={'ghost'} alignSelf={'flex-end'}>
              <Link to={'/login'}>Login In</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
