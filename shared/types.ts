export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  publishedAt: string; // ISO 8601 date string
}

export interface PostSummary {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  publishedAt: string; // ISO 8601 date string
}