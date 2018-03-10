import React from 'react';
import {FormControl} from 'react-bootstrap';
import moment from 'moment';

class DatePicker extends React.Component {
    render(){
        const {onChange} = this.props;
        return(
            <FormControl 
            className="datePicker"
            type='date'
            defaultValue={moment(new Date).format("YYYY-MM-DD")} 
            onChange={(event) => onChange(event.target.value) }>
            </FormControl>
        )
    }
}
export default DatePicker;