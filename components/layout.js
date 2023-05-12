
'use client'
import { Box, Grid, GridItem, Link, Avatar, Heading, AbsoluteCenter, Center, Button } from '@chakra-ui/react';
import NonSSRWrapper from './noSSR';

const name = 'Daya';
export const siteTitle = 'Daya and NextJS';

export default function Layout({ children, home }) {
  return (
    <NonSSRWrapper>
    <Grid templateColumns='repeat(5, 1fr)'>
      <GridItem colSpan={{base:'5', md:'5', lg:'1'}} p='20px' >
      <Box as='head' suppressHydrationWarning={true}>
        <Link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Box>
      <Box as="header" p='20px' >
        
        {home ? (
          <>
          <Center p='4' color='white' axis='both'>
            <Avatar
              src="/images/profile.jpg"
              size='2xl'
              name='Daya'
            />
          </Center>
          <Center p='4' color='pink.700' axis='both'>
            <Heading as='h1'>{name}</Heading>
          </Center>
          </>
        ) : (
          <>
          <Center p='4' axis='both'>
            <Link href="/">
              <Avatar
              src="/images/profile.jpg"
              size='2xl'
              name='Daya'
              />
            </Link>
          </Center>
          <Center p='4' axis='both'>
            <Link href="/" color='pink.700'>
              <Heading>
                {name}
              </Heading>
            </Link>
          </Center>
          </>
        )} 
      </Box>
      </GridItem>
      <GridItem colSpan={{base:'5', md:'5', lg:'3'}}>
      
      <Box as='main' bgGradient='radial-gradient(circle at 7.5% 24%, rgb(237, 161, 193) 0%, rgb(250, 178, 172) 25.5%, rgb(190, 228, 210) 62.3%, rgb(215, 248, 247) 93.8%);' p='10px'>
        <Box>{children}</Box>
      </Box>
      {!home && (
        <>
        <Box p='20px'>
          <Link href="/"><Button colorScheme='pink'>← Back to home </Button></Link>
        </Box>
        </>
      )}
        
      </GridItem>
      <GridItem colSpan={{base:'5', md:'5', lg:'1'}} p='20px'>
        <Box as='article'  p='20px'>
          <Center>
          <Link href='../feedback/fbform'><Button colorScheme='pink'>Feedback</Button></Link>
          </Center>
        </Box>
      </GridItem>
    </Grid>
    </NonSSRWrapper>

  );
}