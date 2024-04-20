import Head from 'next/head'
import { Flex, Text} from '@chakra-ui/react'
import Link from 'next/link'

export default function Home(){
  return(
    <>
      <Head>
        <title>BarberPRO - Seu sistema completo</title>
      </Head>
      <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center" textColor="#FFFFFF">
        <Text fontSize={30}>Página inicial do barber</Text>
          <Link href="/register">
            <Text cursor="pointer">Quer cadastrar sua barbearia? <strong>Clique aqui</strong></Text>
          </Link>
      </Flex>
    </>
  )
}