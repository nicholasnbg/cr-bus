import React, { Component } from 'react';
import { Grid, Row, Col, Clearfix, Button } from 'react-bootstrap';
import moment from 'react-moment';
import Header from './components/Header';
import Picker from './components/navigation/Picker';
import AddPickup from './components/navigation/AddPickup';
import Schedule from './components/schedule/Schedule';
import './App.css';
import './Custom.css';
import EditModal from './components/schedule/EditModal';

class App extends Component {
  state={
    selectedDate:'',
    selectedTime:'9:00AM',
    showAdd: false,
    showEdit: false,
    editPickup:{
      date: '',
      time: '',
      place: '',
      people: 0
    },
    pickups:{
      drive1:{
        date: '2018-03-10',
        time: '9:00AM',
        place: 'CR151',
        people: 3
      },
      drive2:{
        date: '2018-03-10',
        time: '12:00PM',
        place: 'CR122',
        people: 5
      },
      drive3:{
        date: '2018-03-11',
        time: '9:00AM',
        place: 'CR151',
        people: 3
      },
      drive4:{
        date: '2018-03-12',
        time: '12:00PM',
        place: 'CR122',
        people: 2
      }
    }
  }

  setSelectedDate = (value) => {
    this.setState({selectedDate: value});
  }
  setSelectedTime = (event) => {
    const newTime = event.target.value;
    this.setState({selectedTime: newTime});
  }
  /********************MODAL FUNCTIONS******************* */
  handleClose=()=>{
    this.setState({
      showAdd: false,
      showEdit: false
    });
  }
 
  showAddModal = () => { 
    console.log('show modal');
    this.setState({showAdd: true});
  }

  /*******ADD PICKUP************************************* */
  addPickup = (pickup) => {
    const pickups = {...this.state.pickups};
    const timestamp= Date.now();
    pickups[`pickup${timestamp}`]=pickup;
    this.setState({pickups});
    this.handleClose();
  }
  /*******EDIT PCKUP************************************** */
  showEditModal = (pickup, key) =>{
    this.setState({editPickup: pickup});
    this.setState({showEdit: true});    
  }
  editPickup = (pickup, key) => {

  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Grid>
          <Col sm={12} md={4}>
            <Picker 
            setSelectedDate={this.setSelectedDate}
            setSelectedTime={this.setSelectedTime}
            />
            <Button bsStyle="success" onClick={() => this.showAddModal()}>Add Pickup</Button>
          </Col>
          <Col sm={12} md={8}>
            <Schedule 
            pickups={this.state.pickups}
            date={this.state.selectedDate}
            time={this.state.selectedTime}
            showEditModal={this.showEditModal}
            />
          </Col>
        </Grid>
        <AddPickup
        show={this.state.showAdd}
        onHide={this.handleClose}
        addPickup={this.addPickup}
        />
        <EditModal
        show={this.state.showEdit}
        onHide={this.handleClose}
        pickup={this.state.editPickup}
        />
      </div>
    );
  }
}

export default App;
