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
