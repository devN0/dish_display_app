import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';

class DishDetail extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const dish = this.props.selectedDish;
    console.log(dish);
    if(dish != null){
      return (
        <div className='col-md-5 m-1 mt-3'>
          <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

export default DishDetail;