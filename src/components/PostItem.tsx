import type { PostInterface } from "../types";

interface PostProps {
  post: PostInterface;
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  return (
    <div className="card m-4 w-80 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://plus.unsplash.com/premium_photo-1685125884136-9ef7edd4c69c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.description}</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn">View</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
