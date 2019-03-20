import React, { Component } from 'react'

export default class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      status: true,
      id:''
    }
  }
  getValueInput =(event)=>{
    var name = event.target.name;
    var value = event.target.value;
    if(name==='status'){
      value= event.target.value==='true'? true:false
    }
    this.setState({
      [name] : value
    })
   
  }
  //WARNING! To be deprecated in React v17. Use componentDidMount instead.

  componentWillReceiveProps(nextProps){
    if(nextProps.setTaskEditing){
      this.setState({
        name: nextProps.setTaskEditing.name,
        status: nextProps.setTaskEditing.status,
        id: nextProps.setTaskEditing.id,
      })
    }
  }


  lockForm =(event) =>{
    event.preventDefault();
    // console.log(this.state)
    this.props.Submit(this.state)
    this.setState({
            name:'',
            status: true,
            id:'',
          })
          console.log('lockfor')
         
  }

  render() {
 
    return (
      
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">{this.state.id !==''? 'Cập nhật công việc':'Thêm công việc'}</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.lockForm}>
              <div className="form-group">
                <label>Tên</label>
                <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.getValueInput} />
              </div>
              <div className="form-group">
                <label >Trạng thái</label>
                <select id="input" className="form-control" name="status" value={this.state.status} onChange = {this.getValueInput}>
                  <option value="true">Kích hoạt</option>
                  <option value="false">Ẩn</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" value={true}>Lưu</button>&nbsp;
              <button type="button" className="btn btn-warning" onClick={this.props.cancelForm}>Đóng</button>
            </form>
          </div>
        </div>
      

    )
  }
}
