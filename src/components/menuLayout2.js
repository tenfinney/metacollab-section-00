import React from "react";
import {
  Box,
  Center,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  HStack,
  Button,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { FaEthereum } from "react-icons/fa";
// import background from "./images/mg-bckg-01-1280w.png";
// import background from "./images/mg-bckg-01-400w.png";
// import background from "./images/mg-bckg-01-600w.png";
// import background from "./images/mg-bckg-01-800w.png";
// import background from "./images/mg-bckg-02-1280w.png";
// import background from "./images/mg-bckg-02-btp-1280w.png";
// import background from "./images/mg-bckg-02-btp-1280x720.png";
// import background from "./images/mg-bckg-02-btp-1280x800.png";
// import background from "./images/mg-bckg-02-ptb-1280w.png";
// import background from "./images/mg-bckg-02-ptb-1280x720.png";
// import background from "./images/mg-bckg-02-ptb-1280x800.png";
// import background from "./images/mg-bckg-02r-1280w.png";
// import background from "./images/mg-bckg-03-1280w.png";
// import background from "./images/mg-bckg-03-btp-1280w.png";
// import background from "./images/mg-bckg-03-btp-1280x720.png";
// import background from "./images/mg-bckg-03-ptb-1280w.png";
// import background from "./images/mg-bckg-03-ptb-1280x720.png";
// import background from "./images/mg-bckg-03r-1280w.png";
// import background from "./images/mg-bckg-04-1280w.png";
// import background from "./images/mg-bckg-04-btp-1280w.png";
// import background from "./images/mg-bckg-04-btp-1280x720.png";
// import background from "./images/mg-bckg-04-ptb-1280w.png";
// import background from "./images/mg-bckg-04-ptb-1280x720.png";
// import background from "./images/mg-bckg-04r-1280w.png";
// import background from "./images/mg-bckg-05-1280w.png";
// import background from "./images/mg-bckg-06-1280w.png";
// import background from "./images/mg-bckg-06-b1-1280w.png";
// import background from "./images/mg-bckg-06-b2-1280w.png";
// import background from "./images/mg-bckg-06c-1280w.png";
import background from "./images/mg-bckg-06c-btp-1280w.png";
// import background from "./images/mg-bckg-06c-btp-1280x720.png";
// import background from "./images/mg-bckg-06cr-1280w.png";
// import background from "./images/mg-bckg-07-1280w.png";
// import background from "./images/mg-bckg-08-1280w.png";
// import background from "./images/mg-bckg-09-1280w.png";
// import background from "./images/mg-bckg-09-600w.png";
// import background from "./images/mg-bckg-09a-1280w.png";
// import background from "./images/mg-bckg-09b-1280w.png";
// import background from "./images/mg-bckg-09c-1280w.png";
// import background from "./images/mg-flag-01-200w.png";
// import background from "./images/mg-flag-01.svg";
// import background from "./images/mg-gear-logo-200w.png";
// import background from "./images/mg-gear-logo.svg";
// import background from "./images/mg-hero-01-200w.png";
// import background from "./images/mg-hero-02-200w.png";
// import background from "./images/mg-hero-03-200w.png";
// import background from "./images/mg-hero-04-1000sq.png";
// import background from "./images/mg-hero-04-1200w.png";
// import background from "./images/mg-hero-04-800sq.png";
// import background from "./images/mg-hero-05-200w.png";
// import background from "./images/mg-hero-05-300w.png";
// import background from "./images/mg-hero-05-800w.png";
// import background from "./images/mg-hero-06-1200w.png";
// import background from "./images/mg-hero-07-1200w.png";
// import background from "./images/mg-hero-08-1200w.png";
// import background from "./images/mg-hero-09-1200w.png";
// import background from "./images/mg-hero-10-1200w.png";
// import background from "./images/mg-hero-10-200sq.png";
// import background from "./images/mg-hero-10-200w.png";
// import background from "./images/mg-icon-01-200w.png";
// import background from "./images/mg-icon-02-200w.png";
// import background from "./images/mg-icon-03-200w.png";
// import background from "./images/mg-icon-04-200w.png";
// import background from "./images/mg-icon-04a-200w.png";
// import background from "./images/mg-icon-05-200w.png";
// import background from "./images/mg-icon-06-200w.png";
// import background from "./images/mg-logo-01-200w.png";
// import background from "./images/mg-logo-02-200w.png";
// import background from "./images/mg-profile-2022-200w.png";
// import background from "./images/mg-profile-players-200w.png";
// import background from "./images/mg-bckg-12-1280w.png";
// import background from "./images/mg-bckg-12-1280x360.png";
// import background from "./images/mg-bckg-12-1280x1440.png";


function MenuLayout2() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>

    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        <Image
          borderRadius="lg"
          width={{ lg: 200, md: 40, sm: 100 }}
          src=" https://bafkreibazoeptlr4c5hrgdjzepthjm3iscwe56ojxcxrkorwufjqgfrpmu.ipfs.infura-ipfs.io
 "
          alt=" MetaGame "
        />
      </Box>









      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        
        <HStack ml="150px" align="flex"  >
          
          <Menu fontFamily="Exo 2, san-serif">
            <MenuButton as={Button} colorScheme="purple" variant="outline">
              Player Profiles
            </MenuButton>
            <MenuList color="blue">
              <MenuGroup title=" Profile">
                <MenuItem> My Account </MenuItem>
                <MenuItem> Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title=" Help">
                <MenuItem> Docs </MenuItem>
                <MenuItem> FAQ </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          <br />
          <Menu>
            <MenuButton as={Button} colorScheme="blue" variant="outline">
              Patron Profiles
            </MenuButton>
            <MenuList color="blue">
              <MenuGroup title=" Profile">
                <MenuItem> My Account </MenuItem>
                <MenuItem> Payments </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup title=" Help">
                <MenuItem> Docs </MenuItem>
                <MenuItem> FAQ </MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          <br />
          <Menu closeOnSelect={false}>
            <MenuButton as={Button} colorScheme="green" variant="outline">
              Web3Skills Meta-Collab
            </MenuButton>
            <MenuList minWidth="240px" color="blue">
              <MenuOptionGroup defaultValue="asc" title=" Order" type="radio">
                <MenuItemOption value="asc"> Ascending </MenuItemOption>
                <MenuItemOption value="desc"> Descending </MenuItemOption>
              </MenuOptionGroup>
              <MenuDivider />
              <MenuOptionGroup title=" Country" type="checkbox">
                <MenuItemOption value="email"> Email </MenuItemOption>
                <MenuItemOption value="phone"> Phone </MenuItemOption>
                <MenuItemOption value="country"> Country </MenuItemOption>
              </MenuOptionGroup>
            </MenuList>
          </Menu>
        </HStack>

        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <HStack>


        <Center  p={8}>
      <HStack ml="240px" align="flex">
        <Button
          w={"full"}
          maxW={"md"}
          variant={"outline"}
          leftIcon={<FcGoogle />}
        >
          <Center>
            <Text> Sign in with OAuth 2.0 </Text>
          </Center>
        </Button>
        <Button
          w={"full"}
          maxW={"md"}
          variant={"outline"}
          leftIcon={<FaEthereum />}
        >
          <Center>
            <Text> Sign in with 0x Account</Text>
          </Center>
        </Button>
      </HStack>
    </Center>




        </HStack>
      </Box>



      </Box>
    </Box>
    </ div>

  );
}
export default MenuLayout2;
