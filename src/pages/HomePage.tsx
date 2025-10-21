import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { format } from 'date-fns';
import { api } from '@/lib/api-client';
import type { PostSummary } from '@shared/types';
import { BlogLayout } from '@/components/layout/BlogLayout';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
export function HomePage() {
  const [posts, setPosts] = useState<PostSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const postSummaries = await api<PostSummary[]>('/api/posts');
        setPosts(postSummaries);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch posts.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };
  return (
    <BlogLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-16 md:py-24 lg:py-32 text-center relative">
           <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-foreground"
          >
            Clarity
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            A visually serene, content-focused blog platform.
          </motion.p>
        </div>
        {/* Posts Grid */}
        <div className="py-8 md:py-10 lg:py-12">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader>
                    <Skeleton className="h-48 w-full" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full mt-1" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-4 w-1/2" />
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center text-destructive">
              <p>Error: {error}</p>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {posts.map((post) => (
                <motion.div key={post.slug} variants={itemVariants}>
                  <Link to={`/posts/${post.slug}`} className="block group">
                    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:-translate-y-1">
                      <CardHeader className="p-0">
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                      </CardHeader>
                      <CardContent className="p-6 flex-grow">
                        <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground text-base">
                          {post.excerpt}
                        </p>
                      </CardContent>
                      <CardFooter className="p-6 pt-0">
                        <p className="text-sm text-muted-foreground">
                          {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                        </p>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </BlogLayout>
  );
}