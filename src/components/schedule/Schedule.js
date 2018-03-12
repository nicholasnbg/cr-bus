import React from 'react';
import PickupListItem from './PickupListItem';
import EditModal from './EditModal';
import {ListGroup} from 'react-bootstrap';

class Schedule extends React.Component {


    render(){
        let {pickups, date, time, showEditModal, deletePickup} = this.props;
        let reqKeys = Object.keys(pickups).filter(key=> pickups[key] !== null).filter(key => pickups[key].date===date);
        let schedule = reqKeys.map(key => pickups[key]);
        return(
            <ListGroup>
                {schedule.map((item, index) => (
                <PickupListItem
                showEditModal={showEditModal} 
                deletePickup={deletePickup}
                pickup={item} 
                key={index}
                reqKey={reqKeys[index]}/>
                ))}  
            </ListGroup>
            
        )
    }
}

export default Schedule;