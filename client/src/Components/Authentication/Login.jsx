import { Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import './Auth.css';

const Login = () => {
    const [loading,setLoading] = useState(false);
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

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
  <Input type='Password' onChange={(e)=>setPassword (e.target.value)} />
</FormControl>
<Button className='submitButton' style={{marginTop:"30px"}} isLoading={loading} onClick={submitHandler} colorScheme='green' w={'100% '} >Login</Button>

    </VStack>
  )
}

export default Login