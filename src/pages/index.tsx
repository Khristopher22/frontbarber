import Head from 'next/head'
import { Flex, Text} from '@chakra-ui/react'

export default function Home(){
  return(
    <>
      <Head>
        <title>BarberPRO - Seu sistema completo</title>
      </Head>
      <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center" textColor="#FFFFFF">
        <Text fontSize={30}>Página da barbeiro</Text>
      </Flex>
    </>
  )
}