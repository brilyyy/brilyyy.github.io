import { useEffect, useState } from "react";
import BlogPost from "./BlogPost";

const BlogCard = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://brilyyy.kangrosdi.com/api/posts");
      const data = await response.json();
      setLoading(false);
      setBlog(data);
    };
    fetchPosts();
  }, []);

  if (loading && !blog)
    return <div className="text-center text-white text-lg">Loading...</div>;

  return (
    <div>
      <div className="mx-auto max-w-screen-lg px-3 py-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {blog?.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
