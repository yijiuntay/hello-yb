// app/constituencies/data.ts

export type Candidate = {
  name: string;
  party: string;
  imageUrl: string;
};

export type Constituency = {
  code: string;
  name: string;
  candidates: Candidate[];
};

// Central object for party logos to avoid repetition and ensure consistency
const partyLogos = {
  BN: 'https://upload.wikimedia.org/wikipedia/ms/thumb/b/b4/Barisan_Nasional.png/250px-Barisan_Nasional.png',
  WARISAN: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/61/Parti_Warisan_logo.png/250px-Parti_Warisan_logo.png',
  PN: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Logo_Perikatan_Nasional.svg',
  PBS: 'https://upload.wikimedia.org/wikipedia/ms/3/3a/Pbslogo.JPG',
  LDP: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Liberal_Democratic_Party_Logo.svg/250px-Liberal_Democratic_Party_Logo.svg.png',
  PCS: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Love_Sabah_Party_Flag.svg/250px-Love_Sabah_Party_Flag.svg.png',
  BEBAS: 'https://placehold.co/100x100/cccccc/000000?text=BEBAS', 
};

const sabahElectionData: Constituency[] = [
  // N.01 Banggi (7-cornered fight)
  {
    code: "N.01",
    name: "Banggi",
    candidates: [
      { name: "Mohammad Mohamarin", party: "BN", imageUrl: partyLogos.BN },
      { name: "Kamarlin Ombi", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Mohd Reduan Kabun", party: "PCS", imageUrl: partyLogos.PCS },
      { name: "Miasin Nusiri", party: "BEBAS", imageUrl: partyLogos.BEBAS },
      { name: "Salbin Muksin", party: "BEBAS", imageUrl: partyLogos.BEBAS },
      { name: "Amirul Tamrin", party: "BEBAS", imageUrl: partyLogos.BEBAS },
      { name: "Kamlun Pusun", party: "BEBAS", imageUrl: partyLogos.BEBAS },
    ]
  },
  // N.02 Bengkoka (4-cornered fight)
  {
    code: "N.02",
    name: "Bengkoka",
    candidates: [
      { name: "Harun Durabi", party: "BN", imageUrl: partyLogos.BN },
      { name: "Unding Tumpong", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Maklin Masiau", party: "PBS", imageUrl: partyLogos.PBS },
      { name: "Junsim Rumunzing", party: "LDP", imageUrl: partyLogos.LDP },
    ]
  },
  // N.03 Pitas (5-cornered fight) - Corrected from N.06
  {
    code: "N.03",
    name: "Pitas",
    candidates: [
      { name: "Ruddy Awah", party: "PN", imageUrl: partyLogos.PN },
      { name: "Sufian Abd Karim", party: "BN", imageUrl: partyLogos.BN },
      { name: "Sh. Azman Sh. Along", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Ramjit Kitung", party: "PCS", imageUrl: partyLogos.PCS },
      { name: "Ilasam Nur", party: "BEBAS", imageUrl: partyLogos.BEBAS },
    ]
  },
  // N.19 Likas (5-cornered fight)
  {
    code: "N.19",
    name: "Likas",
    candidates: [
      { name: "Tan Lee Fatt", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Chang Kee Ying", party: "PN", imageUrl: partyLogos.PN },
      { name: "Sim Fui", party: "LDP", imageUrl: partyLogos.LDP },
      { name: "Chia Chui Vun", party: "PCS", imageUrl: partyLogos.PCS },
      { name: "Daniel Isaac Ho", party: "BEBAS", imageUrl: partyLogos.BEBAS },
    ]
  },
  // N.20 Api-Api (9-cornered fight)
  {
    code: "N.20",
    name: "Api-Api",
    candidates: [
      { name: "Christina Liew", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Yee Tsai Yiew", party: "PN", imageUrl: partyLogos.PN },
      { name: "Pang Yuk Ming", party: "LDP", imageUrl: partyLogos.LDP },
      { name: "Chong Tze Kiun", party: "PCS", imageUrl: partyLogos.PCS },
      // Other candidates grouped for brevity if needed, but listed here
      { name: "Lo Yau Foh", party: "BEBAS", imageUrl: partyLogos.BEBAS },
      { name: "Ng Chun Sua", party: "BEBAS", imageUrl: partyLogos.BEBAS },
      { name: "Sim Sie Hong", party: "BEBAS", imageUrl: partyLogos.BEBAS },
    ]
  },
  // N.21 Luyang (4-cornered fight)
  {
    code: "N.21",
    name: "Luyang",
    candidates: [
      { name: "Phoong Jin Zhe", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Gee Tien Siong", party: "PN", imageUrl: partyLogos.PN },
      { name: "Anthony Kiob", party: "LDP", imageUrl: partyLogos.LDP },
      { name: "Wilson Chang", party: "PCS", imageUrl: partyLogos.PCS },
    ]
  },
  // N.25 Kapayan (5-cornered fight)
  {
    code: "N.25",
    name: "Kapayan",
    candidates: [
      { name: "Jannie Lasimbang", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Lu Yen Tung", party: "BN", imageUrl: partyLogos.BN },
      { name: "Edwin Bosi", party: "PN", imageUrl: partyLogos.PN },
      { name: "Yong Vui Leong", party: "LDP", imageUrl: partyLogos.LDP },
      { name: "Chua Khen Ee", party: "PCS", imageUrl: partyLogos.PCS },
    ]
  },
  // N.29 Moyog (6-cornered fight)
  {
    code: "N.29",
    name: "Moyog",
    candidates: [
      { name: "Darell Leiking", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Joseph Pairin Kitingan", party: "PN", imageUrl: partyLogos.PN },
      { name: "John Chryso Masabal", party: "LDP", imageUrl: partyLogos.LDP },
      { name: "William Sampil", party: "PBS", imageUrl: partyLogos.PBS },
      { name: "Vinson Loijon", party: "PCS", imageUrl: partyLogos.PCS },
      { name: "Marcelino Botitus", party: "BEBAS", imageUrl: partyLogos.BEBAS },
    ]
  },
  // N.43 Karamunting (5-cornered fight)
  {
    code: "N.43",
    name: "Karamunting",
    candidates: [
      { name: "Hiew Vun Zin", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Kong Nyuk Thou", party: "BN", imageUrl: partyLogos.BN },
      { name: "Loo R Ee", party: "PCS", imageUrl: partyLogos.PCS },
      { name: "Adam Chal", party: "BEBAS", imageUrl: partyLogos.BEBAS },
      { name: "Yew Kuan Sing", party: "BEBAS", imageUrl: partyLogos.BEBAS },
    ]
  },
  // N.55 Lamag (5-cornered fight)
  {
    code: "N.55",
    name: "Lamag",
    candidates: [
      { name: "Bung Moktar Radin", party: "BN", imageUrl: partyLogos.BN },
      { name: "Mohd Ismail Ayob", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Sairin Abdul Rahman", party: "PCS", imageUrl: partyLogos.PCS },
      { name: "Razmnan Mayah", party: "BEBAS", imageUrl: partyLogos.BEBAS },
      { name: "Junny @ Karuak Abdullah", party: "BEBAS", imageUrl: partyLogos.BEBAS },
    ]
  },
  // N.58 Sulabayan (5-cornered fight)
  {
    code: "N.58",
    name: "Sulabayan",
    candidates: [
      { name: "Jaujan Sambakong", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Abdul Manan Indanan", party: "BN", imageUrl: partyLogos.BN },
      { name: "Alahuddin Damsah", party: "PCS", imageUrl: partyLogos.PCS },
      { name: "Kulli Maralam", party: "BEBAS", imageUrl: partyLogos.BEBAS },
      { name: "Mohasidin Pigan", party: "BEBAS", imageUrl: partyLogos.BEBAS },
    ]
  },
  // N.60 Senallang (5-cornered fight)
  {
    code: "N.60",
    name: "Senallang",
    candidates: [
      { name: "Shafie Apdal", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Norazman Utoh Nain", party: "PN", imageUrl: partyLogos.PN },
      { name: "Madjalis Lais", party: "PCS", imageUrl: partyLogos.PCS },
      { name: "Mohammad Ramzan Abdul Wahab", party: "BEBAS", imageUrl: partyLogos.BEBAS },
      { name: "Hassan Mastal", party: "BEBAS", imageUrl: partyLogos.BEBAS },
    ]
  },
  // N.66 Kunak (5-cornered fight)
  {
    code: "N.66",
    name: "Kunak",
    candidates: [
      { name: "Norazlinah Arif", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Halid Harun", party: "BN", imageUrl: partyLogos.BN },
      { name: "Utoh Joik", party: "PCS", imageUrl: partyLogos.PCS },
      { name: "Nuraini Abdul Rahman", party: "BEBAS", imageUrl: partyLogos.BEBAS },
      { name: "Moh. Ramli Abd. Kari", party: "LDP", imageUrl: partyLogos.LDP },
    ]
  },
  // N.70 Kukusan (5-cornered fight)
  {
    code: "N.70",
    name: "Kukusan",
    candidates: [
      { name: "Rina Jainal", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Chaya Sulaiman", party: "BN", imageUrl: partyLogos.BN },
      { name: "Ismail Idris", party: "PCS", imageUrl: partyLogos.PCS },
      { name: "Wong Jin Soon", party: "LDP", imageUrl: partyLogos.LDP },
      { name: "Lee Boon King", party: "BEBAS", imageUrl: partyLogos.BEBAS },
    ]
  },
  // N.73 Sebatik (7-cornered fight)
  {
    code: "N.73",
    name: "Sebatik",
    candidates: [
      { name: "Hassan A Gani Pg Amir", party: "WARISAN", imageUrl: partyLogos.WARISAN },
      { name: "Abd Muis Picho", party: "BN", imageUrl: partyLogos.BN },
      { name: "Daud Yusof", party: "PN", imageUrl: partyLogos.PN },
      { name: "Sitigal TBC", party: "PCS", imageUrl: partyLogos.PCS },
      { name: "Abdul Ghafur OT", party: "BEBAS", imageUrl: partyLogos.BEBAS },
      { name: "Rosli Kataran", party: "BEBAS", imageUrl: partyLogos.BEBAS },
    ]
  },
];

export default sabahElectionData;