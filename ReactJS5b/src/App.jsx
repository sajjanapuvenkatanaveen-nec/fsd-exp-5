import React from 'react'; function App() {
const title = 'JSX Markup Example';
const items = ['First Point', 'Second Point', 'Third Point']; return (
<div>
<h1>{title}</h1>
<p>This markup is written directly in JSX inside a JavaScript function component.</p>
<ul>
{items.map((item, idx) => (
<li key={idx}>{item}</li>
))}
</ul>
</div>
);
}
export default App;
