import { getAllPosts } from "../../postData";
import PostList from "../../components/PostList";
import type { PostInterface } from "~/types";

interface PostListProps {
  posts: PostInterface[];
}

const PostListPage: React.FC<PostListProps> = (props) => {
  return (
    <div className="mt-12">
      <PostList posts={props.posts} />
    </div>
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
