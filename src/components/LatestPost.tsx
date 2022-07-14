import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import BlogPost from "./BlogPost";

const LatestPost = () => {
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

  return (
    <div className="mx-auto max-w-screen-lg px-3 py-6">
      <div className="mb-6 text-2xl font-bold">
        <div className="flex items-baseline justify-between">
          <div>
            Recent{" "}
            <span className="bg-gradient-to-br from-teal-500 to-emerald-400 bg-clip-text text-transparent">
              Posts
            </span>
          </div>
          <div className="text-sm">
            <a href="/blog">View all Posts →</a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {blog?.slice(3).map((post) => (
          <BlogPost key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
