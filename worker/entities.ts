import { IndexedEntity } from "./core-utils";
import type { Post } from "@shared/types";
import { MOCK_POSTS } from "@shared/mock-data";
export class PostEntity extends IndexedEntity<Post> {
  static readonly entityName = "post";
  static readonly indexName = "posts";
  static readonly initialState: Post = {
    id: "",
    slug: "",
    title: "",
    excerpt: "",
    content: "",
    imageUrl: "",
    publishedAt: ""
  };
  static seedData = MOCK_POSTS;

}