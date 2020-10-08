import React,{Component} from 'react'

class Time extends Component {
    state = {
      timing: ['']
    }
  
    handleText = i => e => {
      let timing = [...this.state.timing]
      timing[i] = e.target.value
      this.setState({
        timing
      })
      console.log(this.state.timing)
    }
  
    handleDelete = i => e => {
      e.preventDefault()
      let timing = [
        ...this.state.timing.slice(0, i),
        ...this.state.timing.slice(i + 1)
      ]
      this.setState({
        timing
      })
    }
  
    addField = e => {
      e.preventDefault()
      let timing = this.state.timing.concat([''])
      this.setState({
        timing
      })
    }
  
    render() {
        const myBox={
            marginLeft:"40px"
        }
        const newField={
            margin: "10px 40px",
        }
      return (
        <React.Fragment>
            <h1 style={myBox}>Edit Doctor Timings</h1>
            <hr/>
            <h2 style={myBox}>Monday</h2>
            <button onClick={this.addField} style={newField}>Add</button><br />
          {this.state.timing.map((timing, index) => (
            <span key={index} style={myBox}>
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <button style={newField} onClick={this.handleDelete(index)}>Delete</button><br/>
            </span>
          ))}
          <h2 style={myBox}>Tuesday</h2>
            <button onClick={this.addField} style={newField}>Add</button><br />
          {this.state.timing.map((timing, index) => (
            <span key={index} style={myBox}>
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <button style={newField} onClick={this.handleDelete(index)}>Delete</button><br/>
            </span>
          ))}
          <h2 style={myBox}>Wednesday</h2>
            <button onClick={this.addField} style={newField}>Add</button><br />
          {this.state.timing.map((timing, index) => (
            <span key={index} style={myBox}>
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <button style={newField} onClick={this.handleDelete(index)}>Delete</button><br/>
            </span>
          ))}
          <h2 style={myBox}>Thursday</h2>
            <button onClick={this.addField} style={newField}>Add</button><br />
          {this.state.timing.map((timing, index) => (
            <span key={index} style={myBox}>
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <button style={newField} onClick={this.handleDelete(index)}>Delete</button><br/>
            </span>
          ))}
          <h2 style={myBox}>Friday</h2>
            <button onClick={this.addField} style={newField}>Add</button><br />
          {this.state.timing.map((timing, index) => (
            <span key={index} style={myBox}>
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <button style={newField} onClick={this.handleDelete(index)}>delete</button><br/>
            </span>
          ))}
          <h2 style={myBox}>Saturday</h2>
            <button onClick={this.addField} style={newField}>Add</button><br />
          {this.state.timing.map((timing, index) => (
            <span key={index} style={myBox}>
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <button style={newField} onClick={this.handleDelete(index)}>Delete</button><br/>
            </span>
          ))}
          <h2 style={myBox}>Sunday</h2>
            <button onClick={this.addField} style={newField}>Add</button><br />
          {this.state.timing.map((timing, index) => (
            <span key={index} style={myBox}>
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <input
                type="text"
                onChange={this.handleText(index)}
                value={timing}
              />
              <button style={newField} onClick={this.handleDelete(index)}>Delete</button><br/>
              <hr />
              <button style={newField} type="submit">Save</button>
            </span>
          ))}
          
        </React.Fragment>
      )
    }
  }

  export default Time;
// import React, { Component } from 'react';
// import TimeList from './timeList'

// class Time extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             timing: [{index: Math.random(),startTime:"",endTime:""}]
//         }
//     }

//     render() {
//         const myBox = {
//             border: "2px solid black",
//             margin: "40px 60px",
//             padding: "30px auto"
//         }
//         const titlePad={
//             padding:"0px 30px 0px 30px"
//         }
//         const btnMargin={
//             margin:"0px 40px"
//         }
//         return (
//             <React.Fragment>
//                 <form onSubmit={this.handleSubmit}>
//                     <h1 style={{marginLeft:"50px"}}>Edit Work Timings</h1>
//                     <hr />
//                     <div style={myBox}>
//                         <h2 style={titlePad}>Monday<button style={btnMargin} onClick={() => this.handleAdd()}>Add</button></h2>
//                         <hr />
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Starting Time</th>
//                                     <th>CLosing Time</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <TimeList add={this.addRow} timimg={this.state.timing}/>
//                             </tbody>
//                         </table>
//                         <hr />
//                         <h2 style={titlePad}>Tuesday<button  style={btnMargin}onClick={() => this.handleAdd()}>Add</button></h2>
//                         <hr />
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Starting Time</th>
//                                     <th>CLosing Time</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <TimeList add={this.addRow} timimg={this.state.timing}/>
//                             </tbody>
//                         </table>
//                         <hr />
//                         <h2 style={titlePad}>Wednesday<button style={btnMargin} onClick={() => this.handleAdd()}>Add</button></h2>
//                         <hr />
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Starting Time</th>
//                                     <th>CLosing Time</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <TimeList add={this.addRow} timimg={this.state.timing}/>
//                             </tbody>
//                         </table>
//                         <hr />
//                         <h2 style={titlePad}>Thursday<button style={btnMargin} onClick={() => this.handleAdd()}>Add</button></h2>
//                         <hr />
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Starting Time</th>
//                                     <th>CLosing Time</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <TimeList add={this.addRow} timimg={this.state.timing}/>
//                             </tbody>
//                         </table>
//                         <hr />
//                         <h2 style={titlePad}>Friday<button style={btnMargin} onClick={() => this.handleAdd()}>Add</button></h2>
//                         <hr />
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Starting Time</th>
//                                     <th>CLosing Time</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 <TimeList add={this.addRow} timimg={this.state.timing}/>
//                             </tbody>
//                         </table>
//                         <hr />
//                         <h2 style={titlePad}>Saturday<button style={btnMargin} onClick={() => this.handleAdd()}>Add</button></h2>
//                         <hr />
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Starting Time</th>
//                                     <th>CLosing Time</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {/* <TimeList add={this.addRow} delete={this.onDelete.bind(this)} timimg={this.state.timing}/> */}
//                             </tbody>
//                         </table>
//                         <hr />
//                         <h2 style={titlePad}>Sunday<button style={btnMargin} onClick={() => this.handleAdd()}>Add</button></h2>
//                         <hr />
//                         <hr />
//                         <button type="submit" style={{margin:"20px 30px"}}>Save</button>
//                     </div>
//                 </form>
//             </React.Fragment>
//         )
//     }
// }

// export default Time;