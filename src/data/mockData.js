import { tokens } from "../theme";
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import FolderIcon from '@mui/icons-material/Folder';
import StarIcon from '@mui/icons-material/Star';
import DeleteIcon from '@mui/icons-material/Delete';
import TvIcon from '@mui/icons-material/Tv';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TopicIcon from '@mui/icons-material/Topic';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AudioFileIcon from '@mui/icons-material/AudioFile';
import ChatList from "../components/ChatList";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DatasetIcon from '@mui/icons-material/Dataset';
import SettingsIcon from '@mui/icons-material/Settings';


export const mockDataTeam = [
  {
    id: 1,
    nombre: "Jon Snow",
    email: "jonsnow@gmail.com",
    edad: 35,
    telefono: "(665)121-5454",
    acceso: "admin",
  },
  {
    id: 2,
    nombre: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    edad: 42,
    telefono: "(421)314-2288",
    acceso: "manager",
  },
  {
    id: 3,
    nombre: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    edad: 45,
    telefono: "(422)982-6739",
    acceso: "user",
  },
  {
    id: 4,
    nombre: "Anya Stark",
    email: "anyastark@gmail.com",
    edad: 16,
    telefono: "(921)425-6742",
    acceso: "admin",
  },
  {
    id: 5,
    nombre: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    edad: 31,
    telefono: "(421)445-1189",
    acceso: "user",
  },
  {
    id: 6,
    nombre: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    edad: 150,
    telefono: "(232)545-6483",
    acceso: "manager",
  },
  {
    id: 7,
    nombre: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    edad: 44,
    telefono: "(543)124-0123",
    acceso: "user",
  },
  {
    id: 8,
    nombre: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    edad: 36,
    telefono: "(222)444-5555",
    acceso: "user",
  },
  {
    id: 9,
    nombre: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    edad: 65,
    telefono: "(444)555-6239",
    acceso: "admin",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    nombre: "Jon Snow",
    email: "jonsnow@gmail.com",
    edad: 35,
    telefono: "(665)121-5454",
    direccion: "0912 Won Street, Alabama, SY 10001",
    ciudad: "New York",
    codigoPostal: "10001",
    registrarId: 123512,
  },
  {
    id: 2,
    nombre: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    edad: 42,
    telefono: "(421)314-2288",
    direccion: "1234 Main Street, New York, NY 10001",
    ciudad: "New York",
    codigoPostal: "13151",
    registrarId: 123512,
  },
  {
    id: 3,
    nombre: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    edad: 45,
    telefono: "(422)982-6739",
    direccion: "3333 Want Blvd, Estanza, NAY 42125",
    ciudad: "New York",
    codigoPostal: "87281",
    registrarId: 4132513,
  },
  {
    id: 4,
    nombre: "Anya Stark",
    email: "anyastark@gmail.com",
    edad: 16,
    telefono: "(921)425-6742",
    direccion: "1514 Main Street, New York, NY 22298",
    ciudad: "New York",
    codigoPostal: "15551",
    registrarId: 123512,
  },
  {
    id: 5,
    nombre: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    edad: 31,
    telefono: "(421)445-1189",
    direccion: "11122 Welping Ave, Tenting, CD 21321",
    ciudad: "Tenting",
    codigoPostal: "14215",
    registrarId: 123512,
  },
  {
    id: 6,
    nombre: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    edad: 150,
    telefono: "(232)545-6483",
    direccion: "1234 Canvile Street, Esvazark, NY 10001",
    ciudad: "Esvazark",
    codigoPostal: "10001",
    registrarId: 123512,
  },
  {
    id: 7,
    nombre: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    edad: 44,
    telefono: "(543)124-0123",
    direccion: "22215 Super Street, Everting, ZO 515234",
    ciudad: "Evertin",
    codigoPostal: "51523",
    registrarId: 123512,
  },
  {
    id: 8,
    nombre: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    edad: 36,
    telefono: "(222)444-5555",
    direccion: "4123 Ever Blvd, Wentington, AD 142213",
    ciudad: "Esteras",
    codigoPostal: "44215",
    registrarId: 512315,
  },
  {
    id: 9,
    nombre: "Harvey Roxie",
    email: "harveyroxie@gmail.com",
    edad: 65,
    telefono: "(444)555-6239",
    direccion: "51234 Avery Street, Cantory, ND 212412",
    ciudad: "Colunza",
    codigoPostal: "111234",
    registrarId: 928397,
  },
  {
    id: 10,
    nombre: "Enteri Redack",
    email: "enteriredack@gmail.com",
    edad: 42,
    telefono: "(222)444-5555",
    direccion: "4123 Easer Blvd, Wentington, AD 142213",
    ciudad: "Esteras",
    codigoPostal: "44215",
    registrarId: 533215,
  },
  {
    id: 11,
    nombre: "Steve Goodman",
    email: "stevegoodmane@gmail.com",
    edad: 11,
    telefono: "(444)555-6239",
    direccion: "51234 Fiveton Street, CunFory, ND 212412",
    ciudad: "Colunza",
    codigoPostal: "1234",
    registrarId: 92197,
  },
];

