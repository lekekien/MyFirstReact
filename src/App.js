import React, { Suspense } from 'react';
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Album from './components/Album';
import Article from './components/Articles';
import Main from './components/Main';
function App() {
    return (
        <div>
            <Router>
                <Header/>
                <Switch>
                    <Route path="/"component={Main}/>
                    <Route path="/album"component={Album}/>
                    <Route path="/article"component={Article}/>
                </Switch>
                <Footer/>
            </Router>
        </div>  
    );
}

export default App;
