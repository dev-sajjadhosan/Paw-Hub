export interface Post {
  id: string;
  uid: string;
  title: string;
  picture: string;
  banner: string;
  description: string;
  content: string;
  views: string;
  likes: string;
  comments: string[];
  author: {
    name: string;
    uid: string;
    picture: string;
  };
  tags: string[];
}
[];

export interface PetProps {
  id: string | number;
  name: string;
  species: string;
  breed: string;
  age: string;
  gender: string;
  color: string[];
  weight: string;
  size: string;
  picture: string;
  description: string;
  vaccinations: [{ name: string; date: string }];
  owner: {
    uid: string;
    picture: string;
    name: string;
    email: string;
    contact: number | string;
  };
  adoptionStatus: boolean;
  lastCheckup: string;
  location: {
    city: string;
    country: string;
  };
}
