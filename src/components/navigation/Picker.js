import React from 'react';
import { FormGroup, Form, Col, FormControl, ControlLabel } from 'react-bootstrap';
import moment from 'moment';
import DatePicker from '../DatePicker';

class Picker extends React.Component{
    state= {
        busTimes: ['9:00AM','12:00PM','3:00PM']    
    }

    componentDidMount(){
        this.props.setSelectedDate(moment(new Date).format('YYYY-MM-DD'));
    }

    
    render(){
        const {busTimes} = this.state;
        const {setSelectedDate, setSelectedTime} = this.props;
        

        return (
            <Form horizontal>
                <FormGroup controlId="pickerForm">
                    <Col componentClass={ControlLabel} sm={2}>Date</Col>
                    <Col sm={10}><DatePicker onChange={setSelectedDate}/></Col>
                    <Col componentClass={ControlLabel} sm={2}>Bus</Col>
                    <Col sm={10}><FormControl componentClass="select" onChange={setSelectedTime}>
                        {busTimes.map((time, i) => (
                            <option key={i}>{time}</option>
                        ))}
                    </FormControl></Col>
                </FormGroup>
            </Form>   
        )
    }
}

export default Picker;