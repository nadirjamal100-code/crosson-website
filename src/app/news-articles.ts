export interface NewsArticle {
  slug: string;
  title: string;
  image: string;
  cover: string;
}

export const NEWS_ARTICLES: NewsArticle[] = [
  { slug: 'assembly-58th', title: 'news.assembly', image: '/images/news-list/story-1.jpg', cover: '/images/news-board-assembly.webp' },
  { slug: 'board-of-directors', title: 'news.directors', image: '/images/news-list/story-2.jpg', cover: '/images/news-new-directors.webp' },
  { slug: 'assembly-58th-city', title: 'news.assembly', image: '/images/news-list/story-3.jpg', cover: '/images/news-list/story-3.jpg' },
  { slug: 'board-of-directors-update', title: 'news.directors', image: '/images/news-list/story-4.jpg', cover: '/images/news-list/story-4.jpg' },
  { slug: 'assembly-58th-community', title: 'news.assembly', image: '/images/news-list/story-5.jpg', cover: '/images/news-list/story-5.jpg' },
  { slug: 'board-of-directors-team', title: 'news.directors', image: '/images/news-list/story-6.jpg', cover: '/images/news-list/story-6.jpg' },
];

export const NEWS_DETAIL_URL = (slug: string): string => `/news/${slug}`;
