import ImageFlatPhoto1 from "/public/assets/adverts/flats/flat1.webp";
import ImageFlatPhoto2 from "/public/assets/adverts/flats/flat2.webp";
import ImageFlatPhoto3 from "/public/assets/adverts/flats/flat3.webp";
import ImageFlatPhoto4 from "/public/assets/adverts/flats/flat4.webp";

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
  { flat: "Parter" },
  { flat: "1" },
  { flat: "2" },
  { flat: "3" },
  { flat: "4" },
  { flat: "5" },
  { flat: "6" },
  { flat: "7" },
  { flat: "8" },
];

export const rooms = [
  { room: "1" },
  { room: "2" },
  { room: "3" },
  { room: "4" },
  { room: "5" },
];

export const FlatsData = [
  {
    id: 1,
    location: "Katowice",
    type: 'Sprzedaż',
    flatNumber: "3",
    roomsAmount: "2",
    metrics: 19,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto1,
  },
  {
    id: 2,
    location: "Warszawa",
    type: 'Sprzedaż',
    flatNumber: "1",
    roomsAmount: "3",
    metrics: 26,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto2,
  },
  {
    id: 3,
    location: "Kraków",
    type: 'Wynajem',
    flatNumber: "Parter",
    roomsAmount: "5",
    metrics: 58,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto3,
  },
  {
    id: 4,
    location: "Zabrze",
    type: 'Sprzedaż',
    flatNumber: "3",
    roomsAmount: "5",
    metrics: 88,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto3,
  },
  {
    id: 5,
    location: "Łódź",
    type: 'Sprzedaż',
    flatNumber: "3",
    roomsAmount: "1",
    metrics: 75,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto2,
  },
  {
    id: 6,
    location: "Gdańsk",
    type: 'Wynajem',
    flatNumber: "2",
    roomsAmount: "5",
    metrics: 35,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto4,
  },
  {
    id: 7,
    location: "Szczecin",
    type: 'Wynajem',
    flatNumber: "1",
    roomsAmount: "3",
    metrics: 44,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto4,
  },
  {
    id: 8,
    location: "Częstochowa",
    type: 'Wynajem',
    flatNumber: "Parter",
    roomsAmount: "5",
    metrics: 42,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto1,
  },
  {
    id: 9,
    location: "Lublin",
    type: 'Wynajem',
    flatNumber: "5",
    roomsAmount: "1",
    metrics: 26,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto2,
  },
  {
    id: 10,
    location: "Zamość",
    type: 'Sprzedaż',
    flatNumber: "2",
    roomsAmount: "1",
    metrics: 46,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto1,
  },
  {
    id: 11,
    location: "Katowice",
    type: 'Sprzedaż',
    flatNumber: "4",
    roomsAmount: "5",
    metrics: 44,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto1,
  },
  {
    id: 12,
    location: "Kraków",
    type: 'Wynajem',
    flatNumber: "3",
    roomsAmount: "1",
    metrics: 72,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto3,
  },
  {
    id: 13,
    location: "Warszawa",
    type: 'Wynajem',
    flatNumber: "7",
    roomsAmount: "5",
    metrics: 44,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto4,
  },
  {
    id: 14,
    location: "Katowice",
    type: 'Wynajem',
    flatNumber: "4",
    roomsAmount: "3",
    metrics: 72,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto2,
  },
  {
    id: 15,
    location: "Katowice",
    type: 'Sprzedaż',
    flatNumber: "2",
    roomsAmount: "1",
    metrics: 24,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto3,
  },
  {
    id: 16,
    location: "Lublin",
    type: 'Sprzedaż',
    flatNumber: "1",
    roomsAmount: "1",
    metrics: 25,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto1,
  },
  {
    id: 17,
    location: "Warszawa",
    type: 'Sprzedaż',
    flatNumber: "1",
    roomsAmount: "3",
    metrics: 72,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto4,
  },
  {
    id: 18,
    location: "Zamość",
    type: 'Sprzedaż',
    flatNumber: "3",
    roomsAmount: "3",
    metrics: 44,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula viverra mi, in luctus est.",
    ImageUrl: ImageFlatPhoto3,
  },
];
