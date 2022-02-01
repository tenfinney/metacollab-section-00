import React from "react";

import "./App.css";
import {
  ChakraProvider,
  Box,
  Link,
  VStack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import {
  // Redirect,
  // Route,
  // Switch,
  BrowserRouter as Router,
} from "react-router-dom";


import AuthenticationForm1 from "./components/authenticationForm1";
import Footer6 from "./components/footer6";
import Footer9 from "./components/footer9";
import Header1 from "./components/header1";
import Links1 from "./components/links1";
import MenuLayout2 from "./components/menuLayout2";



function App() {


  return (
    <div>
        <ChakraProvider>
            <Box backgroundColor="#303030" color="white">
              <MenuLayout2 w="100%" />

              <Header1 w="100%" />

              <Router>
                <VStack
                  fontFamily="Exo-2, sans-serif"
                  divider={<StackDivider borderColor="gray.200" />}
                  spacing={4}
                  align="stretch"
                >
                  {/* HEADERS */}
                  <Text
                    mt="15px"
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="2rem"
                    fontFamily="Exo 2"
                    letterSpacing="wide"
                    color="yellow.100"
                    align="left"
                    ml="10px"
                  >
                    UX Part I: Headers
                  </Text>
                  <Text
                    mt="2px"
                    fontWeight="bold"
                    textTransform="lowercase"
                    fontSize="1rem"
                    fontFamily="Exo 2"
                    letterSpacing="tight"
                    color="purple.200"
                    align="left"
                    ml="50px"
                  >
                    <Text fontSize="1.5rem" color="cyan">
                      headers
                    </Text>
                    .metacollab.freeweb3.com
                  </Text>
                  <Link
                    ml="80px"
                    fontSize="1rem"
                    fontWeight="bold"
                    href="https://headers.metacollab.freeweb3.com"
                    style={{ marginTop: "2px" }}
                  >
                    Go to Headers
                  </Link>
                  {/* FOOTER SECTION */}
                  <hr />
                  <Text
                    mt="15px"
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="2rem"
                    letterSpacing="wide"
                    color="purple.200"
                    align="left"
                    ml="10px"
                  >
                    UX Part IX: Footer Sections
                  </Text>
                  <Text
                    mt="2px"
                    fontWeight="bold"
                    textTransform="lowercase"
                    fontSize="1rem"
                    fontFamily="Exo 2"
                    letterSpacing="tight"
                    color="purple.200"
                    align="left"
                    ml="50px"
                  >
                    <Text fontSize="1.5rem" color="cyan">
                      footers
                    </Text>
                    .metacollab.freeweb3.com
                  </Text>
                  <Link
                    ml="80px"
                    fontSize="1rem"
                    fontWeight="bold"
                    href="https://footers.metacollab.freeweb3.com"
                    style={{ marginTop: "2px" }}
                  >
                    Go to Footers
                  </Link>

                  <Links1 w="100%" />
                  <Footer6 w="100%" />
                  <AuthenticationForm1 w="100%" />
                  <Footer9 w="100%" />

                  <hr />
                </VStack>
              </Router>
            </Box>
        </ChakraProvider>
    </div>
  );
}

export default App;
