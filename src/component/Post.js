import React, { Component } from 'react';
import {connect} from 'react-redux';
import { editPost  } from '../action/action';
import { deletePost  } from '../action/action';


class Post extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.post.title}</h2>
      <p>{this.props.post.message}</p>
      {/* <button onClick={ ()=> this.props.dispatch({type:'EDIT_POST',id:this.props.post.id}) }>Edit</button>  */}
      {/* <button onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>Delete</button> */}
      <button onClick={ ()=> this.props.editPost(this.props.post.id)}>Edit</button> 
      <button onClick={ ()=> this.props.deletePost(this.props.post.id)}>Delete</button> 
    </div>
  );
 }
}


const mapDispatchToProps = dispatch => ({
  editPost: (id) => dispatch(editPost(id)),
  deletePost: (id) => dispatch(deletePost(id)),
});


export default connect(null,mapDispatchToProps)(Post);