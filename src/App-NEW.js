import { useQuery } from "@apollo/react-hooks";

// UNCOMMENT FOR DEMO vvv
// import { Contract } from "@ethersproject/contracts";
// import { getDefaultProvider } from "@ethersproject/providers";
// import { addresses, abis } from "@project/contracts";

import React, { useEffect, useState } from "react";
// import React, { useState } from "react";
// import { Body, Button, Header, Image, Link } from "./components";
// import logo from "./metagame-diamond-logo.png";
import useWeb3Modal from "./hooks/useWeb3Modal";
import GET_TRANSFERS from "./graphql/subgraph";

// import DarkModeToggle from "react-dark-mode-toggle";
import "./App.css";
import { actions, StateProvider, loadingState } from "./state";
import {
  Button,
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

import Web3ContextProvider from "./libs/Web3Context";

import AuthenticationForm1 from "./components/authenticationForm1";
import Footer6 from "./components/footer6";
import Footer9 from "./components/footer9";
import Header1 from "./components/header1";
import Links1 from "./components/links1";
import MenuLayout2 from "./components/menuLayout2";

const initialState = {
  user: null,
  db: null,
  entries: [],
  dbGuide: null,
  entriesGuide: [],
  dbDAGtest: null,
  entriesDAGtest: [],
  dbUsers: null,
  entriesUsers: [],
  programs: [],
  orbitdbStatus: "Starting",
  ipfsStatus: "Starting",
  program: false,
  loading: {
    programs: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.USER.SET_USER:
      return {
        ...state,
        user: action.publicKey,
      };
    case actions.SYSTEMS.SET_ORBITDB:
      return {
        ...state,
        orbitdbStatus: action.orbitdbStatus,
      };
    case actions.SYSTEMS.SET_IPFS:
      return {
        ...state,
        ipfsStatus: action.ipfsStatus,
      };
    case actions.DB.SET_DB:
      return {
        ...state,
        db: action.db,
        entries: action.entries,
      };
    case actions.DBGUIDE.SET_DBGUIDE:
      return {
        ...state,
        dbGuide: action.db,
        entriesGuide: action.entries,
      };
    case actions.DBDAGTEST.SET_DBDAGTEST:
      return {
        ...state,
        dbDAGtest: action.db,
        entriesDAGtest: action.entries,
      };
    case actions.DBUSERS.SET_DBUSERS:
      return {
        ...state,
        dbUsers: action.db,
        entriesUsers: action.entries,
      };
    case actions.PROGRAMS.SET_PROGRAM:
      return {
        ...state,
        program: action.program,
      };
    case actions.PROGRAMS.SET_PROGRAM_LOADING:
      return {
        ...state,
        program: loadingState,
      };
    case actions.PROGRAMS.SET_PROGRAMS:
      return {
        ...state,
        programs: action.programs,
      };
    case actions.PROGRAMS.SET_PROGRAMS_LOADING:
      return {
        ...state,
        loading: { ...state.loading, programs: action.loading },
      };
    default:
      return state;
  }
};

// UNCOMMENT FOR DEMO vvv
// async function readOnChainData() {
//   // Should replace with the end-user wallet, e.g. Metamask
//   const defaultProvider = getDefaultProvider();
//   // Create an instance of an ethers.js Contract
//   // Read more about ethers.js on https://docs.ethers.io/v5/api/contract/contract/
//   const ceaErc20 = new Contract(
//     addresses.ceaErc20,
//     abis.erc20,
//     defaultProvider
//   );
//   // A pre-defined address that owns some CEAERC20 tokens
//   const tokenBalance = await ceaErc20.balanceOf(
//     "0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C"
//   );
//   console.log({ tokenBalance: tokenBalance.toString() });
// }
//  UNCOMMENT FOR DEMO ^^^

function WalletButton({ provider, loadWeb3Modal, logoutOfWeb3Modal }) {
  const [account, setAccount] = useState("");
  const [rendered, setRendered] = useState("");

  useEffect(() => {
    async function fetchAccount() {
      try {
        if (!provider) {
          return;
        }

        // Load the user's accounts.
        const accounts = await provider.listAccounts();
        setAccount(accounts[0]);

        // Resolve the ENS name for the first account.
        const name = await provider.lookupAddress(accounts[0]);

        // Render either the ENS name or the shortened account address.
        if (name) {
          setRendered(name);
        } else {
          setRendered(account.substring(0, 6) + "..." + account.substring(36));
        }
      } catch (err) {
        setAccount("");
        setRendered("");
        console.error(err);
      }
    }
    fetchAccount();
  }, [account, provider, setAccount, setRendered]);

  return (
    <Button
      bg={"green.500"}
      display={{ base: "none", md: "inline-flex" }}
      size={"sm"}
      fontSize={"sm"}
      fontWeight={600}
      color={"white"}
      ml={"4"}
      mr={"2"}
      onClick={() => {
        if (!provider) {
          loadWeb3Modal();
        } else {
          logoutOfWeb3Modal();
        }
      }}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </Button>
  );
}

function App() {
  const { loading, error, data } = useQuery(GET_TRANSFERS);
  const [provider, loadWeb3Modal, logoutOfWeb3Modal] = useWeb3Modal();

  React.useEffect(() => {
    if (!loading && !error && data && data.transfers) {
      console.log({ transfers: data.transfers });
    }
  }, [loading, error, data]);

  return (
    <div>
      <StateProvider initialState={initialState} reducer={reducer}>
        <ChakraProvider>
          <Web3ContextProvider>
            <Box backgroundColor="#303030" color="white">
              <MenuLayout2 w="100%" />
              <Header1 w="100%" />

              <Box mb="2" mt="2">
                <WalletButton
                  provider={provider}
                  loadWeb3Modal={loadWeb3Modal}
                  logoutOfWeb3Modal={logoutOfWeb3Modal}
                />

                {/* UNCOMMENT FOR DEMO vvv */}
                {/* <Button
                  onClick={() => readOnChainData()}
                  display={{ base: "none", md: "inline-flex" }}
                  size={"sm"}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"green.500"}
                  _hover={{
                    bg: "green.800",
                  }}
                >
                  Read On-Chain Balance
                </Button> */}
                {/* UNCOMMENT FOR DEMO ^^^ */}
              </Box>

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
                    <Text fontSize="1.5rem" color="cyan">headers</Text>.metacollab.freeweb3.com
                  </Text>
                  <Link ml="80px" fontSize="1rem" fontWeight="bold" 
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
                    <Text fontSize="1.5rem" color="cyan">footers</Text>.metacollab.freeweb3.com
                  </Text>
                  <Link ml="80px" fontSize="1rem" fontWeight="bold" 
                    href="https://footers.metacollab.freeweb3.com"
                    style={{ marginTop: "2px" }}
                  >
                    Go to Footers
                  </Link>
                  <Links1 w="100%" />
                  <Footer6 w="100%" />
                  <AuthenticationForm1 w="100%" />
                  <Footer9 w="100%" />

                  {/* <Switch>
                    <Route
                    exact
                    path="/sharedDatabases"
                    component={DatabaseForm}
                    />
                    <Route
                    exact
                    path="/localDatabases"
                    component={DatabaseLocal}
                    />
                    <Route path="/" component={Filters} />
                    <Redirect to="/" />
                  </Switch> */}

                  {/* <br />
                  <Toast w="100%" />
                  <br /> */}

                  <hr />
                </VStack>
              </Router>

              {/* <Box>
              <DarkModeToggle
                align="center"
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
              />
            </Box> */}
            </Box>
          </Web3ContextProvider>
        </ChakraProvider>
      </StateProvider>
    </div>
  );
}

export default App;
