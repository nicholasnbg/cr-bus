import React from 'react';
import {FormControl} from 'react-bootstrap';
import moment from 'moment';

class DatePicker extends React.Component {
    render(){
        const {onChange, defaultValue, isEdit} = this.props;
        return(
            <FormControl 
            className="datePicker"
            type='date'
            defaultValue={defaultValue ? defaultValue : moment(new Date).format("YYYY-MM-DD")} 
            onChange={(event) => isEdit ? onChange('date',moment(event.target.value).format("YYYY-MM-DD")) : onChange(event.target.value) }>
            </FormControl>
        )
    }
}
export default DatePicker;