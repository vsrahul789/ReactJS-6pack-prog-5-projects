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

const Login = () => {
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

          <Button variant={'ghost'} alignSelf={'flex-end'}>
            <Link to="/forgetpassword">Forget Password</Link>
          </Button>

          <Button colorScheme="purple" type="submit">
            Sign In
          </Button>

          <Text textAlign={'right'}>
            New User?
            <Button variant={'ghost'} colorScheme="purple">
              <Link href={'/signup'}>Sign Up</Link>
            </Button>
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
