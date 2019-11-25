import React from "react";
import { Card, CardText } from "reactstrap";

const SwCard = props => {
return (
  <div key={props.character}>
    <Card>
      <strong>{props.character}</strong>
      <CardText>
        Height: {props.height}cm<br />
        Weight: {props.weight}kg<br />
        Hair Color: {props.hair}
      </CardText>
    </Card>
  </div>
);
};

export default SwCard;
