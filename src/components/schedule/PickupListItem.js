import React from 'react';
import {ListGroupItem, Button, Panel} from 'react-bootstrap';

class PickupListItem extends React.Component {

    render(){
        const {pickup} = this.props;
        return(
            <ListGroupItem className="pickupListItem" >
                <Panel>
                    <Panel.Heading>{pickup.place}</Panel.Heading>
                    <Panel.Body>
                        <span><strong>Time:</strong> {`${pickup.time}`}</span><span><strong>No. People: </strong>{`${pickup.people}`}</span>  
                        <Button bsStyle="primary">Edit</Button>               
                    </Panel.Body>
                </Panel>
            </ListGroupItem>
        )
    }
}

export default PickupListItem;