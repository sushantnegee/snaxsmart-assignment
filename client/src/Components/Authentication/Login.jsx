import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import {BiHide,BiShow } from 'react-icons/bi'
import './Auth.css';

const Login = () => {
    const [loading,setLoading] = useState(false);
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [show,setShow] = useState();

    const submitHandler = ()=>{

    }
  return (
    <VStack>
        <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' onChange={(e)=>setEmail(e.target.value)} />
</FormControl>
<FormControl>
  <FormLabel>Password</FormLabel>
  <InputGroup>
  <Input type={show?"text":"password"} onChange={(e)=>setPassword (e.target.value)} />
  <InputRightElement>
  <Button size={'sm'} h={'70%'} onClick={()=>setShow(!show)}>
    {show?<BiHide/>:<BiShow/>}
  </Button>
  </InputRightElement>
  </InputGroup>
</FormControl>
<Button className='submitButton' style={{marginTop:"30px"}} isLoading={loading} onClick={submitHandler} colorScheme='green' w={'100% '} >Login</Button>

    </VStack>
  )
}

export default Login