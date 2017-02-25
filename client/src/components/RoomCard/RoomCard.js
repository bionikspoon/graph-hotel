import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';


export default props => (
  <Card>
    <CardHeader title={props.text || 'Hello World'} />
  </Card>
);
