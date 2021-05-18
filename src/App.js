
import React, { Component } from 'react';
import uuid from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// showing vs-code github setup
class App extends Component {
  state ={
    items:[{id:1, title: "wake up"},{id:2, title: "make breaskfast"}],
    id:uuid(),
    item:'',
    editItem:false
  };

  handleChange = (e) =>{console.log('handle changed')}
  handleSubmit = (e) =>{console.log('handle Submit ')}
  clearList = () =>{console.log('clear List ')}
  handleDelete = (id) =>{console.log(`handle Delete ${id}` )}
  handleEdit = (id) =>{console.log(`handle Edit ${id}` )}
  render(){

    

    return (
      <div>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} 
            handleEdit={this.state.editItem}/>
          <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
            </h3>
            
          </div>
         
        </div>
        </div>
      </div>
    );
  }
  
}

export default App;
