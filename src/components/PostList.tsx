import PostItem from "./PostItem";
import type { PostInterface } from "~/types";

interface PostListProps {
  posts: PostInterface[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostList;
