
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

// showing vs-code github setup
class App extends Component {
  state ={
    items:[],
    id:uuidv4(),
    item:'',
    editItem:false
  };

  handleChange = (e) =>{this.setState({ item: e.target.value})};

  handleSubmit = (e) =>{
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title:this.state.item
    }
    const updatedItems = [...this.state.items,newItem]

    this.setState({
      items:updatedItems,
      item:'',
      id:uuidv4(),
      editItem:false
    })
  }
  clearList = id =>{
   this.setState({
     items:[]
   });
  };

  handleDelete = id =>{
    const filteredItems = this.state.items.filter(item=>
      item.id !== id);
      this.setState({
        items:filteredItems
      });
  };

  handleEdit = id =>{
    const filteredItems = this.state.items.filter(item=>
    item.id !== id);
    const seletedItem = this.state.items.find(item=>
      item.id === id);
    this.setState({
      items:filteredItems,
      item:seletedItem,
      id:id,
      editItem:true
    });}
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

// ppp