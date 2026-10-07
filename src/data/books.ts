export type Book = {
  id: number;
  title: string;
  author: string;
  image: string;
  url: string;
};

export const books: Book[] = [
  {
    id: 1,
    title: "தோட்டியின் மகன்",
    author: "தகழி சிவசங்கரப் பிள்ளை",
    image: `${import.meta.env.BASE_URL}books/thottiyinmagan.jpg`,
    url: "https://link.amazon/B0bMZJ6yx",
  },
  {
    id: 2,
    title: "அம்மா வந்தாள்",
    author: "தி. ஜானகிராமன்",
    image: `${import.meta.env.BASE_URL}books/ammavandhal.jpg`,
    url: "https://link.amazon/B05HVeWf3",
  },
  {
    id: 3,
    title: "தேசாந்திரி",
    author: "எஸ். ராமகிருஷ்ணன்",
    image: `${import.meta.env.BASE_URL}books/desanthiri.jpg`,
    url: "https://link.amazon/B0g6F6oIo",
  },
  {
    id: 4,
    title: "ஒரு மனிதன் ஒரு வீடு ஒரு உலகம்",
    author: "ஜெயகாந்தன்",
    image: `${import.meta.env.BASE_URL}books/oru_veedu_oru_manithan_oru_ulagam.jpg`,
    url: "https://link.amazon/B02X2RzUD",
  },
  {
    id: 5,
    title: "சில நேரங்களில் சில மனிதர்கள்",
    author: "ஜெயகாந்தன்",
    image: `${import.meta.env.BASE_URL}books/sila_nerangalil_sila_manithargal.jpeg`,
    url: "https://link.amazon/B0d6vs22s",
  },
];
