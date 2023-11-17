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
        imgUrl:
          "https://static.toiimg.com/thumb/msid-85096661,width-1280,resizemode-4/85096661.jpg",
      },
    ],
    ticket_info: {
      available_tickets: 5000,
      ticket_types: ["1-day-pass", "2-days-pass"],
      ticket_prices: {
        "1-day-pass": "$30.00",
        "2-days-pass": "$50.00",
      },
    },
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
