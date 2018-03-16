import React from 'react';
import PickupListItem from './PickupListItem';
import {ListGroup} from 'react-bootstrap';

class Schedule extends React.Component {


    render(){
        let {pickups, date, time, showEditModal, deletePickup} = this.props;
        let reqKeys = Object.keys(pickups).filter(key=> pickups[key] !== null).filter(key => pickups[key].date===date).filter(key => pickups[key].time === time);
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