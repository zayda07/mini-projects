import "./App.css";
import Header from "./components/Layout/header/Header";
import Footer from "./components/Layout/footer/Footer";
import Cards from "./components/cards/Cards";
import Search from "./components/search/Search";
function App() {
    return (
        <>
            <Header />
            <Search />
            <Cards />
            <Footer />
        </>
    );
}

export default App;
