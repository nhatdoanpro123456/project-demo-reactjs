import React, { Component } from 'react'
import TaskListItem from './TaskListItem';

export default class TaskList extends Component {
  render() {
    var getTask = this.props.propTask;
    // console.log(getTask)
    var loopTask = getTask.map((task,index) =>{
      return <TaskListItem key={task.id} nameTask = {task} index={index} onEditTaskList={this.props.onEditApp} onDeleteTaskList = {this.props.onDeleteApp}/>
    })
    return (
        <table className="table table-hover">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên công việc</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
         {loopTask}
        </tbody>
      </table>
      
    )
  }
}
