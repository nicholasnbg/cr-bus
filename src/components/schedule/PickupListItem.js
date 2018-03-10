import React from 'react';
import {ListGroupItem} from 'react-bootstrap';

class PickupListItem extends React.Component {

    render(){
        const {pickup} = this.props;
        return(
            <ListGroupItem className="pickupListItem" header={pickup.place}>
                <span>{`Time: ${pickup.time}`}</span><span>{`No. People: ${pickup.people}`}</span>
            </ListGroupItem>
        )
    }
}

export default PickupListItem;