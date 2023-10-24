export interface Picture {
  id: string;
  src: string;
  alt: string;
}

export interface ArticleData {
  id: number;
  title: string;
  location: string;
}

export interface Photo {
  url: string;
}

export interface FeaturedImage {
  url: string;
}
export interface Author {
  bio: string;
  id: string;
  name: string;
  photo: Photo;
}

export interface Node {
  author: Author;
}

export interface Category {
  name: string;
  slug: string;
}

export interface Edge {
  author: Author;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: FeaturedImage;
  categories: Category[];
}

export interface postsConnection {
  edges: Edge[];
}
