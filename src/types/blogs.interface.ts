export interface Blog {
  title: string;
  description: string;
  canonical_url: string;
  collection_id: string;
  comments_count: number;
  cover_image: string;
  created_at: string;
  crossposted_at: string | null;
  edited_at: string;
  id: number;
  last_comment_at: string;
  path: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  published_at: string;
  published_timestamp: string;
  readable_publish_date: string;
  reading_time_minutes: number;
  slug?: string;
  social_image?: string;
  tag_list?: string[];
  tags?: string;
  type_of?: string;
  url?: string;
  user?: any;
  _id?: any; // Assuming ObjectId is used
  __v?: number;
}