export const mockDataInvoices = [
  {
    id: 1,
    nombre: "Jon Snow",
    email: "jonsnow@gmail.com",
    costo: "21.24",
    telefono: "(665)121-5454",
    fecha: "03/12/2022",
  },
  {
    id: 2,
    nombre: "Cersei Lannister",
    email: "cerseilannister@gmail.com",
    costo: "1.24",
    telefono: "(421)314-2288",
    fecha: "06/15/2021",
  },
  {
    id: 3,
    nombre: "Jaime Lannister",
    email: "jaimelannister@gmail.com",
    costo: "11.24",
    telefono: "(422)982-6739",
    fecha: "05/02/2022",
  },
  {
    id: 4,
    nombre: "Anya Stark",
    email: "anyastark@gmail.com",
    costo: "80.55",
    telefono: "(921)425-6742",
    fecha: "03/21/2022",
  },
  {
    id: 5,
    nombre: "Daenerys Targaryen",
    email: "daenerystargaryen@gmail.com",
    costo: "1.24",
    telefono: "(421)445-1189",
    fecha: "01/12/2021",
  },
  {
    id: 6,
    nombre: "Ever Melisandre",
    email: "evermelisandre@gmail.com",
    costo: "63.12",
    telefono: "(232)545-6483",
    fecha: "11/02/2022",
  },
  {
    id: 7,
    nombre: "Ferrara Clifford",
    email: "ferraraclifford@gmail.com",
    costo: "52.42",
    telefono: "(543)124-0123",
    fecha: "02/11/2022",
  },
  {
    id: 8,
    nombre: "Rossini Frances",
    email: "rossinifrances@gmail.com",
    costo: "21.24",
    telefono: "(222)444-5555",
    fecha: "05/02/2021",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "johndoe",
    fecha: "2021-09-01",
    costo: "43.95",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    fecha: "2022-04-01",
    costo: "133.45",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    fecha: "2021-09-01",
    costo: "43.95",
  },
  {
    txId: "51034szv",
    user: "goodmanave",
    fecha: "2022-11-05",
    costo: "200.95",
  },
  {
    txId: "0a123sb",
    user: "stevebower",
    fecha: "2022-11-02",
    costo: "13.55",
  },
  {
    txId: "01e4dsa",
    user: "aberdohnny",
    fecha: "2021-09-01",
    costo: "43.95",
  },
  {
    txId: "120s51a",
    user: "wootzifer",
    fecha: "2019-04-15",
    costo: "24.20",
  },
  {
    txId: "0315dsaa",
    user: "jackdower",
    fecha: "2022-04-01",
    costo: "133.45",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 55,
    "hot dogColor": "hsl(307, 70%, 50%)",
    burger: 28,
    burgerColor: "hsl(111, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(273, 70%, 50%)",
    donut: 29,
    donutColor: "hsl(275, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 109,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 23,
    burgerColor: "hsl(96, 70%, 50%)",
    kebab: 34,
    kebabColor: "hsl(106, 70%, 50%)",
    donut: 152,
    donutColor: "hsl(256, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 133,
    "hot dogColor": "hsl(257, 70%, 50%)",
    burger: 52,
    burgerColor: "hsl(326, 70%, 50%)",
    kebab: 43,
    kebabColor: "hsl(110, 70%, 50%)",
    donut: 83,
    donutColor: "hsl(9, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 81,
    "hot dogColor": "hsl(190, 70%, 50%)",
    burger: 80,
    burgerColor: "hsl(325, 70%, 50%)",
    kebab: 112,
    kebabColor: "hsl(54, 70%, 50%)",
    donut: 35,
    donutColor: "hsl(285, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 66,
    "hot dogColor": "hsl(208, 70%, 50%)",
    burger: 111,
    burgerColor: "hsl(334, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(182, 70%, 50%)",
    donut: 18,
    donutColor: "hsl(76, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 80,
    "hot dogColor": "hsl(87, 70%, 50%)",
    burger: 47,
    burgerColor: "hsl(141, 70%, 50%)",
    kebab: 158,
    kebabColor: "hsl(224, 70%, 50%)",
    donut: 49,
    donutColor: "hsl(274, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
  {
    id: "make",
    label: "make",
    value: 170,
    color: "hsl(162, 70%, 50%)",
  },
  {
    id: "go",
    label: "go",
    value: 322,
    color: "hsl(291, 70%, 50%)",
  },
  {
    id: "lisp",
    label: "lisp",
    value: 503,
    color: "hsl(229, 70%, 50%)",
  },
  {
    id: "scala",
    label: "scala",
    value: 584,
    color: "hsl(344, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
      {
        x: "boat",
        y: 36,
      },
      {
        x: "train",
        y: 216,
      },
      {
        x: "subway",
        y: 35,
      },
      {
        x: "bus",
        y: 236,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 232,
      },
      {
        x: "bicycle",
        y: 281,
      },
      {
        x: "horse",
        y: 1,
      },
      {
        x: "skateboard",
        y: 35,
      },
      {
        x: "others",
        y: 14,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 270,
      },
      {
        x: "train",
        y: 9,
      },
      {
        x: "subway",
        y: 75,
      },
      {
        x: "bus",
        y: 175,
      },
      {
        x: "car",
        y: 33,
      },
      {
        x: "moto",
        y: 189,
      },
      {
        x: "bicycle",
        y: 97,
      },
      {
        x: "horse",
        y: 87,
      },
      {
        x: "skateboard",
        y: 299,
      },
      {
        x: "others",
        y: 251,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      {
        x: "boat",
        y: 91,
      },
      {
        x: "train",
        y: 190,
      },
      {
        x: "subway",
        y: 211,
      },
      {
        x: "bus",
        y: 152,
      },
      {
        x: "car",
        y: 189,
      },
      {
        x: "moto",
        y: 152,
      },
      {
        x: "bicycle",
        y: 8,
      },
      {
        x: "horse",
        y: 197,
      },
      {
        x: "skateboard",
        y: 107,
      },
      {
        x: "others",
        y: 170,
      },
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
  {
    id: "AGO",
    value: 949905,
  },
  {
    id: "ALB",
    value: 329910,
  },
  {
    id: "ARE",
    value: 675484,
  },
  {
    id: "ARG",
    value: 432239,
  },
  {
    id: "ARM",
    value: 288305,
  },
  {
    id: "ATA",
    value: 415648,
  },
  {
    id: "ATF",
    value: 665159,
  },
  {
    id: "AUT",
    value: 798526,
  },
  {
    id: "AZE",
    value: 481678,
  },
  {
    id: "BDI",
    value: 496457,
  },
  {
    id: "BEL",
    value: 252276,
  },
  {
    id: "BEN",
    value: 440315,
  },
  {
    id: "BFA",
    value: 343752,
  },
  {
    id: "BGD",
    value: 920203,
  },
  {
    id: "BGR",
    value: 261196,
  },
  {
    id: "BHS",
    value: 421551,
  },
  {
    id: "BIH",
    value: 974745,
  },
  {
    id: "BLR",
    value: 349288,
  },
  {
    id: "BLZ",
    value: 305983,
  },
  {
    id: "BOL",
    value: 430840,
  },
  {
    id: "BRN",
    value: 345666,
  },
  {
    id: "BTN",
    value: 649678,
  },
  {
    id: "BWA",
    value: 319392,
  },
  {
    id: "CAF",
    value: 722549,
  },
  {
    id: "CAN",
    value: 332843,
  },
  {
    id: "CHE",
    value: 122159,
  },
  {
    id: "CHL",
    value: 811736,
  },
  {
    id: "CHN",
    value: 593604,
  },
  {
    id: "CIV",
    value: 143219,
  },
  {
    id: "CMR",
    value: 630627,
  },
  {
    id: "COG",
    value: 498556,
  },
  {
    id: "COL",
    value: 660527,
  },
  {
    id: "CRI",
    value: 60262,
  },
  {
    id: "CUB",
    value: 177870,
  },
  {
    id: "-99",
    value: 463208,
  },
  {
    id: "CYP",
    value: 945909,
  },
  {
    id: "CZE",
    value: 500109,
  },
  {
    id: "DEU",
    value: 63345,
  },
  {
    id: "DJI",
    value: 634523,
  },
  {
    id: "DNK",
    value: 731068,
  },
  {
    id: "DOM",
    value: 262538,
  },
  {
    id: "DZA",
    value: 760695,
  },
  {
    id: "ECU",
    value: 301263,
  },
  {
    id: "EGY",
    value: 148475,
  },
  {
    id: "ERI",
    value: 939504,
  },
  {
    id: "ESP",
    value: 706050,
  },
  {
    id: "EST",
    value: 977015,
  },
  {
    id: "ETH",
    value: 461734,
  },
  {
    id: "FIN",
    value: 22800,
  },
  {
    id: "FJI",
    value: 18985,
  },
  {
    id: "FLK",
    value: 64986,
  },
  {
    id: "FRA",
    value: 447457,
  },
  {
    id: "GAB",
    value: 669675,
  },
  {
    id: "GBR",
    value: 757120,
  },
  {
    id: "GEO",
    value: 158702,
  },
  {
    id: "GHA",
    value: 893180,
  },
  {
    id: "GIN",
    value: 877288,
  },
  {
    id: "GMB",
    value: 724530,
  },
  {
    id: "GNB",
    value: 387753,
  },
  {
    id: "GNQ",
    value: 706118,
  },
  {
    id: "GRC",
    value: 377796,
  },
  {
    id: "GTM",
    value: 66890,
  },
  {
    id: "GUY",
    value: 719300,
  },
  {
    id: "HND",
    value: 739590,
  },
  {
    id: "HRV",
    value: 929467,
  },
  {
    id: "HTI",
    value: 538961,
  },
  {
    id: "HUN",
    value: 146095,
  },
  {
    id: "IDN",
    value: 490681,
  },
  {
    id: "IND",
    value: 549818,
  },
  {
    id: "IRL",
    value: 630163,
  },
  {
    id: "IRN",
    value: 596921,
  },
  {
    id: "IRQ",
    value: 767023,
  },
  {
    id: "ISL",
    value: 478682,
  },
  {
    id: "ISR",
    value: 963688,
  },
  {
    id: "ITA",
    value: 393089,
  },
  {
    id: "JAM",
    value: 83173,
  },
  {
    id: "JOR",
    value: 52005,
  },
  {
    id: "JPN",
    value: 199174,
  },
  {
    id: "KAZ",
    value: 181424,
  },
  {
    id: "KEN",
    value: 60946,
  },
  {
    id: "KGZ",
    value: 432478,
  },
  {
    id: "KHM",
    value: 254461,
  },
  {
    id: "OSA",
    value: 942447,
  },
  {
    id: "KWT",
    value: 414413,
  },
  {
    id: "LAO",
    value: 448339,
  },
  {
    id: "LBN",
    value: 620090,
  },
  {
    id: "LBR",
    value: 435950,
  },
  {
    id: "LBY",
    value: 75091,
  },
  {
    id: "LKA",
    value: 595124,
  },
  {
    id: "LSO",
    value: 483524,
  },
  {
    id: "LTU",
    value: 867357,
  },
  {
    id: "LUX",
    value: 689172,
  },
  {
    id: "LVA",
    value: 742980,
  },
  {
    id: "MAR",
    value: 236538,
  },
  {
    id: "MDA",
    value: 926836,
  },
  {
    id: "MDG",
    value: 840840,
  },
  {
    id: "MEX",
    value: 353910,
  },
  {
    id: "MKD",
    value: 505842,
  },
  {
    id: "MLI",
    value: 286082,
  },
  {
    id: "MMR",
    value: 915544,
  },
  {
    id: "MNE",
    value: 609500,
  },
  {
    id: "MNG",
    value: 410428,
  },
  {
    id: "MOZ",
    value: 32868,
  },
  {
    id: "MRT",
    value: 375671,
  },
  {
    id: "MWI",
    value: 591935,
  },
  {
    id: "MYS",
    value: 991644,
  },
  {
    id: "NAM",
    value: 701897,
  },
  {
    id: "NCL",
    value: 144098,
  },
  {
    id: "NER",
    value: 312944,
  },
  {
    id: "NGA",
    value: 862877,
  },
  {
    id: "NIC",
    value: 90831,
  },
  {
    id: "NLD",
    value: 281879,
  },
  {
    id: "NOR",
    value: 224537,
  },
  {
    id: "NPL",
    value: 322331,
  },
  {
    id: "NZL",
    value: 86615,
  },
  {
    id: "OMN",
    value: 707881,
  },
  {
    id: "PAK",
    value: 158577,
  },
  {
    id: "PAN",
    value: 738579,
  },
  {
    id: "PER",
    value: 248751,
  },
  {
    id: "PHL",
    value: 557292,
  },
  {
    id: "PNG",
    value: 516874,
  },
  {
    id: "POL",
    value: 682137,
  },
  {
    id: "PRI",
    value: 957399,
  },
  {
    id: "PRT",
    value: 846430,
  },
  {
    id: "PRY",
    value: 720555,
  },
  {
    id: "QAT",
    value: 478726,
  },
  {
    id: "ROU",
    value: 259318,
  },
  {
    id: "RUS",
    value: 268735,
  },
  {
    id: "RWA",
    value: 136781,
  },
  {
    id: "ESH",
    value: 151957,
  },
  {
    id: "SAU",
    value: 111821,
  },
  {
    id: "SDN",
    value: 927112,
  },
  {
    id: "SDS",
    value: 966473,
  },
  {
    id: "SEN",
    value: 158085,
  },
  {
    id: "SLB",
    value: 178389,
  },
  {
    id: "SLE",
    value: 528433,
  },
  {
    id: "SLV",
    value: 353467,
  },
  {
    id: "ABV",
    value: 251,
  },
  {
    id: "SOM",
    value: 445243,
  },
  {
    id: "SRB",
    value: 202402,
  },
  {
    id: "SUR",
    value: 972121,
  },
  {
    id: "SVK",
    value: 319923,
  },
  {
    id: "SVN",
    value: 728766,
  },
  {
    id: "SWZ",
    value: 379669,
  },
  {
    id: "SYR",
    value: 16221,
  },
  {
    id: "TCD",
    value: 101273,
  },
  {
    id: "TGO",
    value: 498411,
  },
  {
    id: "THA",
    value: 506906,
  },
  {
    id: "TJK",
    value: 613093,
  },
  {
    id: "TKM",
    value: 327016,
  },
  {
    id: "TLS",
    value: 607972,
  },
  {
    id: "TTO",
    value: 936365,
  },
  {
    id: "TUN",
    value: 898416,
  },
  {
    id: "TUR",
    value: 237783,
  },
  {
    id: "TWN",
    value: 878213,
  },
  {
    id: "TZA",
    value: 442174,
  },
  {
    id: "UGA",
    value: 720710,
  },
  {
    id: "UKR",
    value: 74172,
  },
  {
    id: "URY",
    value: 753177,
  },
  {
    id: "USA",
    value: 658725,
  },
  {
    id: "UZB",
    value: 550313,
  },
  {
    id: "VEN",
    value: 707492,
  },
  {
    id: "VNM",
    value: 538907,
  },
  {
    id: "VUT",
    value: 650646,
  },
  {
    id: "PSE",
    value: 476078,
  },
  {
    id: "YEM",
    value: 957751,
  },
  {
    id: "ZAF",
    value: 836949,
  },
  {
    id: "ZMB",
    value: 714503,
  },
  {
    id: "ZWE",
    value: 405217,
  },
  {
    id: "KOR",
    value: 171135,
  },
];

export const mockDataInbox = [
  {
    id: 1,
    autor: "Fernando Robles",
    asunto: "Invitacion a Hackaton 2023...",
    recibido: "15 Mar"
  },
  {
    id: 2,
    autor: "Arturo Sanchez",
    asunto: "Promociones para este 10 de Mayo...",
    recibido: "14 Abril"
  },
  {
    id: 3,
    autor: "Laura Arambarri",
    asunto: "Revision de proyecto...",
    recibido: "30 Abril"
  },
  {
    id: 4,
    autor: "Isaias Alvarez",
    asunto: "Envio de solicitud para tramite..",
    recibido: "17 Mayo"
  },
  {
    id: 5,
    autor: "Isaias Alvarez",
    asunto: "Envio de solicitud para tramite..",
    recibido: "17 Mayo"
  },
  {
    id: 6,
    autor: "Isaias Alvarez",
    asunto: "Envio de solicitud para tramite..",
    recibido: "17 Mayo"
  },
  {
    id: 7,
    autor: "Isaias Alvarez",
    asunto: "Envio de solicitud para tramite..",
    recibido: "17 Mayo"
  },
  {
    id: 8,
    autor: "Isaias Alvarez",
    asunto: "Envio de solicitud para tramite..",
    recibido: "17 Mayo"
  },  {
    id: 9,
    autor: "Isaias Alvarez",
    asunto: "Envio de solicitud para tramite..",
    recibido: "17 Mayo"
  },  {
    id: 10,
    autor: "Isaias Alvarez",
    asunto: "Envio de solicitud para tramite..",
    recibido: "17 Mayo"
  },  {
    id: 11,
    autor: "Isaias Alvarez",
    asunto: "Envio de solicitud para tramite..",
    recibido: "17 Mayo"
  },  {
    id: 12,
    autor: "Isaias Alvarez",
    asunto: "Envio de solicitud para tramite..",
    recibido: "17 Mayo"
  },  {
    id: 13,
    autor: "Isaias Alvarez",
    asunto: "Envio de solicitud para tramite..",
    recibido: "17 Mayo"
  },  {
    id: 14,
    autor: "Isaias Alvarez",
    asunto: "Envio de solicitud para tramite..",
    recibido: "17 Mayo"
  },  {
    id: 15,
    autor: "Isaias Alvarez",
    asunto: "Envio de solicitud para tramite..",
    recibido: "17 Mayo"
  },
  
];


export const bandejaMenu = [
  {campo:"Inbox", icono: <FolderIcon/>},
  {campo:"Destacado", icono: <StarIcon/>},
  {campo:"Importante", icono: <NotificationImportantIcon/>},
  {campo:"Borradores", icono: <DriveFileRenameOutlineIcon/>},
  {campo:"Enviados", icono: <MarkEmailReadIcon/>},
  {campo:"Papelera", icono: <DeleteIcon/>},
  {campo:"Spam", icono: <ErrorOutlineIcon/>},
]

export const etiquetas = [
  {campo:"Social", icono: <FolderIcon/>},
  {campo:"Promociones", icono: <FolderIcon/>},
  {campo:"Actualizaciones", icono: <FolderIcon/>},
  {campo:"Negocios", icono: <FolderIcon/>},
  {campo:"Finanzas", icono: <FolderIcon/>},
]

export const cards = [
  {title: "Diseño web", img: "folder.png"},
  {title: "Proyectos", img: "folder.png"},
  {title: "Documentacion", img: "doc.png"},
  {title: "Archivos PDF", img: "pdf.png"}
]

export const browseFiles = [
  {title: "Propuesta", img: "folder.png"},
  {title: "Pruebas", img: "folder.png"},
  {title: "Presentacion", img: "doc.png"},
  {title: "Entregables", img: "zip-file.png"},
  {title: "Memoria 2020", img: "zip-file.png"},
  {title: "IMG_890467", img: "png.png"},
  {title: "IMG_960421", img: "png.png"},
  {title: "IMG_594072", img: "png.png"}

]

export const gruposData = [
  {nombre: "Autos y mas", img:'stock-1.jpg'},
  {nombre: "Experiencias laborales", img:'stock-2.jpg'},
  {nombre: "Reclutadores", img:'stock-3.jpg'},
  {nombre: "Algoritmia y programacion", img:'stock-4.jpg'},
  {nombre: "Electrónica", img:'stock-1.jpg'},
  {nombre: "Refactoring", img:'stock-2.jpg'},
  {nombre: "Programación Ruby", img:'stock-4.jpg'},
  {nombre: "Node JS", img:'stock-3.jpg'},
]

export const conexionesData = [
  {nombre: "Hilario Sanchez", img:'user-2.png'},
  {nombre: "Patricia Huerta", img:'user-1.png'},
  {nombre: "Sergio Cuenca", img:'user-4.png'},
  {nombre: "Miriam Rodriguez", img:'user-3.png'},
  {nombre: "Pedro Loyola", img:'user-5.png'},
  {nombre: "Lucas Hoost", img:'user-6.png'},
  {nombre: "Hiram Castillo", img:'user-7.png'},
  {nombre: "Daniel Mendoza", img:'user-8.png'},
]

export const miDispositivoArchivos = [
  {campo:"Todo", icono: <FolderIcon/>},
  {campo:"Mis dispositivos", icono: <TvIcon/>},
  {campo:"Recientes", icono: <AccessTimeIcon/>},
  {campo:"Importante", icono: <StarIcon/>},
  {campo:"Eliminados", icono: <DeleteIcon/>},
]

export const libreriaArchivos = [
  {campo:"Documentos", icono: <TopicIcon/>},
  {campo:"Imagenes", icono: <ImageIcon/>},
  {campo:"Videos", icono: <OndemandVideoIcon/>},
  {campo:"Audio", icono: <AudioFileIcon/>},
]

export const cardsArchivos = [
  {title: "Diseño web", img: "folder.png"},
  {title: "Proyectos", img: "folder.png"},
  {title: "Documentacion", img: "doc.png"},
  {title: "Archivos PDF", img: "pdf.png"}
]

export const browseFilesArchivos = [
  {title: "Propuesta", img: "folder.png"},
  {title: "Pruebas", img: "folder.png"},
  {title: "Presentacion", img: "doc.png"},
  {title: "Entregables", img: "zip-file.png"},
  {title: "Memoria 2020", img: "zip-file.png"},
  {title: "IMG_890467", img: "png.png"},
  {title: "IMG_960421", img: "png.png"},
  {title: "IMG_594072", img: "png.png"}

];

const tabItems1 = [
  <ChatList name="David" msg="Te he estado esperando..." time="13:25" img="user-1.png" />,
  <ChatList name="Hilario" msg="Te he estado fghj..." time="13:25" img="user-2.png"/>,
  <ChatList name="Ernesto" msg="Te he estado yeas..." time="13:25" img="user-3.png"/>,
];
const tabItems2 = [
   <ChatList name="Mauricio" msg="Quien eres tu..." time="13:50" img="user-4.png"/>,
   <ChatList name="Cesar" msg="Te he estado si..." time="13:50" img="user-5.png"/>,
   <ChatList name="Alejandro" msg="Te he estado yeas..." time="13:50" img="user-6.png"/>,
];
const tabItems3 = [
   <ChatList name="Leonardo" msg="Te he estado esperando..." time="21:25" img="user-7.png"/>,
   <ChatList name="Nancy" msg="Te voy a decir..." time="21:25" img="user-8.png"/>,
   <ChatList name="Maria" msg="Me lo traes..." time="21:25" img="user-1.png"/>,
];

export const allTabItems = [tabItems1, tabItems2, tabItems3];

const infoBasica = [
  {campo: "Nombre",valor: "Fernando Robles"},
  {campo: "Nombre de usuario", valor: "ferroblesg"},
  {campo: "Correo electrónico",valor: "fernando@correo.com"},
  {campo: "Teléfono",valor: "55-77-88-99-00"},
];

const infoPreferencias = [
  {campo: "Idioma",valor: "Español (LatinoAmérica)"},
  {campo: "Formato de Fecha",valor: "DD-MM-AAAA"},
  {campo: "Zona horaria",valor: "Ciudad de México, CDMX, México (GMT-6)"},
];

const infoMenu = [
  {campo:"Información personal", icono: <AccountBoxIcon/>},
  {campo:"Notificaciones", icono: <NotificationsIcon/>},
  {campo:"Actividad de cuenta", icono: <DatasetIcon/>},
  {campo:"Configuración de cuenta", icono: <SettingsIcon/>},
]

export const infoPerfil = [infoMenu, infoBasica, infoPreferencias];
