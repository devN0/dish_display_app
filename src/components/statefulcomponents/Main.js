import React, {Component} from 'react';

import Home from '../statelesscomponents/HomeComponent';
import Menu from '../statelesscomponents/MenuComponent';
import Contact from '../statelesscomponents/ContactComponent';
import Header from './HeaderComponent';

import {DISHES} from '../../shared/dishes';
import {COMMENTS} from '../../shared/comments';
import {PROMOTIONS} from '../../shared/promotions';
import {LEADERS} from '../../shared/leaders';

import {Switch, Redirect, Route} from 'react-router-dom';


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      leaders: LEADERS,
      comments: COMMENTS,
      promotions: PROMOTIONS,
    }
  }

  render(){
    const Homepage = ()=>{
      return(
        <Home dish={this.state.dishes.filter((dish)=>{return dish.featured === true;})[0] }
        promotion={this.state.promotions.filter((promo)=>{return promo.featured === true;})[0] }
        leader={this.state.leaders.filter((leader)=>{return leader.featured === true;})[0] }
        />
      );
    }

    return (
      <div>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/menu" component={()=>{ return <Menu dishes={this.state.dishes}/>}} />
            <Route exact path="/contactus" component={Contact} />
            {/* here we've passed an inline functional component because we wanted to pass props to the Menu component. Also note that we're not passing the onClickEvent prop to Menu, we'll do it in another way. */}
            <Redirect to="/" />
          </Switch>
          {/* <Menu dishes={this.state.dishes} onClickEvent={(dishId)=>{this.onSelectDish(dishId)}}/>
          <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0] }/> */}
        </div>
      </div>
    )
  }
}

export default Main;