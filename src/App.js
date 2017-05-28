import React, { Component } from 'react';
import './App.css';

import C3Chart from 'react-c3js';
import 'c3/c3.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      date: '',
      weight: ''
    };
  }
  render() {
    return (
<div className="container">
  <form onSubmit={this.handleSubmit}>
    <div className="form-group row">
      <label htmlFor="date" className="col-2 col-form-label">測定日</label>
      <div className="col-10">
        <input name="date" 
         onChange={this.handleChange} 
         value={this.state.date}
         className="form-control" type="date" id="date" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="weight" className="col-2 col-form-label">体重</label>
      <div className="col-10">
        <input name="weight" 
         onChange={this.handleChange} 
         value={this.state.weight}
         className="form-control" type="number" id="weight" />
      </div>
    </div>
    <div className='row'>
      <div className='offset-2 col-10'>
        <button className='btn btn-primary'>登録</button>
      </div>
    </div>
  </form>
  <Chart items={this.props.items} />
</div>
    );
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    let {weight, date} = this.state
    if(!weight || !date){
      return
    }
    let newItem = {
      date,
      weight
    }
    this.setState((prevState) => ({
      weight: '',
      date: ''
    }));
    this.props.items.push(newItem)
  }
}

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.axis = {
      x: {
        type: 'timeseries',
        tick: {
          format: '%Y-%m-%d'
        }
      }
    }
    this.state = {
      data: this.convertData([]) 
    }
  }
  convertData(items){
    return {
      x: "x",
      columns: [
        ['x',].concat(items.map(item => item.date)),
        ['体重'].concat(items.map(item => item.weight))
      ]
    }
  }
  componentDidMount() {
    this.props.items.on('value', (ss)=> {
      let items = Object.values(ss.val()||{})
      let data = this.convertData(items)
      this.setState({data})
    })
  }
  componentWillUnmount() {
    this.props.items.off()
  }
  render() {
    return (
      <C3Chart data={this.state.data} axis={this.axis}/>
    );
  }
}
export default App;
