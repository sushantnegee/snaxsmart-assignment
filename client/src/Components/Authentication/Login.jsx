import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import {BiHide,BiShow } from 'react-icons/bi'
import axios from 'axios'
import './Auth.css';
import { API_LINK } from '../../Config/Api';

const Login = () => {
    const [loading,setLoading] = useState(false);
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [show,setShow] = useState();
    const toast = useToast()

    const submitHandler = async ()=>{
        setLoading(true)
        if(!email  ||!password){
            toast({
                title: 'Please Fill all Fields',
                status: 'warning',
                duration: 4000,
                isClosable: true,
                position:"bottom"
            })
            return;
        }
        try {
            const config = {
                headers:{
                    'Content-type':"application/json"
                }
            };
            const data = await axios.post(`${API_LINK}/admin/login`,{email,password},config);
            toast({
                title: 'Login Successfull',
                status: 'success',
                duration: 4000,
                isClosable: true,
                position:"bottom"
              })
              setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
            toast({
                title: 'Error Occured',
                description:error.response.data.message,
                status: 'success',
                duration: 4000,
                isClosable: true,
                position:"bottom"
              })    
        }
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