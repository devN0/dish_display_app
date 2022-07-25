import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';
import {Link} from 'react-router-dom';

// if we know what are all the attributes of the props object being passed we can directly metion them as well.
function RenderMenuItem({dish}) {
  return (
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

// Another way of defining functional component is via an arrow function
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
      return(
        <div key={dish.id} className="col-12 col-md-4 m-1">
          <RenderMenuItem dish={dish}/>
        </div>
      );
    });

    return (
      <div className='row'>
        {menu}
      </div>
    );
}

export default Menu;