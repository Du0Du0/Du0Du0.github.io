import logo from './logo.svg';
import './App.css';
// 함수로 정의 : 컴포넌트
function Header() {
  return <header>
     <h1><a href='/'>WEB</a></h1>
  </header>
}
function Nav() {
  return <nav>
     <ol>
        <li><a href='/read/1'>html</a></li>
        <li><a href='/read/1'>css</a></li>
        <li><a href='/read/1'>js</a></li>
      </ol>
  </nav>
} 
function Article() {
  return <article>
     <h2>Welcome</h2>
        Hello, Web
  </article>
}

function App() {
  return (
    <div>
    <Header></Header>
    <Header></Header>
    <Header></Header>
    <Nav></Nav>
    <Article></Article>
    </div>
  );
}

export default App;
