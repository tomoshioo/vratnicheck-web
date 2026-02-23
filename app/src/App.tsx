import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';
import Imaporter from './pages/Products/Imaporter';
import Imalocker from './pages/Products/Imalocker';
import ImalockerMobile from './pages/Products/ImalockerMobile';
import Imapouch from './pages/Products/Imapouch';
import Media from './pages/Media';
import ArticleDetail from './pages/ArticleDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/Legal/PrivacyPolicy';
import TermsConditions from './pages/Legal/TermsConditions';
import ServiceTerms from './pages/Legal/ServiceTerms';
import CookiePolicy from './pages/Legal/CookiePolicy';

function App() {
  return (
    <Router basename={(import.meta.env.VITE_BASE_PATH ?? "").replace(/\/$/, "")}>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produkty/importer" element={<Imaporter />} />
          <Route path="/produkty/imalocker" element={<Imalocker />} />
          <Route path="/produkty/imalocker-mobile" element={<ImalockerMobile />} />
          <Route path="/produkty/imapouch" element={<Imapouch />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/:slug" element={<ArticleDetail />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/ochrana-osobnich-udaju" element={<PrivacyPolicy />} />
          <Route path="/obchodni-podminky" element={<TermsConditions />} />
          <Route path="/servisni-podminky" element={<ServiceTerms />} />
          <Route path="/cookies" element={<CookiePolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
