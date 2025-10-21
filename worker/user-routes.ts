import { Hono } from "hono";
import type { Env } from './core-utils';
import { PostEntity } from "./entities";
import { ok, notFound } from './core-utils';
import type { Post, PostSummary } from "@shared/types";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  // Ensure seed data is loaded on first request in a deployment
  app.use('/api/posts*', async (c, next) => {
    await PostEntity.ensureSeed(c.env);
    await next();
  });
  // GET /api/posts - List all post summaries
  app.get('/api/posts', async (c) => {
    const { items } = (await PostEntity.list(c.env)) as { items: Post[] };
    // Return summaries (all fields except content)
    const summaries: PostSummary[] = items.map(({ content, ...summary }) => summary);
    return ok(c, summaries);
  });
  // GET /api/posts/:slug - Fetch a single post by its slug
  app.get('/api/posts/:slug', async (c) => {
    const slug = c.req.param('slug');
    const { items } = (await PostEntity.list(c.env)) as { items: Post[] };
    const post = items.find((p) => p.slug === slug);
    if (!post) {
      return notFound(c, 'Post not found');
    }
    return ok(c, post);
  });
}