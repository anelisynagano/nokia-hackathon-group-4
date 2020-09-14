import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import SeniorBanner from './components/SeniorBanner';
import HotspotBanner from './components/HotspotBanner';
import Card from "./components/Card";
import FeaturePhones from "./components/FeaturePhones";
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import Feature from './components/Feature';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      phones: null,
      
    }
  }

  componentDidMount() {
    
      fetch("https://cors-anywhere.herokuapp.com/https://nokia-hackathon.herokuapp.com/phones")
      .then(response => response.json())
      .then(data => this.setState({ phones:data }))
      // this.setState({ phones:data })
  }
  
  

  render() {
    console.log(this.state.isClicked)

    return (
      <div className="App">
         <Router>
         <Navbar /> 
        <Switch>
          <Route exact path='/' render={()=> <Header isClicked={this.state.isClicked} handleClick={this.handleClick} />  } />
          {this.state.phones && <Route exact path='/featurephones' render={()=> <FeaturePhones phones={this.state.phones} />}  /> }
        
        </Switch>
        </Router>
       
        {/* <SeniorBanner />
        <HotspotBanner /> */}
      
        <Footer />
      </div>
    )
  }
}

export default App;
