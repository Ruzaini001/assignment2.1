import Main from "./components/Main";
import Section from "./components/Section";
import "./Styling.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="navbar">
          <ul>
            <li><a href="https://github.com/Ruzaini001">About</a></li>
            <li><a href="https://github.com/Ruzaini001?tab=repositories">Projects</a></li>
            <li><a href="https://www.linkedin.com/in/ahmadruzainibinabubakar/">Personal</a></li>
            <li><a href="mailto:ruzaini93@gmail.com">Contact</a></li>
          </ul>
        </nav>
      </header>
      <div className="container"></div>
      <Main />
      <Section />
      <a href="/Ruzaini.docx" download className="download-btn">Download CV</a>
    </div>
  );
}

export default App;
