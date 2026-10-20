export interface Review {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarText: string;
  avatarImage: string;
  service: string;
  rating: number;
  quote: string;
  location: string;
}

export const reviews: Review[] = [
  {
    id: 'gabrielle-williams',
    name: 'Gabrielle Williams',
    role: 'CEO and Co-founder',
    company: 'Horizon Studio',
    avatarText: 'GW',
    avatarImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
    service: 'Website Development',
    rating: 5,
    quote: 'Creative geniuses who listen, understand, and craft captivating visuals — a partner that truly understands our strategic brand needs.',
    location: 'New York',
  },
  {
    id: 'samantha-johnson',
    name: 'Samantha Johnson',
    role: 'CEO and Co-founder',
    company: 'Lumina Design Lab',
    avatarText: 'SJ',
    avatarImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80',
    service: 'Brand Identity',
    rating: 5,
    quote: 'Exceeded our expectations with innovative designs that brought our vision to life — a truly remarkable, high-integrity creative collaboration.',
    location: 'London',
  },
  {
    id: 'isabella-rodriguez',
    name: 'Isabella Rodriguez',
    role: 'CEO and Co-founder',
    company: 'ArchiForm Atelier',
    avatarText: 'IR',
    avatarImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    service: 'Graphic Designing',
    rating: 5,
    quote: 'Their ability to capture our brand essence in every project is unparalleled — an invaluable creative collaborator who brings immense clarity.',
    location: 'Madrid',
  },
  {
    id: 'natalie-martinez',
    name: 'Natalie Martinez',
    role: 'CEO and Co-founder',
    company: 'Elevate Media',
    avatarText: 'NM',
    avatarImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
    service: 'Social Media Marketing',
    rating: 5,
    quote: 'From concept to execution, their creativity knows no bounds — a game-changer for our brand’s digital visibility and market success.',
    location: 'San Francisco',
  },
  {
    id: 'victoria-thompson',
    name: 'Victoria Thompson',
    role: 'CEO and Co-founder',
    company: 'Velour Collective',
    avatarText: 'VT',
    avatarImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
    service: 'Content Writing',
    rating: 5,
    quote: 'A refreshing and imaginative agency that consistently delivers exceptional results — highly recommended for any ambitious project.',
    location: 'Toronto',
  },
  {
    id: 'john-peter',
    name: 'John Peter',
    role: 'CEO and Co-founder',
    company: 'Synthetix Tech',
    avatarText: 'JP',
    avatarImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    service: 'SEO & Web Development',
    rating: 5,
    quote: 'Their team’s artistic flair and strategic approach resulted in remarkable campaigns — a reliable, high-converting creative partner.',
    location: 'Singapore',
  },
  {
    id: 'rohan-mehta',
    name: 'Rohan Mehta',
    role: 'Founder & Principal Architect',
    company: 'Atelier Architects',
    avatarText: 'RM',
    avatarImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    service: 'Website Development',
    rating: 5,
    quote: 'Somya transformed our online presence completely. The website is not only fast and responsive, but delivers qualified enquiries every week.',
    location: 'New Delhi',
  },
  {
    id: 'elena-vance',
    name: 'Elena Vance',
    role: 'Creative Director',
    company: 'Aura Nocturne',
    avatarText: 'EV',
    avatarImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    service: 'Graphic Design',
    rating: 5,
    quote: 'Nuanced aesthetic discipline and structural clarity that elevated our entire visual presence. Every millimeter was considered with extraordinary care.',
    location: 'London',
  },
];
