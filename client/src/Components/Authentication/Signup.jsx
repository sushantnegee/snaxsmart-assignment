import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, Toast, VStack, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiHide, BiShow } from 'react-icons/bi'
import axios from 'axios'
import { API_LINK } from '../../Config/Api';


const Signup = () => {
    const [loading,setLoading] = useState(false);
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();
    const [show,setShow] = useState();
    const toast = useToast();


    const submitHandler = async ()=>{
        if(!email || !name ||!password || !confirmPassword){
            toast({
                title: 'Please Fill all Fields',
                status: 'warning',
                duration: 4000,
                isClosable: true,
                position:"bottom"
            })
            return;
        }

        if(password !== confirmPassword){
            toast({
                title: 'Password is not Matching',
                status: 'warning',
                duration: 4000,
                isClosable: true,
                position:"bottom"
              })
              setLoading(false);
              return;
        }

        try {
            const config = {
                headers:{
                    'Content-type':"application/json"
                }
            };
            const {data} = await axios.post(`${API_LINK}/admin/register`,{name,email,password},config);
            toast({
                title: 'Registration Successfull',
                status: 'success',
                duration: 4000,
                isClosable: true,
                position:"bottom"
              })
        } catch (error) {
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
<FormLabel>Name</FormLabel>
<Input type='text' onChange={(e)=>setName(e.target.value)} />
</FormControl>
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
<FormLabel>Confirm Password</FormLabel>
<InputGroup>
<Input type={show?"text":"password"} onChange={(e)=>setConfirmPassword (e.target.value)} />
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

export default Signup