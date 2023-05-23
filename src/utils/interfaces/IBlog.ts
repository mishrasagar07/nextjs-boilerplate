export interface IBlogReceivedData {
  id: string;
  blog_slug: string;
  blog_title: string;
  blog_teaser: string;
  blog_description: string;
  blog_cover_image: string;
  blog_video_url: string;
  is_active: boolean;
}

export interface IBlogDetailActive {
  blog_slug: string;
  blog_title: string;
  blog_teaser: string;
  blog_description: string;
  blog_cover_image: string;
  blog_video_url: string;
}

export interface IBlogDetail {
  id: string;
  is_active: boolean;
  blog_title: string;
  blog_teaser: string;
  blog_description: string;
  blog_cover_image: string;
  blog_video_url: string;
}

export interface IBlogPostData {
  blogTitle: string;
  blogTeaser: string;
  blogDescription: string;
  blogCoverImage: string;
  blogVideoUrl: string;
}
