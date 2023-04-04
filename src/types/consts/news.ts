export interface NewsPageType {
  title: string;
  summary: string;
  icon: {
    alt: string;
    filename: string;
  };
  newsItem: NewsItemType[];
}

export interface NewsItemType {
  text: string;
  illustration: {
    alt: string;
    filename: string;
  };
  component: string;
  _uid: string;
}
