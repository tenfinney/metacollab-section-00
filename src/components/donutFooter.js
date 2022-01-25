import React from "react";            
// import { Container } from "@chakra-ui/react"    
    import {            
     Wrap,           
     WrapItem,           
     Stack,           
     Center,           
     HStack,           
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
// import background from "./images/mg-bckg-06c-btp-1280w.png";
// import background from "./images/mg-bckg-06c-btp-1280x720.png";
// import background from "./images/mg-bckg-06cr-1280w.png";
// import background from "./images/mg-bckg-07-1280w.png";
import background from "./images/mg-bckg-08-1280w.png";
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

       
// import {useHistory} from 'react-router-dom';    
// import {useStateValue } from '../state';    
// import { AddIcon, MinusIcon, ArrowBackIcon, ArrowDownIcon, ArrowForwardIcon, ArrowLeftIcon, ArrowRightIcon, ArrowUpIcon, ArrowUpDownIcon, AtSignIcon, AttachmentIcon, BellIcon, CalendarIcon, ChatIcon, CheckIcon, CheckCircleIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, CloseIcon, CopyIcon, DeleteIcon, DownloadIcon, DragHandleIcon, EditIcon, EmailIcon, ExternalLinkIcon, HamburgerIcon, InfoIcon, InfoOutlineIcon, LinkIcon, LockIcon, MinusIcon, MoonIcon, NotAllowedIcon, PhoneIcon, PlusSquareIcon, QuestionIcon, QuestionOutlineIcon, RepeatIcon, RepeatClockIcon, SearchIcon, Search2Icon, SettingsIcon, SunIcon, TimeIcon, TriangleDownIcon, TriangleUpIcon, UnlockIcon, UpDownIcon, ViewIcon, ViewOffIcon, WarningIcon, WarningTwoIcon    
// import { WiAlien, WiBarometer, WiCelsius, WiCloudDown, WiCloudRefresh, WiCloudUp, WiCloud, WiCloudyGusts, WiCloudyWindy, WiCloudy, WiDayCloudyGusts, WiDayCloudyHigh, WiDayCloudyWindy, WiDayCloudy, WiDayFog, WiDayHail, WiDayHaze, WiDayLightWind, WiDayLightning, WiDayRainMix, WiDayRainWind, WiDayRain, WiDayShowers, WiDaySleetStorm, WiDaySleet, WiDaySnowThunderstorm, WiDaySnowWind, WiDaySnow, WiDaySprinkle, WiDayStormShowers, WiDaySunnyOvercast, WiDaySunny, WiDayThunderstorm, WiDayWindy, WiDegrees, WiDirectionDownLeft, WiDirectionDownRight, WiDirectionDown, WiDirectionLeft, WiDirectionRight, WiDirectionUpLeft, WiDirectionUpRight, WiDirectionUp, WiDust, WiEarthquake, WiFahrenheit, WiFire, WiFlood, WiFog, WiGaleWarning, WiHail, WiHorizonAlt, WiHorizon, WiHot, WiHumidity, WiHurricaneWarning, WiHurricane, WiLightning, WiLunarEclipse, WiMeteor, WiMoonAltFirstQuarter, WiMoonAltFull, WiMoonAltNew, WiMoonAltThirdQuarter, WiMoonAltWaningCrescent1, WiMoonAltWaningCrescent2, WiMoonAltWaningCrescent3, WiMoonAltWaningCrescent4, WiMoonAltWaningCrescent5, WiMoonAltWaningCrescent6, WiMoonAltWaningGibbous1, WiMoonAltWaningGibbous2, WiMoonAltWaningGibbous3, WiMoonAltWaningGibbous4, WiMoonAltWaningGibbous5, WiMoonAltWaningGibbous6, WiMoonAltWaxingCrescent1, WiMoonAltWaxingCrescent2, WiMoonAltWaxingCrescent3, WiMoonAltWaxingCrescent4, WiMoonAltWaxingCrescent5, WiMoonAltWaxingCrescent6, WiMoonAltWaxingGibbous1, WiMoonAltWaxingGibbous2, WiMoonAltWaxingGibbous3, WiMoonAltWaxingGibbous4, WiMoonAltWaxingGibbous5, WiMoonAltWaxingGibbous6, WiMoonFirstQuarter, WiMoonFull, WiMoonNew, WiMoonThirdQuarter, WiMoonWaningCrescent1, WiMoonWaningCrescent2, WiMoonWaningCrescent3, WiMoonWaningCrescent4, WiMoonWaningCrescent5, WiMoonWaningCrescent6, WiMoonWaningGibbous1, WiMoonWaningGibbous2, WiMoonWaningGibbous3, WiMoonWaningGibbous4, WiMoonWaningGibbous5, WiMoonWaningGibbous6, WiMoonWaxingCrescent1, WiMoonWaxingCrescent2, WiMoonWaxingCrescent3, WiMoonWaxingCrescent4, WiMoonWaxingCrescent5, WiMoonWaxingCrescent6, WiMoonWaxingGibbous1, WiMoonWaxingGibbous2, WiMoonWaxingGibbous3, WiMoonWaxingGibbous4, WiMoonWaxingGibbous5, WiMoonWaxingGibbous6, WiMoonrise, WiMoonset, WiNa, WiNightAltCloudyGusts, WiNightAltCloudyHigh, WiNightAltCloudyWindy, WiNightAltCloudy, WiNightAltHail, WiNightAltLightning, WiNightAltPartlyCloudy, WiNightAltRainMix, WiNightAltRainWind, WiNightAltRain, WiNightAltShowers, WiNightAltSleetStorm, WiNightAltSleet, WiNightAltSnowThunderstorm, WiNightAltSnowWind, WiNightAltSnow, WiNightAltSprinkle, WiNightAltStormShowers, WiNightAltThunderstorm, WiNightClear, WiNightCloudyGusts, WiNightCloudyHigh, WiNightCloudyWindy, WiNightCloudy, WiNightFog, WiNightHail, WiNightLightning, WiNightPartlyCloudy, WiNightRainMix, WiNightRainWind, WiNightRain, WiNightShowers, WiNightSleetStorm, WiNightSleet, WiNightSnowThunderstorm, WiNightSnowWind, WiNightSnow, WiNightSprinkle, WiNightStormShowers, WiNightThunderstorm, WiRainMix, WiRainWind, WiRain, WiRaindrop, WiRaindrops, WiRefreshAlt, WiRefresh, WiSandstorm, WiShowers, WiSleet, WiSmallCraftAdvisory, WiSmog, WiSmoke, WiSnowWind, WiSnow, WiSnowflakeCold, WiSolarEclipse, WiSprinkle, WiStars, WiStormShowers, WiStormWarning, WiStrongWind, WiSunrise, WiSunset, WiThermometerExterior, WiThermometerInternal, WiThermometer, WiThunderstorm, WiTime1, WiTime10, WiTime11, WiTime12, WiTime2, WiTime3, WiTime4, WiTime5, WiTime6, WiTime7, WiTime8, WiTime9, WiTornado, WiTrain, WiTsunami, WiUmbrella, WiVolcano, WiWindBeaufort0, WiWindBeaufort1, WiWindBeaufort10, WiWindBeaufort11, WiWindBeaufort12, WiWindBeaufort2, WiWindBeaufort3, WiWindBeaufort4, WiWindBeaufort5, WiWindBeaufort6, WiWindBeaufort7, WiWindBeaufort8, WiWindBeaufort9, WiWindDeg, WiWindy } from "react-icons/wi";    
// import { ImHome, ImHome2, ImHome3, ImOffice, ImNewspaper, ImPencil, ImPencil2, ImQuill, ImPen, ImBlog, ImEyedropper, ImDroplet, ImPaintFormat, ImImage, ImImages, ImCamera, ImHeadphones, ImMusic, ImPlay, ImFilm, ImVideoCamera, ImDice, ImPacman, ImSpades, ImClubs, ImDiamonds, ImBullhorn, ImConnection, ImPodcast, ImFeed, ImMic, ImBook, ImBooks, ImLibrary, ImFileText, ImProfile, ImFileEmpty, ImFilesEmpty, ImFileText2, ImFilePicture, ImFileMusic, ImFilePlay, ImFileVideo, ImFileZip, ImCopy, ImPaste, ImStack, ImFolder, ImFolderOpen, ImFolderPlus, ImFolderMinus, ImFolderDownload, ImFolderUpload, ImPriceTag, ImPriceTags, ImBarcode, ImQrcode, ImTicket, ImCart, ImCoinDollar, ImCoinEuro, ImCoinPound, ImCoinYen, ImCreditCard, ImCalculator, ImLifebuoy, ImPhone, ImPhoneHangUp, ImAddressBook, ImEnvelop, ImPushpin, ImLocation, ImLocation2, ImCompass, ImCompass2, ImMap, ImMap2, ImHistory, ImClock, ImClock2, ImAlarm, ImBell, ImStopwatch, ImCalendar, ImPrinter, ImKeyboard, ImDisplay, ImLaptop, ImMobile, ImMobile2, ImTablet, ImTv, ImDrawer, ImDrawer2, ImBoxAdd, ImBoxRemove, ImDownload, ImUpload, ImFloppyDisk, ImDrive, ImDatabase, ImUndo, ImRedo, ImUndo2, ImRedo2, ImForward, ImReply, ImBubble, ImBubbles, ImBubbles2, ImBubble2, ImBubbles3, ImBubbles4, ImUser, ImUsers, ImUserPlus, ImUserMinus, ImUserCheck, ImUserTie, ImQuotesLeft, ImQuotesRight, ImHourGlass, ImSpinner, ImSpinner2, ImSpinner3, ImSpinner4, ImSpinner5, ImSpinner6, ImSpinner7, ImSpinner8, ImSpinner9, ImSpinner10, ImSpinner11, ImBinoculars, ImSearch, ImZoomIn, ImZoomOut, ImEnlarge, ImShrink, ImEnlarge2, ImShrink2, ImKey, ImKey2, ImLock, ImUnlocked, ImWrench, ImEqualizer, ImEqualizer2, ImCog, ImCogs, ImHammer, ImMagicWand, ImAidKit, ImBug, ImPieChart, ImStatsDots, ImStatsBars, ImStatsBars2, ImTrophy, ImGift, ImGlass, ImGlass2, ImMug, ImSpoonKnife, ImLeaf, ImRocket, ImMeter, ImMeter2, ImHammer2, ImFire, ImLab, ImMagnet, ImBin, ImBin2, ImBriefcase, ImAirplane, ImTruck, ImRoad, ImAccessibility, ImTarget, ImShield, ImPower, ImSwitch, ImPowerCord, ImClipboard, ImListNumbered, ImList, ImList2, ImTree, ImMenu, ImMenu2, ImMenu3, ImMenu4, ImCloud, ImCloudDownload, ImCloudUpload, ImCloudCheck, ImDownload2, ImUpload2, ImDownload3, ImUpload3, ImSphere, ImEarth, ImLink, ImFlag, ImAttachment, ImEye, ImEyePlus, ImEyeMinus, ImEyeBlocked, ImBookmark, ImBookmarks, ImSun, ImContrast, ImBrightnessContrast, ImStarEmpty, ImStarHalf, ImStarFull, ImHeart, ImHeartBroken, ImMan, ImWoman, ImManWoman, ImHappy, ImHappy2, ImSmile, ImSmile2, ImTongue, ImTongue2, ImSad, ImSad2, ImWink, ImWink2, ImGrin, ImGrin2, ImCool, ImCool2, ImAngry, ImAngry2, ImEvil, ImEvil2, ImShocked, ImShocked2, ImBaffled, ImBaffled2, ImConfused, ImConfused2, ImNeutral, ImNeutral2, ImHipster, ImHipster2, ImWondering, ImWondering2, ImSleepy, ImSleepy2, ImFrustrated, ImFrustrated2, ImCrying, ImCrying2, ImPointUp, ImPointRight, ImPointDown, ImPointLeft, ImWarning, ImNotification, ImQuestion, ImPlus, ImMinus, ImInfo, ImCancelCircle, ImBlocked, ImCross, ImCheckmark, ImCheckmark2, ImSpellCheck, ImEnter, ImExit, ImPlay2, ImPause, ImStop, ImPrevious, ImNext, ImBackward, ImForward2, ImPlay3, ImPause2, ImStop2, ImBackward2, ImForward3, ImFirst, ImLast, ImPrevious2, ImNext2, ImEject, ImVolumeHigh, ImVolumeMedium, ImVolumeLow, ImVolumeMute, ImVolumeMute2, ImVolumeIncrease, ImVolumeDecrease, ImLoop, ImLoop2, ImInfinite, ImShuffle, ImArrowUpLeft, ImArrowUp, ImArrowUpRight, ImArrowRight, ImArrowDownRight, ImArrowDown, ImArrowDownLeft, ImArrowLeft, ImArrowUpLeft2, ImArrowUp2, ImArrowUpRight2, ImArrowRight2, ImArrowDownRight2, ImArrowDown2, ImArrowDownLeft2, ImArrowLeft2, ImCircleUp, ImCircleRight, ImCircleDown, ImCircleLeft, ImTab, ImMoveUp, ImMoveDown, ImSortAlphaAsc, ImSortAlphaDesc, ImSortNumericAsc, ImSortNumbericDesc, ImSortAmountAsc, ImSortAmountDesc, ImCommand, ImShift, ImCtrl, ImOpt, ImCheckboxChecked, ImCheckboxUnchecked, ImRadioChecked, ImRadioChecked2, ImRadioUnchecked, ImCrop, ImMakeGroup, ImUngroup, ImScissors, ImFilter, ImFont, ImLigature, ImLigature2, ImTextHeight, ImTextWidth, ImFontSize, ImBold, ImUnderline, ImItalic, ImStrikethrough, ImOmega, ImSigma, ImPageBreak, ImSuperscript, ImSubscript, ImSuperscript2, ImSubscript2, ImTextColor, ImPagebreak, ImClearFormatting, ImTable, ImTable2, ImInsertTemplate, ImPilcrow, ImLtr, ImRtl, ImSection, ImParagraphLeft, ImParagraphCenter, ImParagraphRight, ImParagraphJustify, ImIndentIncrease, ImIndentDecrease, ImShare, ImNewTab, ImEmbed, ImEmbed2, ImTerminal, ImShare2, ImMail, ImMail2, ImMail3, ImMail4, ImAmazon, ImGoogle, ImGoogle2, ImGoogle3, ImGooglePlus, ImGooglePlus2, ImGooglePlus3, ImHangouts, ImGoogleDrive, ImFacebook, ImFacebook2, ImInstagram, ImWhatsapp, ImSpotify, ImTelegram, ImTwitter, ImVine, ImVk, ImRenren, ImSinaWeibo, ImRss, ImRss2, ImYoutube, ImYoutube2, ImTwitch, ImVimeo, ImVimeo2, ImLanyrd, ImFlickr, ImFlickr2, ImFlickr3, ImFlickr4, ImDribbble, ImBehance, ImBehance2, ImDeviantart, Im500Px, ImSteam, ImSteam2, ImDropbox, ImOnedrive, ImGithub, ImNpm, ImBasecamp, ImTrello, ImWordpress, ImJoomla, ImEllo, ImBlogger, ImBlogger2, ImTumblr, ImTumblr2, ImYahoo, ImYahoo2, ImTux, ImAppleinc, ImFinder, ImAndroid, ImWindows, ImWindows8, ImSoundcloud, ImSoundcloud2, ImSkype, ImReddit, ImHackernews, ImWikipedia, ImLinkedin, ImLinkedin2, ImLastfm, ImLastfm2, ImDelicious, ImStumbleupon, ImStumbleupon2, ImStackoverflow, ImPinterest, ImPinterest2, ImXing, ImXing2, ImFlattr, ImFoursquare, ImYelp, ImPaypal, ImChrome, ImFirefox, ImIe, ImEdge, ImSafari, ImOpera, ImFilePdf, ImFileOpenoffice, ImFileWord, ImFileExcel, ImLibreoffice, ImHtmlFive, ImHtmlFive2, ImCss3, ImGit, ImCodepen, ImSvg, ImIcoMoon } from "react-icons/im";    
// import { Fa500Px, FaAccessibleIcon, FaAccusoft, FaAcquisitionsIncorporated, FaAdn, FaAdobe, FaAdversal, FaAffiliatetheme, FaAirbnb, FaAlgolia, FaAlipay, FaAmazonPay, FaAmazon, FaAmilia, FaAndroid, FaAngellist, FaAngrycreative, FaAngular, FaAppStoreIos, FaAppStore, FaApper, FaApplePay, FaApple, FaArtstation, FaAsymmetrik, FaAtlassian, FaAudible, FaAutoprefixer, FaAvianex, FaAviato, FaAws, FaBandcamp, FaBattleNet, FaBehanceSquare, FaBehance, FaBimobject, FaBitbucket, FaBitcoin, FaBity, FaBlackTie, FaBlackberry, FaBloggerB, FaBlogger, FaBluetoothB, FaBluetooth, FaBootstrap, FaBtc, FaBuffer, FaBuromobelexperte, FaBuyNLarge, FaBuysellads, FaCanadianMapleLeaf, FaCcAmazonPay, FaCcAmex, FaCcApplePay, FaCcDinersClub, FaCcDiscover, FaCcJcb, FaCcMastercard, FaCcPaypal, FaCcStripe, FaCcVisa, FaCentercode, FaCentos, FaChrome, FaChromecast, FaCloudscale, FaCloudsmith, FaCloudversify, FaCodepen, FaCodiepie, FaConfluence, FaConnectdevelop, FaContao, FaCottonBureau, FaCpanel, FaCreativeCommonsBy, FaCreativeCommonsNcEu, FaCreativeCommonsNcJp, FaCreativeCommonsNc, FaCreativeCommonsNd, FaCreativeCommonsPdAlt, FaCreativeCommonsPd, FaCreativeCommonsRemix, FaCreativeCommonsSa, FaCreativeCommonsSamplingPlus, FaCreativeCommonsSampling, FaCreativeCommonsShare, FaCreativeCommonsZero, FaCreativeCommons, FaCriticalRole, FaCss3Alt, FaCss3, FaCuttlefish, FaDAndDBeyond, FaDAndD, FaDailymotion, FaDashcube, FaDelicious, FaDeploydog, FaDeskpro, FaDev, FaDeviantart, FaDhl, FaDiaspora, FaDigg, FaDigitalOcean, FaDiscord, FaDiscourse, FaDochub, FaDocker, FaDraft2Digital, FaDribbbleSquare, FaDribbble, FaDropbox, FaDrupal, FaDyalog, FaEarlybirds, FaEbay, FaEdge, FaElementor, FaEllo, FaEmber, FaEmpire, FaEnvira, FaErlang, FaEthereum, FaEtsy, FaEvernote, FaExpeditedssl, FaFacebookF, FaFacebookMessenger, FaFacebookSquare, FaFacebook, FaFantasyFlightGames, FaFedex, FaFedora, FaFigma, FaFirefoxBrowser, FaFirefox, FaFirstOrderAlt, FaFirstOrder, FaFirstdraft, FaFlickr, FaFlipboard, FaFly, FaFontAwesomeAlt, FaFontAwesomeFlag, FaFontAwesomeLogoFull, FaFontAwesome, FaFonticonsFi, FaFonticons, FaFortAwesomeAlt, FaFortAwesome, FaForumbee, FaFoursquare, FaFreeCodeCamp, FaFreebsd, FaFulcrum, FaGalacticRepublic, FaGalacticSenate, FaGetPocket, FaGgCircle, FaGg, FaGitAlt, FaGitSquare, FaGit, FaGithubAlt, FaGithubSquare, FaGithub, FaGitkraken, FaGitlab, FaGitter, FaGlideG, FaGlide, FaGofore, FaGoodreadsG, FaGoodreads, FaGoogleDrive, FaGooglePlay, FaGooglePlusG, FaGooglePlusSquare, FaGooglePlus, FaGoogleWallet, FaGoogle, FaGratipay, FaGrav, FaGripfire, FaGrunt, FaGulp, FaHackerNewsSquare, FaHackerNews, FaHackerrank, FaHips, FaHireAHelper, FaHooli, FaHornbill, FaHotjar, FaHouzz, FaHtml5, FaHubspot, FaIdeal, FaImdb, FaInstagramSquare, FaInstagram, FaIntercom, FaInternetExplorer, FaInvision, FaIoxhost, FaItchIo, FaItunesNote, FaItunes, FaJava, FaJediOrder, FaJenkins, FaJira, FaJoget, FaJoomla, FaJsSquare, FaJs, FaJsfiddle, FaKaggle, FaKeybase, FaKeycdn, FaKickstarterK, FaKickstarter, FaKorvue, FaLaravel, FaLastfmSquare, FaLastfm, FaLeanpub, FaLess, FaLine, FaLinkedinIn, FaLinkedin, FaLinode, FaLinux, FaLyft, FaMagento, FaMailchimp, FaMandalorian, FaMarkdown, FaMastodon, FaMaxcdn, FaMdb, FaMedapps, FaMediumM, FaMedium, FaMedrt, FaMeetup, FaMegaport, FaMendeley, FaMicroblog, FaMicrosoft, FaMix, FaMixcloud, FaMixer, FaMizuni, FaModx, FaMonero, FaNapster, FaNeos, FaNimblr, FaNodeJs, FaNode, FaNpm, FaNs8, FaNutritionix, FaOdnoklassnikiSquare, FaOdnoklassniki, FaOldRepublic, FaOpencart, FaOpenid, FaOpera, FaOptinMonster, FaOrcid, FaOsi, FaPage4, FaPagelines, FaPalfed, FaPatreon, FaPaypal, FaPennyArcade, FaPeriscope, FaPhabricator, FaPhoenixFramework, FaPhoenixSquadron, FaPhp, FaPiedPiperAlt, FaPiedPiperHat, FaPiedPiperPp, FaPiedPiperSquare, FaPiedPiper, FaPinterestP, FaPinterestSquare, FaPinterest, FaPlaystation, FaProductHunt, FaPushed, FaPython, FaQq, FaQuinscape, FaQuora, FaRProject, FaRaspberryPi, FaRavelry, FaReact, FaReacteurope, FaReadme, FaRebel, FaRedRiver, FaRedditAlien, FaRedditSquare, FaReddit, FaRedhat, FaRenren, FaReplyd, FaResearchgate, FaResolving, FaRev, FaRocketchat, FaRockrms, FaSafari, FaSalesforce, FaSass, FaSchlix, FaScribd, FaSearchengin, FaSellcast, FaSellsy, FaServicestack, FaShirtsinbulk, FaShopify, FaShopware, FaSimplybuilt, FaSistrix, FaSith, FaSketch, FaSkyatlas, FaSkype, FaSlackHash, FaSlack, FaSlideshare, FaSnapchatGhost, FaSnapchatSquare, FaSnapchat, FaSoundcloud, FaSourcetree, FaSpeakap, FaSpeakerDeck, FaSpotify, FaSquarespace, FaStackExchange, FaStackOverflow, FaStackpath, FaStaylinked, FaSteamSquare, FaSteamSymbol, FaSteam, FaStickerMule, FaStrava, FaStripeS, FaStripe, FaStudiovinari, FaStumbleuponCircle, FaStumbleupon, FaSuperpowers, FaSupple, FaSuse, FaSwift, FaSymfony, FaTeamspeak, FaTelegramPlane, FaTelegram, FaTencentWeibo, FaTheRedYeti, FaThemeco, FaThemeisle, FaThinkPeaks, FaTradeFederation, FaTrello, FaTripadvisor, FaTumblrSquare, FaTumblr, FaTwitch, FaTwitterSquare, FaTwitter, FaTypo3, FaUber, FaUbuntu, FaUikit, FaUmbraco, FaUniregistry, FaUnity, FaUntappd, FaUps, FaUsb, FaUsps, FaUssunnah, FaVaadin, FaViacoin, FaViadeoSquare, FaViadeo, FaViber, FaVimeoSquare, FaVimeoV, FaVimeo, FaVine, FaVk, FaVnv, FaVuejs, FaWaze, FaWeebly, FaWeibo, FaWeixin, FaWhatsappSquare, FaWhatsapp, FaWhmcs, FaWikipediaW, FaWindows, FaWix, FaWizardsOfTheCoast, FaWolfPackBattalion, FaWordpressSimple, FaWordpress, FaWpbeginner, FaWpexplorer, FaWpforms, FaWpressr, FaXbox, FaXingSquare, FaXing, FaYCombinator, FaYahoo, FaYammer, FaYandexInternational, FaYandex, FaYarn, FaYelp, FaYoast, FaYoutubeSquare, FaYoutube, FaZhihu } from "react-icons/fa";    
// import { FaAd, FaAddressBook, FaAddressCard, FaAdjust, FaAirFreshener, FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight, FaAllergies, FaAmbulance, FaAmericanSignLanguageInterpreting, FaAnchor, FaAngleDoubleDown, FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleDoubleUp, FaAngleDown, FaAngleLeft, FaAngleRight, FaAngleUp, FaAngry, FaAnkh, FaAppleAlt, FaArchive, FaArchway, FaArrowAltCircleDown, FaArrowAltCircleLeft, FaArrowAltCircleRight, FaArrowAltCircleUp, FaArrowCircleDown, FaArrowCircleLeft, FaArrowCircleRight, FaArrowCircleUp, FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp, FaArrowsAltH, FaArrowsAltV, FaArrowsAlt, FaAssistiveListeningSystems, FaAsterisk, FaAt, FaAtlas, FaAtom, FaAudioDescription, FaAward, FaBabyCarriage, FaBaby, FaBackspace, FaBackward, FaBacon, FaBahai, FaBalanceScaleLeft, FaBalanceScaleRight, FaBalanceScale, FaBan, FaBandAid, FaBarcode, FaBars, FaBaseballBall, FaBasketballBall, FaBath, FaBatteryEmpty, FaBatteryFull, FaBatteryHalf, FaBatteryQuarter, FaBatteryThreeQuarters, FaBed, FaBeer, FaBellSlash, FaBell, FaBezierCurve, FaBible, FaBicycle, FaBiking, FaBinoculars, FaBiohazard, FaBirthdayCake, FaBlenderPhone, FaBlender, FaBlind, FaBlog, FaBold, FaBolt, FaBomb, FaBone, FaBong, FaBookDead, FaBookMedical, FaBookOpen, FaBookReader, FaBook, FaBookmark, FaBorderAll, FaBorderNone, FaBorderStyle, FaBowlingBall, FaBoxOpen, FaBox, FaBoxes, FaBraille, FaBrain, FaBreadSlice, FaBriefcaseMedical, FaBriefcase, FaBroadcastTower, FaBroom, FaBrush, FaBug, FaBuilding, FaBullhorn, FaBullseye, FaBurn, FaBusAlt, FaBus, FaBusinessTime, FaCalculator, FaCalendarAlt, FaCalendarCheck, FaCalendarDay, FaCalendarMinus, FaCalendarPlus, FaCalendarTimes, FaCalendarWeek, FaCalendar, FaCameraRetro, FaCamera, FaCampground, FaCandyCane, FaCannabis, FaCapsules, FaCarAlt, FaCarBattery, FaCarCrash, FaCarSide, FaCar, FaCaravan, FaCaretDown, FaCaretLeft, FaCaretRight, FaCaretSquareDown, FaCaretSquareLeft, FaCaretSquareRight, FaCaretSquareUp, FaCaretUp, FaCarrot, FaCartArrowDown, FaCartPlus, FaCashRegister, FaCat, FaCertificate, FaChair, FaChalkboardTeacher, FaChalkboard, FaChargingStation, FaChartArea, FaChartBar, FaChartLine, FaChartPie, FaCheckCircle, FaCheckDouble, FaCheckSquare, FaCheck, FaCheese, FaChessBishop, FaChessBoard, FaChessKing, FaChessKnight, FaChessPawn, FaChessQueen, FaChessRook, FaChess, FaChevronCircleDown, FaChevronCircleLeft, FaChevronCircleRight, FaChevronCircleUp, FaChevronDown, FaChevronLeft, FaChevronRight, FaChevronUp, FaChild, FaChurch, FaCircleNotch, FaCircle, FaCity, FaClinicMedical, FaClipboardCheck, FaClipboardList, FaClipboard, FaClock, FaClone, FaClosedCaptioning, FaCloudDownloadAlt, FaCloudMeatball, FaCloudMoonRain, FaCloudMoon, FaCloudRain, FaCloudShowersHeavy, FaCloudSunRain, FaCloudSun, FaCloudUploadAlt, FaCloud, FaCocktail, FaCodeBranch, FaCode, FaCoffee, FaCog, FaCogs, FaCoins, FaColumns, FaCommentAlt, FaCommentDollar, FaCommentDots, FaCommentMedical, FaCommentSlash, FaComment, FaCommentsDollar, FaComments, FaCompactDisc, FaCompass, FaCompressAlt, FaCompressArrowsAlt, FaCompress, FaConciergeBell, FaCookieBite, FaCookie, FaCopy, FaCopyright, FaCouch, FaCreditCard, FaCropAlt, FaCrop, FaCross, FaCrosshairs, FaCrow, FaCrown, FaCrutch, FaCube, FaCubes, FaCut, FaDatabase, FaDeaf, FaDemocrat, FaDesktop, FaDharmachakra, FaDiagnoses, FaDiceD20, FaDiceD6, FaDiceFive, FaDiceFour, FaDiceOne, FaDiceSix, FaDiceThree, FaDiceTwo, FaDice, FaDigitalTachograph, FaDirections, FaDivide, FaDizzy, FaDna, FaDog, FaDollarSign, FaDollyFlatbed, FaDolly, FaDonate, FaDoorClosed, FaDoorOpen, FaDotCircle, FaDove, FaDownload, FaDraftingCompass, FaDragon, FaDrawPolygon, FaDrumSteelpan, FaDrum, FaDrumstickBite, FaDumbbell, FaDumpsterFire, FaDumpster, FaDungeon, FaEdit, FaEgg, FaEject, FaEllipsisH, FaEllipsisV, FaEnvelopeOpenText, FaEnvelopeOpen, FaEnvelopeSquare, FaEnvelope, FaEquals, FaEraser, FaEthernet, FaEuroSign, FaExchangeAlt, FaExclamationCircle, FaExclamationTriangle, FaExclamation, FaExpandAlt, FaExpandArrowsAlt, FaExpand, FaExternalLinkAlt, FaExternalLinkSquareAlt, FaEyeDropper, FaEyeSlash, FaEye, FaFan, FaFastBackward, FaFastForward, FaFax, FaFeatherAlt, FaFeather, FaFemale, FaFighterJet, FaFileAlt, FaFileArchive, FaFileAudio, FaFileCode, FaFileContract, FaFileCsv, FaFileDownload, FaFileExcel, FaFileExport, FaFileImage, FaFileImport, FaFileInvoiceDollar, FaFileInvoice, FaFileMedicalAlt, FaFileMedical, FaFilePdf, FaFilePowerpoint, FaFilePrescription, FaFileSignature, FaFileUpload, FaFileVideo, FaFileWord, FaFile, FaFillDrip, FaFill, FaFilm, FaFilter, FaFingerprint, FaFireAlt, FaFireExtinguisher, FaFire, FaFirstAid, FaFish, FaFistRaised, FaFlagCheckered, FaFlagUsa, FaFlag, FaFlask, FaFlushed, FaFolderMinus, FaFolderOpen, FaFolderPlus, FaFolder, FaFont, FaFootballBall, FaForward, FaFrog, FaFrownOpen, FaFrown, FaFunnelDollar, FaFutbol, FaGamepad, FaGasPump, FaGavel, FaGem, FaGenderless, FaGhost, FaGift, FaGifts, FaGlassCheers, FaGlassMartiniAlt, FaGlassMartini, FaGlassWhiskey, FaGlasses, FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope, FaGlobe, FaGolfBall, FaGopuram, FaGraduationCap, FaGreaterThanEqual, FaGreaterThan, FaGrimace, FaGrinAlt, FaGrinBeamSweat, FaGrinBeam, FaGrinHearts, FaGrinSquintTears, FaGrinSquint, FaGrinStars, FaGrinTears, FaGrinTongueSquint, FaGrinTongueWink, FaGrinTongue, FaGrinWink, FaGrin, FaGripHorizontal, FaGripLinesVertical, FaGripLines, FaGripVertical, FaGuitar, FaHSquare, FaHamburger, FaHammer, FaHamsa, FaHandHoldingHeart, FaHandHoldingUsd, FaHandHolding, FaHandLizard, FaHandMiddleFinger, FaHandPaper, FaHandPeace, FaHandPointDown, FaHandPointLeft, FaHandPointRight, FaHandPointUp, FaHandPointer, FaHandRock, FaHandScissors, FaHandSpock, FaHandsHelping, FaHands, FaHandshake, FaHanukiah, FaHardHat, FaHashtag, FaHatCowboySide, FaHatCowboy, FaHatWizard, FaHdd, FaHeading, FaHeadphonesAlt, FaHeadphones, FaHeadset, FaHeartBroken, FaHeart, FaHeartbeat, FaHelicopter, FaHighlighter, FaHiking, FaHippo, FaHistory, FaHockeyPuck, FaHollyBerry, FaHome, FaHorseHead, FaHorse, FaHospitalAlt, FaHospitalSymbol, FaHospital, FaHotTub, FaHotdog, FaHotel, FaHourglassEnd, FaHourglassHalf, FaHourglassStart, FaHourglass, FaHouseDamage, FaHryvnia, FaICursor, FaIceCream, FaIcicles, FaIcons, FaIdBadge, FaIdCardAlt, FaIdCard, FaIgloo, FaImage, FaImages, FaInbox, FaIndent, FaIndustry, FaInfinity, FaInfoCircle, FaInfo, FaItalic, FaJedi, FaJoint, FaJournalWhills, FaKaaba, FaKey, FaKeyboard, FaKhanda, FaKissBeam, FaKissWinkHeart, FaKiss, FaKiwiBird } from "react-icons/fa";    
// import { FaLandmark, FaLanguage, FaLaptopCode, FaLaptopMedical, FaLaptop, FaLaughBeam, FaLaughSquint, FaLaughWink, FaLaugh, FaLayerGroup, FaLeaf, FaLemon, FaLessThanEqual, FaLessThan, FaLevelDownAlt, FaLevelUpAlt, FaLifeRing, FaLightbulb, FaLink, FaLiraSign, FaListAlt, FaListOl, FaListUl, FaList, FaLocationArrow, FaLockOpen, FaLock, FaLongArrowAltDown, FaLongArrowAltLeft, FaLongArrowAltRight, FaLongArrowAltUp, FaLowVision, FaLuggageCart, FaMagic, FaMagnet, FaMailBulk, FaMale, FaMapMarkedAlt, FaMapMarked, FaMapMarkerAlt, FaMapMarker, FaMapPin, FaMapSigns, FaMap, FaMarker, FaMarsDouble, FaMarsStrokeH, FaMarsStrokeV, FaMarsStroke, FaMars, FaMask, FaMedal, FaMedkit, FaMehBlank, FaMehRollingEyes, FaMeh, FaMemory, FaMenorah, FaMercury, FaMeteor, FaMicrochip, FaMicrophoneAltSlash, FaMicrophoneAlt, FaMicrophoneSlash, FaMicrophone, FaMicroscope, FaMinusCircle, FaMinusSquare, FaMinus, FaMitten, FaMobileAlt, FaMobile, FaMoneyBillAlt, FaMoneyBillWaveAlt, FaMoneyBillWave, FaMoneyBill, FaMoneyCheckAlt, FaMoneyCheck, FaMonument, FaMoon, FaMortarPestle, FaMosque, FaMotorcycle, FaMountain, FaMousePointer, FaMouse, FaMugHot, FaMusic, FaNetworkWired, FaNeuter, FaNewspaper, FaNotEqual, FaNotesMedical, FaObjectGroup, FaObjectUngroup, FaOilCan, FaOm, FaOtter, FaOutdent, FaPager, FaPaintBrush, FaPaintRoller, FaPalette, FaPallet, FaPaperPlane, FaPaperclip, FaParachuteBox, FaParagraph, FaParking, FaPassport, FaPastafarianism, FaPaste, FaPauseCircle, FaPause, FaPaw, FaPeace, FaPenAlt, FaPenFancy, FaPenNib, FaPenSquare, FaPen, FaPencilAlt, FaPencilRuler, FaPeopleCarry, FaPepperHot, FaPercent, FaPercentage, FaPersonBooth, FaPhoneAlt, FaPhoneSlash, FaPhoneSquareAlt, FaPhoneSquare, FaPhoneVolume, FaPhone, FaPhotoVideo, FaPiggyBank, FaPills, FaPizzaSlice, FaPlaceOfWorship, FaPlaneArrival, FaPlaneDeparture, FaPlane, FaPlayCircle, FaPlay, FaPlug, FaPlusCircle, FaPlusSquare, FaPlus, FaPodcast, FaPollH, FaPoll, FaPooStorm, FaPoo, FaPoop, FaPortrait, FaPoundSign, FaPowerOff, FaPray, FaPrayingHands, FaPrescriptionBottleAlt, FaPrescriptionBottle, FaPrescription, FaPrint, FaProcedures, FaProjectDiagram, FaPuzzlePiece, FaQrcode, FaQuestionCircle, FaQuestion, FaQuidditch, FaQuoteLeft, FaQuoteRight, FaQuran, FaRadiationAlt, FaRadiation, FaRainbow, FaRandom, FaReceipt, FaRecordVinyl, FaRecycle, FaRedoAlt, FaRedo, FaRegistered, FaRemoveFormat, FaReplyAll, FaReply, FaRepublican, FaRestroom, FaRetweet, FaRibbon, FaRing, FaRoad, FaRobot, FaRocket, FaRoute, FaRssSquare, FaRss, FaRubleSign, FaRulerCombined, FaRulerHorizontal, FaRulerVertical, FaRuler, FaRunning, FaRupeeSign, FaSadCry, FaSadTear, FaSatelliteDish, FaSatellite, FaSave, FaSchool, FaScrewdriver, FaScroll, FaSdCard, FaSearchDollar, FaSearchLocation, FaSearchMinus, FaSearchPlus, FaSearch, FaSeedling, FaServer, FaShapes, FaShareAltSquare, FaShareAlt, FaShareSquare, FaShare, FaShekelSign, FaShieldAlt, FaShip, FaShippingFast, FaShoePrints, FaShoppingBag, FaShoppingBasket, FaShoppingCart, FaShower, FaShuttleVan, FaSignInAlt, FaSignLanguage, FaSignOutAlt, FaSign, FaSignal, FaSignature, FaSimCard, FaSitemap, FaSkating, FaSkiingNordic, FaSkiing, FaSkullCrossbones, FaSkull, FaSlash, FaSleigh, FaSlidersH, FaSmileBeam, FaSmileWink, FaSmile, FaSmog, FaSmokingBan, FaSmoking, FaSms, FaSnowboarding, FaSnowflake, FaSnowman, FaSnowplow, FaSocks, FaSolarPanel, FaSortAlphaDownAlt, FaSortAlphaDown, FaSortAlphaUpAlt, FaSortAlphaUp, FaSortAmountDownAlt, FaSortAmountDown, FaSortAmountUpAlt, FaSortAmountUp, FaSortDown, FaSortNumericDownAlt, FaSortNumericDown, FaSortNumericUpAlt, FaSortNumericUp, FaSortUp, FaSort, FaSpa, FaSpaceShuttle, FaSpellCheck, FaSpider, FaSpinner, FaSplotch, FaSprayCan, FaSquareFull, FaSquareRootAlt, FaSquare, FaStamp, FaStarAndCrescent, FaStarHalfAlt, FaStarHalf, FaStarOfDavid, FaStarOfLife, FaStar, FaStepBackward, FaStepForward, FaStethoscope, FaStickyNote, FaStopCircle, FaStop, FaStopwatch, FaStoreAlt, FaStore, FaStream, FaStreetView, FaStrikethrough, FaStroopwafel, FaSubscript, FaSubway, FaSuitcaseRolling, FaSuitcase, FaSun, FaSuperscript, FaSurprise, FaSwatchbook, FaSwimmer, FaSwimmingPool, FaSynagogue, FaSyncAlt, FaSync, FaSyringe, FaTableTennis, FaTable, FaTabletAlt, FaTablet, FaTablets, FaTachometerAlt, FaTag, FaTags, FaTape, FaTasks, FaTaxi, FaTeethOpen, FaTeeth, FaTemperatureHigh, FaTemperatureLow, FaTenge, FaTerminal, FaTextHeight, FaTextWidth, FaThLarge, FaThList, FaTh, FaTheaterMasks, FaThermometerEmpty, FaThermometerFull, FaThermometerHalf, FaThermometerQuarter, FaThermometerThreeQuarters, FaThermometer, FaThumbsDown, FaThumbsUp, FaThumbtack, FaTicketAlt, FaTimesCircle, FaTimes, FaTintSlash, FaTint, FaTired, FaToggleOff, FaToggleOn, FaToiletPaper, FaToilet, FaToolbox, FaTools, FaTooth, FaTorah, FaToriiGate, FaTractor, FaTrademark, FaTrafficLight, FaTrailer, FaTrain, FaTram, FaTransgenderAlt, FaTransgender, FaTrashAlt, FaTrashRestoreAlt, FaTrashRestore, FaTrash, FaTree, FaTrophy, FaTruckLoading, FaTruckMonster, FaTruckMoving, FaTruckPickup, FaTruck, FaTshirt, FaTty, FaTv, FaUmbrellaBeach, FaUmbrella, FaUnderline, FaUndoAlt, FaUndo, FaUniversalAccess, FaUniversity, FaUnlink, FaUnlockAlt, FaUnlock, FaUpload, FaUserAltSlash, FaUserAlt, FaUserAstronaut, FaUserCheck, FaUserCircle, FaUserClock, FaUserCog, FaUserEdit, FaUserFriends, FaUserGraduate, FaUserInjured, FaUserLock, FaUserMd, FaUserMinus, FaUserNinja, FaUserNurse, FaUserPlus, FaUserSecret, FaUserShield, FaUserSlash, FaUserTag, FaUserTie, FaUserTimes, FaUser, FaUsersCog, FaUsers, FaUtensilSpoon, FaUtensils, FaVectorSquare, FaVenusDouble, FaVenusMars, FaVenus, FaVial, FaVials, FaVideoSlash, FaVideo, FaVihara, FaVoicemail, FaVolleyballBall, FaVolumeDown, FaVolumeMute, FaVolumeOff, FaVolumeUp, FaVoteYea, FaVrCardboard, FaWalking, FaWallet, FaWarehouse, FaWater, FaWaveSquare, FaWeightHanging, FaWeight, FaWheelchair, FaWifi, FaWind, FaWindowClose, FaWindowMaximize, FaWindowMinimize, FaWindowRestore, FaWineBottle, FaWineGlassAlt, FaWineGlass, FaWonSign, FaWrench, FaXRay, FaYenSign, FaYinYang, FaRegAddressBook, FaRegAddressCard, FaRegAngry, FaRegArrowAltCircleDown, FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight, FaRegArrowAltCircleUp, FaRegBellSlash, FaRegBell, FaRegBookmark, FaRegBuilding, FaRegCalendarAlt, FaRegCalendarCheck, FaRegCalendarMinus, FaRegCalendarPlus, FaRegCalendarTimes, FaRegCalendar, FaRegCaretSquareDown, FaRegCaretSquareLeft, FaRegCaretSquareRight, FaRegCaretSquareUp, FaRegChartBar, FaRegCheckCircle, FaRegCheckSquare, FaRegCircle, FaRegClipboard, FaRegClock, FaRegClone, FaRegClosedCaptioning, FaRegCommentAlt, FaRegCommentDots, FaRegComment, FaRegComments, FaRegCompass, FaRegCopy, FaRegCopyright, FaRegCreditCard, FaRegDizzy, FaRegDotCircle, FaRegEdit, FaRegEnvelopeOpen, FaRegEnvelope, FaRegEyeSlash, FaRegEye, FaRegFileAlt, FaRegFileArchive, FaRegFileAudio, FaRegFileCode, FaRegFileExcel, FaRegFileImage, FaRegFilePdf, FaRegFilePowerpoint, FaRegFileVideo, FaRegFileWord, FaRegFile, FaRegFlag, FaRegFlushed, FaRegFolderOpen, FaRegFolder, FaRegFontAwesomeLogoFull, FaRegFrownOpen, FaRegFrown, FaRegFutbol, FaRegGem, FaRegGrimace, FaRegGrinAlt, FaRegGrinBeamSweat, FaRegGrinBeam, FaRegGrinHearts, FaRegGrinSquintTears, FaRegGrinSquint, FaRegGrinStars, FaRegGrinTears, FaRegGrinTongueSquint, FaRegGrinTongueWink, FaRegGrinTongue, FaRegGrinWink, FaRegGrin, FaRegHandLizard, FaRegHandPaper, FaRegHandPeace, FaRegHandPointDown, FaRegHandPointLeft, FaRegHandPointRight, FaRegHandPointUp, FaRegHandPointer, FaRegHandRock, FaRegHandScissors, FaRegHandSpock, FaRegHandshake, FaRegHdd, FaRegHeart, FaRegHospital, FaRegHourglass, FaRegIdBadge, FaRegIdCard, FaRegImage, FaRegImages, FaRegKeyboard, FaRegKissBeam, FaRegKissWinkHeart, FaRegKiss, FaRegLaughBeam, FaRegLaughSquint, FaRegLaughWink, FaRegLaugh, FaRegLemon, FaRegLifeRing, FaRegLightbulb, FaRegListAlt, FaRegMap, FaRegMehBlank, FaRegMehRollingEyes, FaRegMeh, FaRegMinusSquare, FaRegMoneyBillAlt, FaRegMoon, FaRegNewspaper, FaRegObjectGroup, FaRegObjectUngroup, FaRegPaperPlane, FaRegPauseCircle, FaRegPlayCircle, FaRegPlusSquare, FaRegQuestionCircle, FaRegRegistered, FaRegSadCry, FaRegSadTear, FaRegSave, FaRegShareSquare, FaRegSmileBeam, FaRegSmileWink, FaRegSmile, FaRegSnowflake, FaRegSquare, FaRegStarHalf, FaRegStar, FaRegStickyNote, FaRegStopCircle, FaRegSun, FaRegSurprise, FaRegThumbsDown, FaRegThumbsUp, FaRegTimesCircle, FaRegTired, FaRegTrashAlt, FaRegUserCircle, FaRegUser, FaRegWindowClose, FaRegWindowMaximize, FaRegWindowMinimize, FaRegWindowRestore } from "react-icons/fa";    
          function DonutFooter() {      
// const [] // selected route?    
// const history = useHistory();    
// const [appState] = useStateValue();    
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
            <Center>    
            <Stack direction="row" spacing={2}>    
            <HStack>    
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
            </HStack>    
            <HStack>    
            <Wrap>    
            <WrapItem>    
            <Avatar    
size="2xs"    
name=" Scott Stevenson "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
    />{" "}
            </WrapItem>    
            <WrapItem>    
            <Avatar    
size="xs"    
name=" Scott Stevenson "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
    />{" "}
            </WrapItem>    
            <WrapItem>    
            <Avatar    
size="sm"    
name=" Scott Stevenson "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
    />{" "}
            </WrapItem>    
            <WrapItem>    
            <Avatar    
size="md"    
name=" Scott Stevenson "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
    />{" "}
            </WrapItem>    
            <WrapItem>    
            <Avatar    
size="lg"    
name=" Scott Stevenson "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
    />{" "}
            </WrapItem>    
            <WrapItem>    
            <Avatar    
size="xl"    
name=" Scott Stevenson "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
    />{" "}
            </WrapItem>    
            <WrapItem>    
            <Avatar    
size="2xl"    
name=" Scott Stevenson "  
src=" https://bafybeiaqqimmd5e7n4xxewelyt76hscsxfbfgifxbwitk6lwzbziivn2fq.ipfs.infura-ipfs.io/ "  
    />{" "}
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
            <AvatarBadge    
borderColor="papayawhip"    
bg="tomato"    
boxSize="1.25em"    
    />
            </Avatar>    
            </HStack>    
            </Stack>    
            </Center>    
 <br/>               
            </div>    
            </ div>

    );
    }
  export default DonutFooter;              
