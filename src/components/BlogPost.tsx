import markdownToTxt from "markdown-to-text";

const BlogPost = ({ post }: any) => {
  return (
    <a
      key={post.id}
      className="hover:translate-y-1"
      href={`/blog/${post.slug}`}
    >
      <div className="overflow-hidden rounded-md bg-zinc-600">
        <div className="aspect-w-3 aspect-h-2">
          <img
            className=" h-52 w-full object-cover object-center"
            src={post.image_url}
            alt="Image post"
            loading="lazy"
          />
        </div>
        <div className="px-3 pt-4 pb-6 text-center">
          <h2 className="text-xl font-semibold truncate">{post.title}</h2>
          <div className="mt-1 text-xs text-gray-400">Feb 6, 2020</div>
          <div className="mt-2 text-sm">
            {markdownToTxt(post.content).slice(0, 40)}...
          </div>
        </div>
      </div>
    </a>
  );
};

export default BlogPost;
