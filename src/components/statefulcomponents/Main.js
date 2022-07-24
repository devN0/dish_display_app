import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from '../statelesscomponents/MenuComponent';
import DishDetail from '../statelesscomponents/DishDetailComponent';
import {DISHES} from '../../shared/dish';


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDishId : null,
    }
  }

  onSelectDish = (dishId) => {
    this.setState({selectedDishId : dishId});
  }

  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href='/'>New Application</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Menu dishes={this.state.dishes} onClickEvent={(dishId)=>{this.onSelectDish(dishId)}}/>
          <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0] }/>
        </div>
      </div>
    )
  }
}

export default Main;