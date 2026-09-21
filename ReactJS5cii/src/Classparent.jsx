import React from 'react';
class ChildClass extends React.Component { render() {
return <p>I am the child (class). Message: {this.props.message}</p>;
}
}
class ParentClass extends React.Component { render() {
return (
<div>
<h2>I am the parent (class)</h2>
<ChildClass message="Hello from ParentClass!" />
 
</div>
);
}
}
export default ParentClass; 