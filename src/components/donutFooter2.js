import React from "react";            
import {            
 Wrap,           
 WrapItem,           
 Stack,           
 Avatar,           
 AvatarBadge,           
 AvatarGroup,           
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


      function DonutFooter2() {      
       return (     
        <div style={{ backgroundImage: `url(${background})` }}>

        <div>    
        <div    
id="graph"    
style={{    
     display: "flex",       
justifyContent: "center",    
     alignItems: "center",       
     margin: "5vh auto",       
}}
></div>    
        <Stack direction="row" spacing={2}>    
        <Wrap>    
        <WrapItem>    
        <Avatar    
name=" Fairies Guild "  
size="lg"    
src=" https://bafybeiaufezw7l76pp3md5dqxtjw2qfke5aplzpdl3lt6okrf4hx76ovkq.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Necromancers Guild "  
size="lg"    
src=" https://bafybeigpgmeklembgujmes2lf2nnduufayioze54rdvwlg426bykcwueri.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Headhunters Guild "  
size="lg"    
src=" https://bafybeido3h7xddhgu3hq44lablervuvuxwbhqnr6ceiheao4eqmz7ydlx4.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Shillers Guild "  
size="lg"    
src=" https://bafybeib5oyjftl4fe5jorwdlko4y4ivfgaf2elmvpsuo5ccpfleupsvj6y.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Writers Guild "  
size="lg"    
src=" https://bafybeid3a4xbk6p27nwsw3s7y55uipnon6j3evpceom522kxisw6r6xp4q.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Innkeepers Guild "  
size="lg"    
src=" https://bafybeidf2w7x5z5iseoo2xlhurbsg7qjprxnmoutqf5uo2xn3u2aj4ptym.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Designers Guild "  
size="lg"    
src=" https://bafybeibt2y52l7nnmtytvr7y7gw3dpmxetcfcydkl7l2cwkp5ks3ouakwe.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Builders Guild "  
size="lg"    
src=" https://bafybeictwlow7a6dk6g67ju3gfigxtripsv2lrksqxyy7ysso57hdwteim.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        <WrapItem>    
        <Avatar    
name=" Artists Guild "  
size="lg"    
src=" https://bafybeiao2iw2655ed7wpnaw62pqcfvwebgifujbnkxri6xgxzzgfn5gpm4.ipfs.infura-ipfs.io/ "  
/>
        </WrapItem>    
        </Wrap>    
        <Avatar>    
        <Avatar    
name=" Player One "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <AvatarBadge boxSize="1.25em" bg="green.500" />    
        </Avatar>    
{/* You can also change the borderColor and bg of the badge */}    
        <Avatar>    
        <Avatar    
name=" Player One "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <AvatarBadge borderColor="papayawhip" bg="tomato" boxSize="1.25em" />    
        </Avatar>    
        <AvatarGroup size="md" max={10}>    
        <Avatar    
name=" Player One "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Two "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Three "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Four "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Five "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Six "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Seven "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Eight "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Nine "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Five "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player One "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Two "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Three "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Four "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        <Avatar    
name=" Player Five "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
/>
        </AvatarGroup>    
        </Stack>    
        </div>    
        </ div>

);
}
export default DonutFooter2;              
