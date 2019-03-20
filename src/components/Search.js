import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
    
  }
  
  onChange =(event) =>{
    var name = event.target.name;
    var value = event.target.value;
    this.setState({
      [name] : value
    })
  }

  onSearch = () =>{
    this.props.propSearch(this.state)
  }

  render() {
    return (
      <div className="mt-15">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <span className="input-group-btn">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Nhập..." name="keyword" 
              value={this.state.keyword} onChange={this.onChange}/> 
              <button type="button" className="btn btn-primary" onClick={this.onSearch}>
                <span><i className="fas fa-search" /></span> Tìm</button>
            </div>
          </span>
        </div>
</div>

      
    )
  }
}
