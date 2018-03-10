import React from 'react';
import PickupListItem from './PickupListItem';
import {ListGroup} from 'react-bootstrap';

class Schedule extends React.Component {
   

    render(){
        let {pickups, date, time} = this.props;
        let reqKeys = Object.keys(pickups).filter(key => pickups[key].date===date);
        let schedule = reqKeys.map(key => pickups[key]);
        return(
            <ListGroup>
                {schedule.map((item, index) => (
                <PickupListItem pickup={item} key={index}/>
                ))}  
            </ListGroup>
            
        )
    }
}

export default Schedule;