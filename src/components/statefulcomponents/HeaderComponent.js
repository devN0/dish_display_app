import React, {Component} from 'react';
import {Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

  constructor(props){
    super(props);
    this.state = {
      isNavOpen : false,
    }
    this.toggleNav = this.toggleNav.bind(this);
  }

  // when we don't need to pass any params to a function it is suggested that instead of passing that function as an arrow function we bind the method to "this" and the call it in jsx whereever we want.
  toggleNav() {
    this.setState({
      isNavOpen : !this.state.isNavOpen
    })
  }

  render(){
    return (
      <>
        <Navbar dark expand="md" color="primary">
          <div className='container'>
            <NavbarToggler onClick={this.toggleNav}/>
            <div className="row">
              <NavbarBrand className='mr-auto col-sm-4' href='/'>
                <img src="assets/images/logo.png" alt="New Application" height="30" width="45"/>
              </NavbarBrand>
              <Collapse isOpen={this.state.isNavOpen} navbar className="col-sm-8">
                <Nav navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/home">
                      <span className='fa fa-home fa-lg'></span> Home
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/aboutus">
                      <span className='fa fa-info fa-lg'></span> About Us
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/menu">
                      <span className='fa fa-list fa-lg'></span> Menu
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/contactus">
                      <span className='fa fa-address-card fa-lg'></span> Contact Us
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </div>

          </div>
        </Navbar>
        <div className="container">
          <div className='row row-header'>
            <div className='col-sm-6 col-12'></div>
            <h1>New App Menu</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga corrupti, ab ea atque aliquid fugit nemo unde maiores itaque alias nobis doloremque ex excepturi deleniti eaque quia magni at voluptatem!</p>
          </div>
        </div>
      </>
    );
  }
}

export default Header;