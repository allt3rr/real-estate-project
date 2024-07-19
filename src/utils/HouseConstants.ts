import HouseImage1 from "/public/assets/adverts/houses/house_photo1.webp";
import HouseImage2 from "/public/assets/adverts/houses/house_photo2.webp";
import HouseImage3 from "/public/assets/adverts/houses/house_photo3.webp";
import HouseImage4 from "/public/assets/adverts/houses/house_photo4.webp";

export const initialState = {
  location: "",
  flat: "",
  minMetrics: "",
  maxMetrics: "",
  rooms: "",
};

export const cities = [
  { value: "Katowice", label: "Katowice" },
  { value: "Warszawa", label: "Warszawa" },
  { value: "Kraków", label: "Kraków" },
  { value: "Zabrze", label: "Zabrze" },
  { value: "Gdańsk", label: "Gdańsk" },
  { value: "Szczecin", label: "Szczecin" },
  { value: "Częstochowa", label: "Częstochowa" },
  { value: "Lublin", label: "Lublin" },
  { value: "Zamość", label: "Zamość" },
];

export const flats = [
  { flat: "1" },
  { flat: "2" },
  { flat: "3" },
];

export const rooms = [
  { room: "1" },
  { room: "2" },
  { room: "3" },
  { room: "4" },
  { room: "5" },
  { room: "6" },
  { room: "7" },
  { room: "8" },
];

export const HouseData = [
  {
    id: 1,
    location: "Katowice",
    type: 'Sprzedaż',
    flatNumber: "3",
    roomsAmount: "6",
    metrics: 690,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage2,
  },
  {
    id: 2,
    location: "Warszawa",
    type: 'Sprzedaż',
    flatNumber: "1",
    roomsAmount: "3",
    metrics: 260,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage4,
  },
  {
    id: 3,
    location: "Kraków",
    type: 'Wynajem',
    flatNumber: "1",
    roomsAmount: "5",
    metrics: 580,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage2,
  },
  {
    id: 4,
    location: "Zabrze",
    type: 'Sprzedaż',
    flatNumber: "2",
    roomsAmount: "5",
    metrics: 881,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage2,
  },
  {
    id: 5,
    location: "Łódź",
    type: 'Sprzedaż',
    flatNumber: "3",
    roomsAmount: "7",
    metrics: 831,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage3,
  },
  {
    id: 6,
    location: "Gdańsk",
    type: 'Wynajem',
    flatNumber: "2",
    roomsAmount: "5",
    metrics: 612,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage4,
  },
  {
    id: 7,
    location: "Szczecin",
    type: 'Wynajem',
    flatNumber: "1",
    roomsAmount: "3",
    metrics: 533,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage4,
  },
  {
    id: 8,
    location: "Częstochowa",
    type: 'Wynajem',
    flatNumber: "1",
    roomsAmount: "5",
    metrics: 784,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage2,
  },
  {
    id: 9,
    location: "Lublin",
    type: 'Wynajem',
    flatNumber: "1",
    roomsAmount: "4",
    metrics: 400,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage3,
  },
  {
    id: 10,
    location: "Zamość",
    type: 'Sprzedaż',
    flatNumber: "2",
    roomsAmount: "5",
    metrics: 580,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage2,
  },
  {
    id: 11,
    location: "Katowice",
    type: 'Sprzedaż',
    flatNumber: "2",
    roomsAmount: "3",
    metrics: 674,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage1,
  },
  {
    id: 12,
    location: "Kraków",
    type: 'Wynajem',
    flatNumber: "1",
    roomsAmount: "2",
    metrics: 692,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage1,
  },
  {
    id: 13,
    location: "Warszawa",
    type: 'Wynajem',
    flatNumber: "3",
    roomsAmount: "8",
    metrics: 774,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage2,
  },
  {
    id: 14,
    location: "Katowice",
    type: 'Wynajem',
    flatNumber: "2",
    roomsAmount: "6",
    metrics: 485,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage1,
  },
  {
    id: 15,
    location: "Katowice",
    type: 'Sprzedaż',
    flatNumber: "2",
    roomsAmount: "5",
    metrics: 921,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage3,
  },
  {
    id: 16,
    location: "Lublin",
    type: 'Sprzedaż',
    flatNumber: "1",
    roomsAmount: "3",
    metrics: 651,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage3,
  },
  {
    id: 17,
    location: "Warszawa",
    type: 'Sprzedaż',
    flatNumber: "1",
    roomsAmount: "3",
    metrics: 546,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage1,
  },
  {
    id: 18,
    location: "Zamość",
    type: 'Sprzedaż',
    flatNumber: "2",
    roomsAmount: "7",
    metrics: 440,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: HouseImage3,
  },
];
