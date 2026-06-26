import point from "../../public/assets/homepage/icons/point.svg";
import list from "../../public/assets/homepage/icons/list.svg";
import keys from "../../public/assets/homepage/icons/keys.svg";
import hands from "../../public/assets/homepage/icons/hands.svg";

import ImagePhoto from "/public/assets/realizations/house.webp";

import house1 from "../../public/assets/adverts/houses/house_photo1.webp";
import house2 from "../../public/assets/adverts/houses/house_photo2.webp";
import house3 from "../../public/assets/adverts/houses/house_photo3.webp";
import house4 from "../../public/assets/adverts/houses/house_photo4.webp";
import flat1 from "../../public/assets/adverts/flats/flat1.webp";
import flat2 from "../../public/assets/adverts/flats/flat2.webp";
import flat3 from "../../public/assets/adverts/flats/flat3.webp";

export const Icons = [
  { id: 1, icon_url: point, icon_description: "LOREM IPSUM" },
  { id: 2, icon_url: list, icon_description: "LOREM IPSUM" },
  { id: 3, icon_url: keys, icon_description: "LOREM IPSUM" },
  { id: 4, icon_url: hands, icon_description: "LOREM IPSUM" },
];

export const MenuItems = [
  { site_url: "/", site_name: "Strona główna" },
  { site_url: "/realizacje", site_name: "Nasze realizacje" },
  { site_url: "/mieszkania", site_name: "Mieszkania" },
  { site_url: "/domy", site_name: "Domy" },
  { site_url: "/garaze", site_name: "Garaże" },
];

export const Slides = [
  { id: 1, title: "Luksusowa Willa", type: "Dom", image: house1 },
  { id: 2, title: "Nowoczesny Apartament", type: "Mieszkanie", image: flat1 },
  { id: 3, title: "Rezydencja Ogrodowa", type: "Dom", image: house2 },
  { id: 4, title: "Przytulne Studio", type: "Mieszkanie", image: flat2 },
  { id: 5, title: "Klasyczny Segment", type: "Dom", image: house3 },
  { id: 6, title: "Penthouse Widokowy", type: "Mieszkanie", image: flat3 },
  { id: 7, title: "Modern Villa", type: "Dom", image: house4 },
];

export const Realizations = [
  {
    id: 1,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. `,
    ImageUrl: ImagePhoto,
    Location: "Warszawa",
    title: "Lorem ipsum",
  },
  {
    id: 2,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. `,
    ImageUrl: ImagePhoto,
    Location: "Katowice",
    title: "Lorem ipsum",
  },
  {
    id: 3,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. `,
    ImageUrl: ImagePhoto,
    Location: "Kraków",
    title: "Lorem ipsum",
  },
];

export const TimelineData = [
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. In nec lectus a neque congue finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/public/assets/adverts/room.png",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. In nec lectus a neque congue finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/public/assets/adverts/room.png",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. In nec lectus a neque congue finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/public/assets/adverts/room.png",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. In nec lectus a neque congue finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/public/assets/adverts/room.png",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. In nec lectus a neque congue finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/public/assets/adverts/room.png",
  },
  {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est. Suspendisse lectus neque, commodo et dignissim eget, efficitur id risus. Proin efficitur efficitur ornare. In nec lectus a neque congue finibus.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/public/assets/adverts/room.png",
  },
];
