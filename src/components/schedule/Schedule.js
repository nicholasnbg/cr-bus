import React from 'react';
import PickupListItem from './PickupListItem';
import {ListGroup} from 'react-bootstrap';

class Schedule extends React.Component {

    filterSchedule = (pickups, date, time) =>  pickups.filter(pickup => pickup[date]===date);
    

    render(){
        let {pickups, date, time} = this.props;
        let schedule = pickups.filter(pickup => pickup.date === date);
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