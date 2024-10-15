import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';

import Header from '@/components/header/header'
import Contact from '@/components/contact/contact'
import HomePage from "@/pages/homepage";
import Detail from "@/pages/detail";
import ToggleSidebar from '@/components/sidebar/sidebar'
import ScrollToTop from '@/components/scroll-to-top/scroll-to-top'
import Preloader from '@/components/preloader/preloader'

function RouteToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <Preloader />
      <RouteToTop />
      <Header toggleSidebar={toggleSidebar} />
      <ToggleSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
      <Contact />
      <ScrollToTop />
    </Router>
  )
}

export default App
