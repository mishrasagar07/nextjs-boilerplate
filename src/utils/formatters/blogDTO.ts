import {
  
  IBlogPostData,
  IBlogReceivedData,
} from "../interfaces/IBlog";

export const blogDTO = {
  receive: (data: IBlogReceivedData[]) => {
    const res = data.map((dat: IBlogReceivedData) => {
      return {
        id: dat?.id,
        blog_slug: dat?.blog_slug || "--",
        blog_title: dat?.blog_title || "--",
        blog_teaser: dat?.blog_teaser || "--",
        blog_description: dat?.blog_description || "--",
        blog_cover_image:
          dat?.blog_cover_image ||
          "https://dev.citytours.app/assets/logofinalwhite-c46f05fd.svg",
        blog_video_url: dat?.blog_video_url || "--",
        is_active: dat?.is_active || false,
      };
    });
    return res;
  },


  send: (data: IBlogPostData) => {
    return {
      blog_title: data?.blogTitle || "--",
      blog_teaser: data?.blogTeaser || "--",
      blog_description: data?.blogDescription || "--",
      blog_cover_image: data?.blogCoverImage || "--",
      blog_video_url: data?.blogVideoUrl || "--",
    };
  },
};
