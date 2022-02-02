import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data:blogs, isPending, error} = useFetch('http://localhost:8000/blogs')


  return (
    <div className="home">
      {error && <div>{error}...</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* this is called conditional templating, right half is only executed if the left half is true */}
    </div>
  );
};

export default Home;
