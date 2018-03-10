import React from 'react';
import PickupListItem from './PickupListItem';
import {ListGroup} from 'react-bootstrap';

class Schedule extends React.Component {

    filterSchedule = (pickups, date, time) =>  Object.keys(pickups).filter(key => {
        return pickups[key][date]===date;
    });

    

    render(){
        let {pickups, date, time} = this.props;
        let reqKeys = Object.keys(pickups).filter(key => pickups[key].date===date);
        let schedule = reqKeys.map(key => {
            return pickups[key]
        });
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