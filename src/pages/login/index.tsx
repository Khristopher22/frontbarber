import { useState, useContext } from 'react'
import Head from 'next/head'
import Image from 'next/legacy/image';
import logoImg from '../../../public/images/logo.svg'
import { Flex, Text, Center, Input, Button } from '@chakra-ui/react'

import Link from 'next/link'

import { AuthContext } from '../../context/AuthContext';

import { canSSRGuest } from '../../utils/canSSRGuest'

export default function Login(){
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function handleLogin(){

    if(email === '' || password === ''){
      return;
    }

    await signIn({
      email,
      password,
    })
  }


  return(
    <>
      <Head>
        <title>BarberPRO - Faça login para acessar</title>
      </Head>
      <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center" textColor="#FFFFFF">
        
        <Flex width={640} direction="column" p={14} rounded={8}>
          <Center p={4}>
            <Image
              src={logoImg}
              quality={100}
              width={240}
              objectFit="fill"
              alt="Logo barberpro"
              priority={true}
            />
          </Center>

          <Input
            background="barber.400"
            variant="filled"
            size="lg"
            placeholder="email@email.com"
            type="email"
            mb={3}
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            _hover={{
              bg: 'white',
              color: 'white',
              textColor: '#000'
            }}
          />

          <Input
            background="barber.400"
            variant="filled"
            size="lg"
            placeholder="********"
            type="text"
            mb={6}
            value={password}
            onChange={ (e) => setPassword(e.target.value) }
            _hover={{
              bg: 'white',
              color: 'white',
              textColor: '#000'
            }}
          />

          <Button
            background="button.cta"
            mb={6}
            color="gray.900"
            size="lg"
            _hover={{ bg: "#ffb13e" }}
            onClick={handleLogin}
          >
            Acessar
          </Button>


          <Center mt={2}>
            <Link href="/register">
              <Text cursor="pointer">Quer cadastrar sua barbearia? <strong>Clique aqui</strong></Text>
            </Link>
          </Center>


        </Flex>

      </Flex>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return {
    props: {}
  }
})