import { React } from "react";
import {
  Avatar,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
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



function Header1() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div style={{ backgroundImage: `url(${background})` }}>

    <Box>
      <Flex
        // bg={useColorModeValue("gray.900", "gray.800")}
        color={useColorModeValue("gray.900", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Avatar
                  ml={"2"}
                  size={"xl"}
                  src={
                    // " https://bafkreihpob65rfthwbxx3xvuk6rj4r564qqx6irpjcuktuojkny3nglsqu.ipfs.infura-ipfs.io/ "
                    // " https://bafybeih6j2bkbtr3p5ugxb6xvigqqziionmnh6sly2pwrqzbi6zgv3dwki.ipfs.infura-ipfs.io/ "
                    " https://bafybeidg2zafwojw52otuvrbyp4w34rv6gwbijl2fnjlzamu3edqg7thy4.ipfs.infura-ipfs.io/ "
                    // " https://bafybeiexrfhhdlx3ric5v7yjez6pfexp4vhpszoq4l5ywdsg4mav4ifjcq.ipfs.infura-ipfs.io/ "

                  }
                />
          <Text
            fontWeight="semibold"
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            fontSize="16pt"
            color="cyan"
          >
            MetaGame
          </Text>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav  />
          </Flex>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            display={{ base: "none", md: "inline-flex" }}
            size={"sm"}

            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"green.500"}
            href={" # "}
            _hover={{
              bg: "green.800",
            }}
          >
            Sign In
          </Button>
          <Button
            as={"a"}

            fontSize={"sm"}
            fontWeight={600}
            color={"silver"}
            variant={"link"}
            href={" # "}
          >
            Sign Up
          </Button>


            <Button
              variant={"solid"}
              colorScheme={"blue"}
              size={"sm"}
              mr={4}
              leftIcon={<AddIcon />}
            >
              MetaGame Action
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"lg"}
                  src={
                    // " https://bafkreihpob65rfthwbxx3xvuk6rj4r564qqx6irpjcuktuojkny3nglsqu.ipfs.infura-ipfs.io/ "
                    // " https://bafybeih6j2bkbtr3p5ugxb6xvigqqziionmnh6sly2pwrqzbi6zgv3dwki.ipfs.infura-ipfs.io/ "
                    // " https://bafybeidg2zafwojw52otuvrbyp4w34rv6gwbijl2fnjlzamu3edqg7thy4.ipfs.infura-ipfs.io/ "
                    " https://bafybeiexrfhhdlx3ric5v7yjez6pfexp4vhpszoq4l5ywdsg4mav4ifjcq.ipfs.infura-ipfs.io/ "
                  }
                />
              </MenuButton>
              <MenuList color="blue">
                <MenuItem> Link 1 </MenuItem>
                <MenuItem> Link 2 </MenuItem>
                <MenuDivider />
                <MenuItem> Link 3 </MenuItem>
              </MenuList>
            </Menu>

            <Icon as={ HamburgerIcon } w={8} h={8} color="blue.500" />  







        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
    </ div>    

  );
}
const DesktopNav = () => {
  // const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("blue.200", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? " # "}
                fontSize={"sm"}
                fontWeight={700}
                color={"white"}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={" group "}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon as={ChevronRightIcon} w={5} h={5} color="pink.400" />
        </Flex>
      </Stack>
    </Link>
  );
};
const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? " # "}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>

  );
};
interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}
const NAV_ITEMS: Array <NavItem> = [
  {
    label: "    Inspiration ",
    children: [
      {
        label: "    Explore MetaGame Developer Tools ",
        subLabel: "Choose your own Web3 adventure",
        href: " # ",
      },
      {
        label: "    MetaGame News ",
        subLabel: "Up-and-coming Developers choose Web3",
        href: " # ",
      },
    ],
  },
  {
    label: "    Gigs ",
    children: [
      {
        label: "    MetaGame JobBoard ",
        subLabel: "Find your Web3 path",
        href: " # ",
      },
      {
        label: "    MetaGame Developer Gigs ",
        subLabel: "Exclusive Web3 Resources",
        href: " # ",
      },
    ],
  },
  {
    label: "    Learn ",
    href: " # ",
  },
  {
    label: "    Earn ",
    href: " # ",
  },
];
export default Header1;
