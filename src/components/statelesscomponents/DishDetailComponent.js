import React from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';

const RenderDishDetails = ({dish}) => {
  return (
    <Card>
      <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}

const DishDetail = (props) => {
    const dish = props.selectedDish;
    console.log(dish);
    if(dish != null){
      return (
        <div className='col-md-5 m-1 mt-3'>
          <RenderDishDetails dish={dish}/>
        </div>
      )
    }
    else {
      return (
        <div></div>
      )
    }
}

export default DishDetail;