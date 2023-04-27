
import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

import Property from '../components/Property'

import { baseUrl, fetchApi } from '@/utils/fetchApi'

const Banner = ({ purpose, title1, title2, desc1, desc2, linkname, ButtonText, imageUrl }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    {/* {purpose} */}
    <Image src={imageUrl} width={500} height={300} alt="Banner"/>
    <Box p={5}>
      <Text color='gray.500' fontSize="sm" fontWeight="medium">{purpose}</Text>   
      <Text fontSize="3xl" fontWeight="bold">{title1} <br /> {title2}</Text>   
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1} <br /> {desc2}</Text>   
      <Button fontSize="xl" bg="blue.300" color="white">
        <Link href={linkname}>{ButtonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({ propertyForSale, propertyForRent }) {
  return (
    <Box>
      <Banner 
        purpose= 'RENT A HOME' 
        title1= 'Rental Home`s for' 
        title2= 'Everyone' 
        desc1= 'Explore Apartements, Villas, Homes' 
        desc2= 'and more...' 
        linkname= '/search?purpose=for-rent' 
        ButtonText= 'Explore Renting' 
        imageUrl= 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit1440960gsm/tix-hotel/images-web/2020/10/29/94097e8b-6ba4-4936-afc4-80d5bfe3816e-1603906110725-9f5ccd9e96546353df6f3315a86335a1.jpg'
      />

      <Flex flexWrap='wrap'>
        {propertyForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      
      <Banner 
        purpose= 'BUY A HOME' 
        title1= 'Find, Buy & Own Your' 
        title2= 'Dream Home' 
        desc1= 'Explore Apartements, Villas, Homes' 
        desc2= 'and more...' 
        linkname= '/search?purpose=for-sale' 
        ButtonText= 'Explore Buying' 
        imageUrl= 'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit1440960gsm/tix-hotel/images-web/2020/10/29/b7ae9e14-5f00-4626-9034-4cf892ebedb5-1603906079417-96f75b0024564bfda70427032dd1c416.jpg'
      />

      <Flex flexWrap='wrap'>
        {propertyForSale.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  )
}


export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
      propertyForRent: propertyForRent?.hits,
    }
  }
  
}