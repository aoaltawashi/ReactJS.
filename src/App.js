import React, { Component } from 'react';
import "./App.css";
import logo from './logo.svg';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    //fetch('mongodb+srv://aoaltawashi:Aa0533381842@cluster0-l5682.mongodb.net/test')

      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  handleChange = (e) => {
    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log();
  }

  render() {

    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...<br />
        Loadin...<br />
        Loadi...<br />
        Load...<br />
        Loa...<br />
        Lo...<br />
        L...<br />
        ...
    </div>;
    }
    else


      return (

        //////////////////////////////////////////////////
        <div className="App">

          <header className="App-header">
            <div classname="container">
              <h>Personal Data..</h>
            </div>
          </header>

          <form onSubmit={this.handleSubmit}>
            <label> Name * :</label><p />
            <input type="text" name="fname" id="name" required
              placeholder="Your name.. " onChange={this.handleChange} />

            <p>Date of Birth *:<p />
              <input type="date" equired
                placeholder="1/1/1900.. " onChange={this.handleChange} /></p>
            <p> Nationality * :<p />
              <input type="text" equired
                placeholder="Saudi.. " onChange={this.handleChange} /></p>
            <p>  Marital Status :<p />
              <input type="text" placeholder="single.. "
                onChange={this.handleChange} /></p>
            <p> address:<p />
              <input type="text"
                placeholder="Riyadh-Ar Rawdah.. " onChange={this.handleChange} /></p>
            <p>mobile *:<p />
              <input type="number" equired
                placeholder="0555555555.. " onChange={this.handleChange} /></p>
            <label> Email * :</label><p />
            <input type="email" name="email" id="num" required
              placeholder="example@example.com " onChange={this.handleChange} />

            <p>Scientific Qualification:<p />
              <input type="text" placeholder="Secondary,University.. "
                onChange={this.handleChange} /></p>
            <p>Average:<p />
              <input type="number" placeholder="3.5,4.. "
                onChange={this.handleChange} /></p>
            <p>Training Courses:<p />
              <input type="text" placeholder="Computer, English.. "
                onChange={this.handleChange} /></p>
            <p>Private skills:<p />
              <input type="text" placeholder="Flexibility to work.. "
                onChange={this.handleChange} /></p>
            <p>Languages:<p />
              <input type="text" placeholder="Arabic,English.. "
                onChange={this.handleChange} /></p>

            <p1> *Requieed Fields </p1><p />
            <button>submit</button>
          </form>
          <br />
          <br />
          <br />
          /////////here we include the data from API/////////
          <header className="App-header">
            <ul>{
              items.map(item => (
                <li key={item.id}>
                  Name: {items.name} | Email: {item.email}
                </li>
              ))
            };
        </ul>
          </header>
<br />
<br />
<br />

          /////////here we intoduce our team informations/////////

          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1> رؤية فريق العمل </h1>
            <p> العمل ضمن فريق تطوعي بشكل متناغم لاكتساب المهارات العملية المرصودة وتنفيذ المهام المسندة بفاعلية </p>
            <a
              className="App-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h> أعضاء الفريق </h>
              <p>عبدالكريم الطواشي – أنسام علي – مريم سليمان </p>
              <p>A@fortydays.com - للتواصل </p>
            </a>
          </header>


        </div>
      );
  }
}
export default App;