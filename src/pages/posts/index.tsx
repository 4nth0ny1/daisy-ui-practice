import { getAllPosts } from "../../postData";
import PostList from "../../components/PostList";
import type { PostInterface } from "~/types";

interface PostListProps {
  posts: PostInterface[];
}

const PostListPage: React.FC<PostListProps> = (props) => {
  return (
    <>
      <PostList posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default PostListPage;
