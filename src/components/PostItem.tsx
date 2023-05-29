import type { PostInterface } from "../types";

interface PostProps {
  post: PostInterface;
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default PostItem;
