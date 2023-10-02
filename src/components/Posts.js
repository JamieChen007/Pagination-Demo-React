const Posts = (props) => {
  return (
    <ul className="list-group">
      {props.posts.map((post) => (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
