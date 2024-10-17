import BlogList from "./component/blogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data, isPending, error } = useFetch('http://localhost:4000/blogs');

    return (
        <div className="home">
            {error && <div>Error: Could not fetch the data</div>}
            {isPending && <div>Loading...</div>}
            {data && <BlogList blogs={data} />}
        </div>
    );
}
export default Home;