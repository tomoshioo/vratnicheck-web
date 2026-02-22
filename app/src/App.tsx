import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Imaporter from './pages/Products/Imaporter';
import Imalocker from './pages/Products/Imalocker';
import Imapouch from './pages/Products/Imapouch';
import Media from './pages/Media';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router basename={(import.meta.env.VITE_BASE_PATH ?? "").replace(/\/$/, "")}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produkty/importer" element={<Imaporter />} />
          <Route path="/produkty/imalocker" element={<Imalocker />} />
          <Route path="/produkty/imapouch" element={<Imapouch />} />
          <Route path="/media" element={<Media />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
