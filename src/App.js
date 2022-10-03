//import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import Menu from './components/menu/menu';
import Footer from './components/footer/footer';
import Home from './pages/home/home';
import Post from './pages/post/post';
import Posts from './pages/posts/posts';
import Publications from './pages/publications/publications';
import Gallery from './pages/gallery/gallery';
import AboutMe from "./pages/aboutMe/aboutMe";

function App() {
  return (
    <div className="blog-page">
      <section className="menu">
        <Menu />
      </section>
      <section className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post/:postName" element={<Post />} />
          <Route path="posts" element={<Posts />} />
          <Route path="publications" element={<Publications />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Routes>
      </section>
      <section className="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
