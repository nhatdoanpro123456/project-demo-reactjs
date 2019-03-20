import React, { Component } from 'react'

export default class TaskListItem extends Component {

  onDeleteListItem =() => {
  
    // console.log(this.props.nameTask.id)
    this.props.onDeleteTaskList(this.props.nameTask.id)
  }

  onEditItem =() =>{
    this.props.onEditTaskList(this.props.nameTask.id)
  }
  render() {
    var Task = this.props.nameTask;
    return (
      
         <tr>
            <td>{this.props.index + 1}</td>
            <td>{Task.name}</td>
            <td>
              <span className={Task.status ? "label label-success": "label label-danger"}>{Task.status?"Kích hoạt":"Ẩn"}</span></td>
            <td>
              <button type="button" className="btn btn-success" onClick={this.onEditItem}><span><i className="fas fa-pencil-alt" /></span> Sửa</button>
              <button type="button" className="btn btn-warning" onClick={this.onDeleteListItem}><span><i className="fas fa-trash-alt" /></span> Xóa</button>
            </td>
          </tr>
      
    )
  }
}
