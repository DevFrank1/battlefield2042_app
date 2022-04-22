import './App.css';
import Discover from './components/discover/Discover';
import Explore from './components/explore/Explore';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import News from './components/news/News';
import Newsletter from './components/newsletter/Newsletter';
import Welcome from './components/welcome/Welcome';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Welcome />
      <News />
      <Discover/>
      <Faq/>
      <Explore/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
