import React from 'react';
import {Modal, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap'; 
import DatePicker from '../DatePicker';
import moment from 'moment';


class EditModal extends React.Component {
    state={
        busTimes: ['9:00AM','12:00PM','3:00PM']
    }


    setEditedDate = (value) => {
        let pickup = {...this.state.editedPickup};
        pickup.date=value;
        this.setState({editedPickup: pickup});
    }

    setEditedVal = (key, value) => {
        console.log('setting edited val');
        let pickup = {...this.state.editedPickup};
        pickup[key]=value;
        this.setState({editedPickup: pickup});
        console.log(this.state.editedPickup);
    }

    render(){
        const {show, onHide, pickup, editVal, handleSubmit} = this.props;
        const {busTimes} = this.state;


        return(
            <Modal show={show} onHide={onHide}>
                <Modal.Header closeButton><Modal.Title>Edit Pickup</Modal.Title></Modal.Header>
                <Modal.Body>
                    <FormGroup controlId="editDriveForm">
                        <ControlLabel>Date</ControlLabel>
                        <DatePicker 
                        defaultValue={pickup.date}
                        onChange={editVal} 
                        isEdit={true}
                        />
                        <ControlLabel>Time</ControlLabel>
                        <FormControl componentClass="select" value={pickup.time} onChange={event => editVal('time', event.target.value)}>
                            {busTimes.map((time, i) => (
                                <option key={i}>{time}</option>
                            ))}
                        </FormControl>
                        <ControlLabel>Location</ControlLabel>
                        <FormControl type="text" value={pickup.place} onChange={event => editVal('place', event.target.value)}></FormControl>
                        <ControlLabel>No. People</ControlLabel>
                        <FormControl type="number" value={pickup.people} min={1} max={12} onChange={(event)=>editVal('people', event.target.value)}></FormControl>
                    </FormGroup>
                    <Button bsStyle="primary" onClick={handleSubmit}>Edit Pickup</Button>
                </Modal.Body>
            </Modal>
        )
    }
}

export default EditModal;