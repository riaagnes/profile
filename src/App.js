import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import me from './assets/images/me.jpg'
import snow from './assets/images/snow.jpg';
import './App.css';



class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    title: 'Ria Agnes Jose',
    headerLinks: [
      {title: 'Home', path:'/'},
      {title: 'About me', path:'/about'},
      {title: 'Contact', path:'/contact'},
    
    ],
    home: {
      title: 'Roll up your Sleeves',
      subTitle: 'Projects that make a difference',
      text: 'Checkout my projects below'
    },
    about: {
      title: 'About me',
      img:me,
      imgsnow: snow
    },
    contact: {
      title: 'Let\'s Talk'
    
    }
    

  }
}
render(){
  return (

<Router>
<Container className="p-0" fluid={true}>

<Navbar className="border-bottom" bg="transparent" expand="lg">
  <Navbar.Brand>Ria Agnes Jose</Navbar.Brand>
  <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
  <Navbar.Collapse id="navbar-toggle">
    <Nav className="ml-auto">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/about">About me</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
<Route path="/" exact render={()=><HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
<Route path="/about"  render={()=><AboutPage title={this.state.about.title} img={this.state.about.img} imgsnow={this.state.about.imgsnow}/>}/>
<Route path="/contact"  render={()=><ContactPage title={this.state.contact.title}/>}/>

<Footer/>
</Container>
</Router>

  );
}
}

export default App;
