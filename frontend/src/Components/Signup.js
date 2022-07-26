import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmpassword,setConfirmpassword] = useState();
    const [pic,setPic] = useState();
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    }

    const postDetails = (pics) => {

    }

    const submitHandler = () => {
        
    }

  return (
    <VStack spacing={'5px'} color='black'>
        <FormControl id='first-name' isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
                placeholder='Enter your name'
                onChange={(e) => setName(e.target.value)}
            />
        </FormControl>

        <FormControl id='email' isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
                placeholder='Enter your Email'
                onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>

        <FormControl id='password' isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup color={'black'}>
            <Input 
                color={'black'}
                type={show ? 'text' : 'password'}
                placeholder='Create your Password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement w={'4.5rem'}>
                <Button h={'1.75rem'} size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id='cpassword' isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup color={'black'}>
            <Input 
                color={'black'}
                type={show ? 'text' : 'password'}
                placeholder='Confirm password'
                onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement w={'4.5rem'}>
                <Button h={'1.75rem'} size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>

        <FormControl id='pic' isRequired>
            <FormLabel>Upload your picture</FormLabel>
            <Input 
                type='file'
                p={'1.5'}
                accept='image/*'
                onChange={(e) => postDetails(e.target.files[0])}
            />
        </FormControl>

        <Button 
            colorScheme={'blue'}
            w='100%'
            style={{marginTop: 15}}
            onClick={submitHandler}
        >
            Sign up
        </Button>
    </VStack>
  )
}

export default Signup