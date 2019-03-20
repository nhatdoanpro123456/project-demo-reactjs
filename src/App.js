import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
const uuidv1 = require('uuid/v1');
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: true,
      taskEditing: null,
      key:''
    }
  }

componentWillMount() {
  if(localStorage && localStorage.getItem('tasks')){
    this.setState({
      tasks: JSON.parse(localStorage.getItem('tasks'))
    })
  }
  
}

onGenerate = () =>  {
  var task = [
    { 
      
      name: 'Học lập trình',
      status: true,
      id: uuidv1(),
     },
     { 
      
      name: 'Giải trí',
      status: false,
      id: uuidv1(),
     },
     { 
    
      name: 'Ngủ',
      status: true,
      id: uuidv1(),
     },
    
  ]
  this.setState({
    tasks:task
  });
 localStorage.setItem('tasks', JSON.stringify(task))
  
}
  
displayForm = () =>{
  this.setState({
    isDisplayForm: !this.state.isDisplayForm
  })
}

cancelForm =() =>{
  this.setState({
    isDisplayForm:false
  })
  console.log(this.state.isDisplayForm)
}

onSubmit = (data) =>{
  if(data.id === ''){
    data.id = uuidv1();
    var newTasks = this.state.tasks;
    newTasks.push(data)
      let index = this.finIndex(data.id)

      this.state.tasks[index] = data;
      this.setState({
        tasks:newTasks,
      })
      localStorage.setItem('tasks',JSON.stringify(newTasks))
      console.log(newTasks)
  }else{
      var task = this.state.tasks;
      let index = this.finIndex(data.id)
      task[index] = data
      this.setState({
        data: task
      })
      localStorage.setItem('tasks',JSON.stringify(task))
    }
    this.setState({
      taskEditing : null
    })
  }

finIndex =(id) =>{
  var i = -1;
  this.state.tasks.map((task,index) =>{
    if(task.id===id){
      // console.log(index)
      return i = index;
    }
  })
   return i ;
}

onEdit =(id) =>{
  var tasks = this.state.tasks;
  var index = this.finIndex(id);
  var taskEdit = tasks[index]
  this.setState({
    taskEditing: taskEdit
  },()=> console.log(this.state.taskEditing))
}
onDelete =(id) =>{
  var tasks = this.state.tasks;
  var index = this.finIndex(id);
  if(index!== -1){
    tasks.splice(index,1);
    this.setState({
      tasks:tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
}

// onSearch =(keyword) =>{
//   this.setState({
//     key:keyword
//   })
//   if(this.state.key){
//     this.setState({
//       tasks : this.state.tasks.filter(task => {
//         return task.name.toLowerCase().indexOf(this.state.key) !==-1
//     })
   
//     })
//   }
//   }

  render() {
    
    var displayForm = this.state.isDisplayForm;
    var elmForm = displayForm? <TaskForm Submit={this.onSubmit} cancelForm={this.cancelForm} setTaskEditing={this.state.taskEditing}/>:'';
    return (
      <div className="App">
        <h1>Quản lý công việc</h1>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {elmForm}
        </div>
        <div className={this.state.isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8":"col-xs-12 col-sm-12 col-md-12 col-lg-12"} >
          
            <div className="pannel">
              <div>
                <button type="button" className="btn btn-primary" onClick={this.displayForm}><span><i className="fas fa-plus" /></span> Thêm công việc</button>
                <button type="button" className="btn btn-success" onClick={this.onGenerate}>Get Generate</button>
              </div>
              {/*search*/}
              {/* <Search propSearch = {this.onSearch}/> */}
              
                {/*table*/}
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <TaskList propTask = {this.state.tasks} onEditApp={this.onEdit} onDeleteApp = {this.onDelete}/>
                    </div>
                </div>
              </div>
          </div>
      </div>

    );
  }
}

export default App;
