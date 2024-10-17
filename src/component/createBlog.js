import { useState } from "react";
import { useHistory } from "react-router-dom";
// this component is about how to use forms.
const CreatBlog = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);

    const blog = { title, body, author };
    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      history.push('/');
    });
  };

  return (
    <div className="create">
      <h2>add new Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>blog title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>blog body</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label> blog author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="mario">mario</option>
        </select>
        {!isPending && <button> Add Blog </button>}
        {isPending && <button disabled>Adding Blog.... </button>}
      </form>
    </div>
  );
};
export default CreatBlog;
