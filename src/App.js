import React, { Component } from 'react';
import { Grid, Col, Button } from 'react-bootstrap';
import Header from './components/Header';
import Picker from './components/navigation/Picker';
import AddPickup from './components/navigation/AddPickup';
import Schedule from './components/schedule/Schedule';
import firebase from './firebase';
import './App.css';
import './Custom.css';
import EditModal from './components/schedule/EditModal';

class App extends Component {
  state={
    selectedDate:'',
    selectedTime:'9:00AM',
    showAdd: false,
    showEdit: false,
    editPickupKey: '',
    editPickup:{
      date: '',
      time: '',
      place: '',
      people: 0
    },
    pickups:{
     
    }
  }



  
  /***********************LIFE CYCLE FUNCTIONS************ */
  componentDidMount(){
    const pickupsRef = firebase.database().ref();
    pickupsRef.on('value', (snapshot) => {
      console.log(snapshot.val())
      let pickups = snapshot.val();
      let newState = {};
      for(let pickup in pickups) { 
        newState[pickup] = pickups[pickup];
      }
      this.setState({pickups: newState});
    })
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
    const timestamp= Date.now();
    const pickupsRef = firebase.database().ref(`pickup${timestamp}`).set(pickup);    
    this.handleClose();
  }
  /*******EDIT PCKUP************************************** */
  showEditModal = (pickup, key) =>{
    this.setState({
      editPickup: pickup,
      editPickupKey: key
    });
    this.setState({showEdit: true});    
  }
  updateEditedVal = (key, value) => {
    let pickup = this.state.editPickup;
    pickup[key]=value;
    this.setState({editPickup: pickup});
  }

  handleEditSubmit = () => {
    this.editPickup(this.state.editPickupKey, this.state.editPickup);
  }
  editPickup = (key, pickup) => {
    const pickupsRef = firebase.database().ref(key).set(pickup);
    this.handleClose();
  }

  /*************DELETE PICKUP***************************** */
  deletePickup = (key) => {
    if(window.confirm("Are you sure you want to delete this?")){
      const pickupsRef = firebase.database().ref(key).remove();      
    };
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
            <Button bsStyle="success" 
            onClick={() => this.showAddModal()}>
            Add Pickup
            </Button>
          </Col>
          <Col sm={12} md={8}>
            <Schedule 
            pickups={this.state.pickups}
            date={this.state.selectedDate}
            time={this.state.selectedTime}
            showEditModal={this.showEditModal}
            deletePickup={this.deletePickup}
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
        editVal={this.updateEditedVal}
        onHide={this.handleClose}
        pickup={this.state.editPickup}
        handleSubmit={this.handleEditSubmit}
        />
      </div>
    );
  }
}

export default App;
