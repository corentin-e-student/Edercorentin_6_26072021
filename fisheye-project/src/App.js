import './index.css';
import { HeaderHome } from "./components/HomeComponents/HeaderHome";
import { HeaderPhotographe } from './components/PhotographeComponents/HeaderPhotographe';
import { HomePage } from "./pages/HomePage";
import PhotographePage from "./pages/PhotographePage";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
    const [tagFilter, setTagFilter] = useState([]);
    const [buttonToTop, setButtonToTop] = useState(false);

    const isBrowser = typeof window !== `undefined`

    useEffect(() => {
        if (buttonToTop === false) {
            window.addEventListener("scroll", handleScroll);
        }
    }, [buttonToTop]);
    
    const handleScroll = () => {
        setButtonToTop(true);
        window.removeEventListener("scroll", handleScroll);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0 });
        setButtonToTop(false);
    };


    const toggleFilter = filter => {
        console.log("value", filter)
        const isActive = tagFilter.find(value => value === filter)

        if (isActive) {
            setTagFilter(tagFilter => tagFilter.filter(value => value !== filter))
        } else {
            setTagFilter(tagFilter => [
                ...tagFilter,
                filter,
            ])
        }
    };

    return (
        <div className="page__position-items">
            <Router>
                <Switch>
                    <Route path="/photographer/:id">
                        <HeaderPhotographe/>
                        <PhotographePage />
                    </Route>
                    <Route path="/">
                        <HeaderHome 
                            tagFilter={tagFilter}
                            toggleFilter={toggleFilter}
                        />
                        <HomePage
                            tagFilter={tagFilter}
                            setTagFilter={setTagFilter}
                        />
                    </Route>
                </Switch>
                {buttonToTop && (
                    <button class="button-return-top-page__style" style={{ position: "fixed" }} onClick={scrollToTop}>
                        Passer au contenu
                    </button>
                )}
            </Router>
        </div>
    );
}
export default App;
