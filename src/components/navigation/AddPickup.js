import React from 'react';
import {Modal, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'; 
import DatePicker from '../DatePicker';
import moment from 'moment';

class AddPickup extends React.Component {
    state ={ 
        busTimes: ['9:00AM','12:00PM','3:00PM'],
        newDate: '',
        newTime: '9:00AM',
        newPlace: '',
        newPeople: 1
    }

    componentDidMount(){
        this.setState({newDate: moment(new Date).format('YYYY-MM-DD')});
    }

    setNewDate = value => {
        this.setState({newDate: value});
    }
    setNewTime = value => {
        this.setState({newTime: value});
    }
    setNewPlace = value => {
        this.setState({newPlace: value});
    }
    setNewPeople = value => {
        this.setState({newPeople: value});
    }

    handleSubmit= () => {
        const {newDate, newTime, newPlace, newPeople} = this.state;
        const newPickup = {
            date: newDate,
            time: newTime,
            place: newPlace,
            people: newPeople
        }
        this.props.addPickup(newPickup);
        this.setState({
            newDate: moment(new Date).format('YYYY-MM-DD'),
            newTime: '9:00AM',
            newPlace: '',
            newPeople: 1
        })
    }

    render(){
        const {show, onHide} = this.props;
        const {busTimes}=this.state;
    
        return(
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton><Modal.Title>Add Pickup</Modal.Title></Modal.Header>
                <Modal.Body>
                    <FormGroup controlId="addDriveForm">
                        <ControlLabel>Date</ControlLabel>
                        <DatePicker  onChange={this.setNewDate} />
                        <ControlLabel>Time</ControlLabel>
                        <FormControl componentClass="select" onChange={event => this.setNewTime(event.target.value)}>
                            {busTimes.map((time, i) => (
                                <option key={i}>{time}</option>
                            ))}
                        </FormControl>
                        <ControlLabel>Location</ControlLabel>
                        <FormControl type="text" onChange={event => this.setNewPlace(event.target.value)}></FormControl>
                        <ControlLabel>No. People</ControlLabel>
                        <FormControl type="number" defaultValue={1} min={1} max={12} onChange={event => this.setNewPeople(event.target.value)}></FormControl>
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.handleSubmit}>Add Pickup</Button>
                </Modal.Body>
            </Modal>
        )
    }
}

export default AddPickup;