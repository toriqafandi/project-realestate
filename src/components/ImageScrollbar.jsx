import { useContext } from "react"
import Image from "next/image"
import { Box, Flex, Icon } from "@chakra-ui/react"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa"
import 'react-horizontal-scrolling-menu/dist/styles.css';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext)

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon 
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor='pointer'
      />
    </Flex>
  )
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext)

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon 
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor='pointer'
      />
    </Flex>
  )
}

const ImageScrollbar = ({ data }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{overflow: 'hidden'}}>
    { data.map((image) => {
      return (
      <Box key={image.id} width='910px' itemID={image.id} overflow='hidden' p='1'>
        <Image
          key={image.id}
          alt="property" 
          placeholder="blur" 
          blurDataURL={image.url}
          src={image.url} 
          height={500} 
          width={1000} 
          sizes="(max-width:500px) 10vw, (max-width: 1023px) 50vw, 33vw"
        />
      </Box>

    )})}
  </ScrollMenu>
)


export default ImageScrollbar