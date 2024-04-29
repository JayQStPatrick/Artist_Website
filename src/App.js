import "./index.css";
import Navbar from "./components/navbar";
import News_tab from "./components/news_tab";
import Footer from "./components/footer";
{
  /* <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>; */
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <News_tab />
      <Footer />
    </div>
  );
}

export default App;
