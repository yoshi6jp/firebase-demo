import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
<div className="container">
  <form>
    <div className="form-group row">
      <label htmlFor="date" className="col-2 col-form-label">測定日</label>
      <div className="col-10">
        <input name="date" 
         className="form-control" type="date" id="date" />
      </div>
    </div>
    <div className="form-group row">
      <label htmlFor="weight" className="col-2 col-form-label">体重</label>
      <div className="col-10">
        <input name="weight" 
         className="form-control" type="number" id="weight" />
      </div>
    </div>
    <div className='row'>
      <div className='offset-2 col-10'>
        <button className='btn btn-primary'>登録</button>
      </div>
    </div>
  </form>
</div>
    );
  }
}

export default App;
