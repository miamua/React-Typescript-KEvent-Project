const EVENT = [
  {
    id: 1,
    name: "K-pop Extravaganza 2023",
    date: ["2023-12-01", "2023-12-02"],
    location: "K-pop Arena, Seoul, South Korea",
    organizer: "K-pop Entertainment Group",
    performers: [
      {
        id: 1,
        group: "BTS",
        members: ["RM", "Jin", "Suga", "J-Hope", "Jimin", "V", "Jungkook"],
        schedule: [
          {
            time: "21:00",
            songs: [
              "Dynamite",
              "Butter",
              "Permission to Dance",
              "Boy with Luv",
            ],
          },
        ],
        hall: "Main Stage",
        description:
          "BTS, also known as the Bangtan Boys, is a South Korean boy band formed by Big Hit Entertainment. With their explosive energy and captivating performances, BTS has become a global phenomenon. Comprising members RM, Jin, Suga, J-Hope, Jimin, V, and Jungkook, the group has produced chart-topping hits and has a massive fanbase known as the 'ARMY.' Beyond their musical achievements, BTS has been recognized for their philanthropy and positive influence on a global scale.",
        imgUrl:
          "https://people.com/thmb/sQSl8jHALt3PIvnpVV2uUWxB1ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(599x0:601x2)/BTS_JOIN_LOUIS_VUITTON_AS_HOUSE_AMBASSADORS-a525d86a4d4745dd8ff413cc723c6c7e.jpg",
      },
      {
        id: 2,
        group: "BLACKPINK",
        members: ["Jisoo", "Jennie", "Rosé", "Lisa"],
        schedule: [
          {
            time: "19:15",
            songs: [
              "DDU-DU DDU-DU",
              "Kill This Love",
              "Lovesick Girls",
              "How You Like That",
            ],
          },
        ],
        hall: "Main Stage",
        description:
          "BLACKPINK is a powerhouse girl group that has taken the K-pop scene by storm. Comprising members Jisoo, Jennie, Rosé, and Lisa, BLACKPINK is known for their fierce performances, trendsetting style, and chart-topping hits. Their dynamic stage presence and unique blend of music genres have garnered them a massive global fanbase. With iconic songs like 'DDU-DU DDU-DU' and 'Kill This Love,' BLACKPINK continues to make a significant impact on the music industry.",
        imgUrl:
          "https://images.aftonbladet-cdn.se/v2/images/63e78108-6eda-4b56-9e48-e89740c65286?fit=crop&format=auto&h=1267&q=50&w=1900&s=7ab046913846c19b0ac289e90d4abb4344a21f5d",
      },
      {
        id: 3,
        group: "EXO",
        members: [
          "Xiumin",
          "Suho",
          "Lay",
          "Baekhyun",
          "Chen",
          "Chanyeol",
          "D.O.",
          "Kai",
          "Sehun",
        ],
        schedule: [
          {
            time: "20:00",
            songs: ["Love Shot", "Obsession", "Ko Ko Bop", "Monster"],
          },
        ],
        hall: "Main Stage",
        description:
          "EXO, an abbreviation of 'Exoplanet,' is a chart-topping boy band known for their exceptional vocals and powerful performances. With members Xiumin, Suho, Lay, Baekhyun, Chen, Chanyeol, D.O., Kai, and Sehun, EXO has achieved immense success both in South Korea and internationally. Their diverse discography includes hits like 'Love Shot' and 'Monster,' showcasing their versatility and musical prowess. EXO's dedicated fanbase, known as EXO-L, continues to support the group's achievements.",
        imgUrl:
          "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2021/05/11/1fd3dd62-b205-11eb-93b7-03206dd91175_image_hires_173202.jpg",
      },
      {
        id: 4,
        group: "TWICE",
        members: [
          "Nayeon",
          "Jeongyeon",
          "Momo",
          "Sana",
          "Jihyo",
          "Mina",
          "Dahyun",
          "Chaeyoung",
          "Tzuyu",
        ],
        schedule: [
          {
            time: "18:30",
            songs: ["Feel Special", "Fancy", "Yes or Yes", "Cheer Up"],
          },
        ],
        hall: "Main Stage",
        description:
          "TWICE is a multi-talented girl group known for their infectious energy and catchy tunes. With members Nayeon, Jeongyeon, Momo, Sana, Jihyo, Mina, Dahyun, Chaeyoung, and Tzuyu, TWICE has become a global sensation. Their vibrant performances and relatable lyrics have resonated with fans worldwide. TWICE has consistently delivered chart-topping hits such as 'Feel Special' and 'Yes or Yes,' solidifying their position as one of the leading acts in the K-pop industry.",
        imgUrl:
          "https://static.toiimg.com/thumb/msid-85096661,width-1280,resizemode-4/85096661.jpg",
      },
      {
        id: 5,
        group: "GOT7",
        members: [
          "JB",
          "Mark",
          "Jackson",
          "Jinyoung",
          "Youngjae",
          "BamBam",
          "Yugyeom",
        ],
        schedule: [
          {
            time: "22:30",
            songs: ["Lullaby", "Hard Carry", "Just Right", "You Are"],
          },
        ],
        hall: "Second Stage",
        description:
          "GOT7, a seven-member boy band under JYP Entertainment, has captivated audiences with their diverse talents and magnetic performances. Comprising JB, Mark, Jackson, Jinyoung, Youngjae, BamBam, and Yugyeom, GOT7 has a unique musical style that combines elements of pop, hip-hop, and R&B. With hits like 'Lullaby' and 'Hard Carry,' GOT7 has left an indelible mark on the K-pop landscape, earning them a dedicated fanbase known as 'Ahgase.' Beyond music, the members of GOT7 have pursued individual projects, showcasing their versatility in the entertainment industry.",
        imgUrl:
          "https://6.soompi.io/wp-content/uploads/image/adb69ef77b5f423d831788f54728ac94.jpeg?s=900x600&e=t",
      },
      {
        id: 6,
        group: "Red Velvet",
        members: ["Irene", "Seulgi", "Wendy", "Joy", "Yeri"],
        schedule: [
          {
            time: "17:45",
            songs: ["Psycho", "Red Flavor", "Bad Boy", "Peek-A-Boo"],
          },
        ],
        hall: "Second Stage",
        description:
          "Red Velvet is a trailblazing girl group known for pushing the boundaries of K-pop with their eclectic musical style. Comprising members Irene, Seulgi, Wendy, Joy, and Yeri, Red Velvet has carved a niche for themselves with songs that range from the sultry 'Bad Boy' to the whimsical 'Red Flavor.' The group's versatility extends beyond music, with members actively participating in various aspects of the entertainment industry, including acting and hosting. Red Velvet's impact on the K-pop scene is undeniable, and their dedicated fanbase, 'ReVeluv,' continues to support their artistic endeavors.",
        imgUrl:
          "https://6.soompi.io/wp-content/uploads/image/20230918093109_red-velvet.jpeg?s=900x600&e=t",
      },
    ],

    sponsorship: {
      main_sponsor: "K-pop Fashion House",
      supporting_sponsors: ["Korean Tourism Organization", "K-pop Radio"],
    },
    contact_info: {
      organizer_email: "info@kpopentertainmentgroup.com",
      organizer_phone: "+82-2-1234-5678",
    },
  },
];

export const eventDetail = () => {
  return EVENT;
};

export const listAllActivities = () => {
  return EVENT[0].performers;
};

export const getPerformance = (id) => {
  return EVENT[0].performers.find((performer) => performer.id === id);
};
