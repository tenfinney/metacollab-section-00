import React from "react";
import {
  Box,
  Image,
  Link,
  Editable,
  EditableInput,
  EditablePreview,
  HStack,
  Text,
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
import background from "./images/mg-bckg-06-b2-1280w.png";
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


import { ExternalLinkIcon } from "@chakra-ui/icons";
function Links1() {
  return (
    <div style={{ backgroundImage: `url(${background})` }}>

    <Box p={4} display={{ md: "flex" }}>
      <Box flexShrink={0}>
        <Image
          borderRadius="lg"
          width={{ md: 40 }}
          src=" https:bafybeialwa63jqrxffkz2lha3bflwdumqoctqdimezknsfrm5jdgyeqjm4.ipfs.infura-ipfs.io "
          alt=" MetaGame "
        />
      </Box>
      <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
        <Text
          fontWeight="bold"
          textTransform="uppercase"
          fontSize="sm"
          letterSpacing="wide"
          color="yellow.600"
        >
          Meta-Collab How-To Guides
        </Text>
        <Editable defaultValue=" Enter your search string here:">
          <EditablePreview />
          <EditableInput />
        </Editable>
        <Link
          mt={1}
          display="block"
          fontSize="lg"
          lineHeight="normal"
          fontWeight="semibold"
          href=" # "
        >
          Meta-Collab is a Feature Rich Contracting tool with a Built-in Resolution Layer
        </Link>
        <br />
        <Box>
          <HStack>
            <Link href=" https://metagame.freeweb3.com " isExternal>
              MetaGame <ExternalLinkIcon mx="2px" />
            </Link>
            <Text>
              Did you know that{" "}
              <Link href={" # "} color="teal.500">
                MetaGame Inline Reminder
              </Link>
            </Text>
          </HStack>
          <br />
          <Link href=" https://metagame.freeweb3.com " isExternal>
            MetaGame <ExternalLinkIcon mx="2px" />
          </Link>
          <Text>
            Did you know that{" "}
            <Link href={" # "} color="teal.500">
              MetaGame Inline Reminder
            </Link>
          </Text>
          <Link href=" https://metagame.freeweb3.com " isExternal>
            MetaGame <ExternalLinkIcon mx="2px" />
          </Link>
          <br />
          <Text>
            Did you know that{" "}
            <Link href={" # "} color="teal.500">
              MetaGame Inline Reminder
            </Link>
          </Text>
        </Box>
        <br />
        <Text mt={2} color="gray.500">
          Getting a new game off the ground is hard work. Here are a few ways
          MetaGame participants are found.
        </Text>
      </Box>
    </Box>
    </ div>
  );
}
export default Links1;
