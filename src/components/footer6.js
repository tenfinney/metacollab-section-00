import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
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
import background from "./images/mg-bckg-03-btp-1280w.png";
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
// import background from "./images/mg-bckg-06c-btp-1280w.png";
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


import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
const Logo = (props: any) => {
  return (

    <Image
      alt={" MetaGame "}
      fit={"cover"}
      align={"center"}
      w={"80%"}
      h={"100px"}
      src={
        " https://bafkreibazoeptlr4c5hrgdjzepthjm3iscwe56ojxcxrkorwufjqgfrpmu.ipfs.infura-ipfs.io "
      }
    />
  );
};
const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode,
  label: string,
  href: string,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text color={"white"} fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
function Footer6() {
 
  return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <Box
      // bg={useColorModeValue("gray.800", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.200", "white")} />
            </Box>
            <Text  fontSize={"sm"}></Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={" # "}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={" # "}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={" # "}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader> W3LE </ListHeader>
            <Link color={"white"} href={" # "}> About us </Link>
            <Link color={"white"} href={" # "}> Blog </Link>
            <Link color={"white"} href={" # "}> Contact us </Link>
            <Link color={"white"} href={" # "}> Pricing </Link>
            <Link color={"white"} href={" # "}> Testimonials </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader> MetaGame Support </ListHeader>
            <Link color={"white"} href={" # "}> Help Center </Link>
            <Link color={"white"} href={" # "}> Terms of Service </Link>
            <Link color={"white"} href={" # "}> Legal </Link>
            <Link color={"white"} href={" # "}> Privacy Policy </Link>
            <Link color={"white"} href={" # "}> Status </Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader> MetaGame Calendar </ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={" Your email address "}
                bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("green.400", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "green.600",
                }}
                aria-label=" Join For Maximum Benefits "
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
    </ div>

);
}
export default Footer6;
