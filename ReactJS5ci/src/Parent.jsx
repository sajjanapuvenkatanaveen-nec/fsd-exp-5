function Child(props) {
  return <p>I am the child. Message: {props.message}</p>;
}

function Parent() {
  return (
    <div>
      <h2>I am the parent</h2>
      <Child message="Hello from Parent!" />
    </div>
  );
}

export default Parent;