import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { api } from '@/lib/api-client';
import type { Post } from '@shared/types';
import { BlogLayout } from '@/components/layout/BlogLayout';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
export function PostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    if (!slug) return;
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const fetchedPost = await api<Post>(`/api/posts/${slug}`);
        setPost(fetchedPost);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch post.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, [slug]);
  if (isLoading) {
    return (
      <BlogLayout>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
          <Skeleton className="h-8 w-40 mb-12" />
          <Skeleton className="h-12 w-full mb-4" />
          <Skeleton className="h-8 w-3/4 mb-8" />
          <Skeleton className="h-6 w-1/2 mb-12" />
          <Skeleton className="aspect-video w-full mb-12" />
          <div className="space-y-6">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-5/6" />
            <Skeleton className="h-5 w-full" />
          </div>
        </div>
      </BlogLayout>
    );
  }
  if (error) {
    return (
      <BlogLayout>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-destructive mb-4">Error</h1>
          <p className="text-muted-foreground mb-8">{error}</p>
          <Button asChild>
            <Link to="/">Go back home</Link>
          </Button>
        </div>
      </BlogLayout>
    );
  }
  if (!post) {
    return (
      <BlogLayout>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <p className="text-muted-foreground mb-8">The post you are looking for does not exist.</p>
          <Button asChild>
            <Link to="/">Go back home</Link>
          </Button>
        </div>
      </BlogLayout>
    );
  }
  return (
    <BlogLayout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button variant="ghost" asChild className="mb-8 group">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2 transition-transform group-hover:-translate-x-1" />
              Back to all posts
            </Link>
          </Button>
          <article>
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
                {post.title}
              </h1>
              <p className="text-muted-foreground">
                Published on {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
              </p>
            </header>
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full aspect-video object-cover rounded-lg mb-8 shadow-lg"
            />
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </motion.div>
      </div>
    </BlogLayout>
  );
}