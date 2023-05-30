import type { PostInterface } from "../types";
import Link from "next/link";

interface PostProps {
  post: PostInterface;
}

const PostItem: React.FC<PostProps> = ({ post }) => {
  const { id, title, description } = post;
  const linkPath = `/posts/${id}`;
  return (
    <div className="card m-4 w-80 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://plus.unsplash.com/premium_photo-1685125884136-9ef7edd4c69c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={linkPath}>
            <button className="btn-primary btn">View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
