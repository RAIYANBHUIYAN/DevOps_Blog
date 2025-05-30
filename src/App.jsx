import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import BlogPost from './pages/BlogPost'
import About from './pages/About'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import CategoryPage from './pages/CategoryPage'
import DevOpsChatbot from './components/DevOpsChatbot'
import Jobs from './pages/Jobs'
import Installation from './pages/Installation'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/installation" element={<Installation />} />
        </Routes>
      </main>
      <Footer />
      <DevOpsChatbot />
    </div>
  )
}

export default App 