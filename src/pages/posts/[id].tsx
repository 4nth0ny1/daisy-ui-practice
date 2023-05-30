import PostContent from "../../components/PostContent";
import { getAllPosts } from "../../postData";
import type { PostInterface } from "~/types";

interface PostListProps {
  posts: PostInterface[];
}

const PostDetailPage: React.FC<PostListProps> = (props) => {
  return (
    <div>
      <PostContent post={props.post} />
    </div>
  );
};

export function getStaticProps(context) {
  console.log(context);
  const post = getAllPosts(id);

  return {
    props: {
      post: post,
    },
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
