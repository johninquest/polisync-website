// src/lib/blog.ts
export type BlogPostMeta = {
    slug: string;
    data: {
image: any;
      title: string;
      description: string;
      pubDate: Date;
      category: string;
      tags: string[];
      featured: boolean;
    };
  };
  
  export function formatDate(date: Date): string {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  
  export function sortPosts(posts: BlogPostMeta[]) {
    return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
  }