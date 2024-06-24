import Head from 'next/head'
import Image from 'next/legacy/image';
import logoImg from 'public/images/logo.svg'
import img from '../../public/barber.png'
import { Flex, Text, Center, Button} from '@chakra-ui/react'
import Link from 'next/link'

export default function Home(){
  return(
    <>
      <Head>
        <title>BarberPRO - Seu sistema completo</title>
      </Head>

      <Flex height="100vh" alignItems="center" justifyContent="center" textColor="#FFFFFF" position='relative' overflow='hidden'  >
        <Center width='100%' height='100%' position='absolute' top='0' left='0' zIndex='-1'>
          <Image
            src={img}
            alt='Background'
            objectFit='cover'
          />
        </Center>

        <Flex direction="column" justifyContent='center' alignItems='center' >
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

          <Link href='/login'>
            <Button
              background="button.cta"
              mb={30}
              color="gray.900"
              size="lg"
              _hover={{ bg: "#ffb13e" }}
            >
              Acessar
            </Button>
          </Link>
        </Flex> 
      </Flex>
    </>
  )
}