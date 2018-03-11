import React from 'react';
import {Modal, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'; 
import DatePicker from '../DatePicker';
import moment from 'moment';


class EditModal extends React.Component {
    state={
        busTimes: ['9:00AM','12:00PM','3:00PM']        
    }

    render(){
        const {show, onHide, pickup} = this.props;
        const {busTimes} = this.state;

        return(
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton><Modal.Title>Edit Pickup</Modal.Title></Modal.Header>
                <Modal.Body>
                    <FormGroup controlId="editDriveForm">
                        <ControlLabel>Date</ControlLabel>
                        <DatePicker defaultValue={pickup.date}  onChange={this.setNewDate} />
                        <ControlLabel>Time</ControlLabel>
                        <FormControl componentClass="select" defaultValue={pickup.time} onChange={event => this.setNewTime(event.target.value)}>
                            {busTimes.map((time, i) => (
                                <option key={i}>{time}</option>
                            ))}
                        </FormControl>
                        <ControlLabel>Location</ControlLabel>
                        <FormControl type="text" defaultValue={pickup.place} onChange={event => this.setNewPlace(event.target.value)}></FormControl>
                        <ControlLabel>No. People</ControlLabel>
                        <FormControl type="number" defaultValue={pickup.people} min={1} max={12} onChange={event => this.setNewPeople(event.target.value)}></FormControl>
                    </FormGroup>
                    <Button bsStyle="primary" onClick={this.handleSubmit}>Add Pickup</Button>
                </Modal.Body>
            </Modal>
        )
    }
}

export default EditModal;