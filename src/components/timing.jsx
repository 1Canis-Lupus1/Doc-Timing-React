import React,{Component} from 'react';
import {docData} from '../http/http-calls';

class Timings extends Component{
    constructor(props){
        super(props);
        this.state={
            // days:{sunday:[],monday:[],tuesday:[],wednesday:[],thrusday:[],friday:[],saturday:[]}
            monday:[],
            tuesday:[],
            wednesday:[],
            thrusday:[],
            friday:[],
            saturday:[],
            sunday:[]
        }
    }

    componentDidMount(){
        docData().then(response=>{
            console.log("Response",response.availability);
            response.availability.forEach(item=>{
                // console.log("Day",item.day);
                if(item.day==="Monday"){
                    // console.log("In Condition",item.day)
                    this.setState({
                        monday: this.state.monday.concat(item) 
                    })
                }
                else if(item.day==="Tuesday"){
                    this.setState({
                        tuesday: this.state.tuesday.concat(item) 
                    })
                }
                else if(item.day==="Wednesday"){
                    this.setState({
                        wednesday: this.state.wednesday.concat(item) 
                    })
                }
                else if(item.day==="Thursday"){
                    this.setState({
                        thrusday: this.state.thrusday.concat(item) 
                    })
                }
                else if(item.day==="Friday"){
                    this.setState({
                        friday: this.state.friday.concat(item) 
                    })
                }
                else if(item.day==="Saturday"){
                    this.setState({
                        saturday: this.state.saturday.concat(item) 
                    })
                }
                else if(item.day==="Sunday"){
                    this.setState({
                        sunday: this.state.sunday.concat(item) 
                    })
                }
                });
                // console.log("State: ",this.state.sunday[0].to)
            })
        .catch(err=> console.log(err));
    }

    handleAdd(e){
        if(e.target.value==="mon"){
            this.setState({monday:[...this.state.monday,""]})
        }
        if(e.target.value==="tues"){
            this.setState({tuesday:[...this.state.tuesday,""]})
        }
        if(e.target.value==="wed"){
            this.setState({wednesday:[...this.state.wednesday,""]})
        }
        if(e.target.value==="thrus"){
            this.setState({thrusday:[...this.state.thrusday,""]})
        }
        if(e.target.value==="fri"){
            this.setState({friday:[...this.state.friday,""]})
        }
        if(e.target.value==="sat"){
            this.setState({saturday:[...this.state.saturday,""]})
        }
        if(e.target.value==="sun"){
            this.setState({sunday:[...this.state.sunday,""]})
        }
    }

    handleDelete(e,index){
        if(e.target.value==="mon"){
        this.state.monday.splice(index,1);
        this.setState({monday: this.state.monday})
        }
    }

    render(){
        const myStyle={
            margin:"20px 50px"
        }
        return(
            <React.Fragment style={{margin:"20px 50px"}}>
                <h1 style={myStyle}>Edit Doctor Timings</h1>
                <hr />
                <h2 style={myStyle}>Monday&nbsp;&nbsp;
                <button value="mon" onClick={(e)=>this.handleAdd(e)}>Add</button><hr/><br/></h2>
                {
                    this.state.monday.map((item,index)=>{
                        return(
                            <div style={myStyle} key={index} >
                                <input value={item.from} />
                                <input value={item.to} />
                                <button onClick={(e)=> this.handleDelete(e,index)}>Delete</button>
                            </div>
                        )
                    })
                }
                <hr/>
                <h2 style={myStyle}>Tuesday&nbsp;&nbsp;
                <button value="tues" onClick={(e)=>this.handleAdd(e)}>Add</button><hr/><br/></h2>
                {
                    this.state.tuesday.map((item,index)=>{
                        return(
                            <div style={myStyle} key={index}>
                                <input value={item.from} />
                                <input value={item.to} />
                                <button onClick={()=> this.handleDelete(index)}>Delete</button>
                            </div>
                        )
                    })
                }
                <hr />
                <h2 style={myStyle}>Wednesday&nbsp;&nbsp;
                <button value="wed" onClick={(e)=>this.handleAdd(e)}>Add</button><hr/><br/></h2>
                {
                    this.state.wednesday.map((item,index)=>{
                        return(
                            <div style={myStyle} key={index}>
                                <input value={item.from} />
                                <input value={item.to} />
                                <button onClick={()=> this.handleDelete(index)}>Delete</button>
                            </div>
                        )
                    })
                }
                <hr />
                <h2 style={myStyle}>Thrusday&nbsp;&nbsp;
                <button value="thrus" onClick={(e)=>this.handleAdd(e)}>Add</button><hr/><br/></h2>
                {
                    this.state.thrusday.map((item,index)=>{
                        return(
                            <div style={myStyle} key={index}>
                                <input value={item.from} />
                                <input value={item.to} />
                                <button onClick={()=> this.handleDelete(index)}>Delete</button>
                            </div>
                        )
                    })
                }
                <hr />
                <h2 style={myStyle}>Friday&nbsp;&nbsp;
                <button value="fri" onClick={(e)=>this.handleAdd(e)}>Add</button><hr/><br/></h2>
                {
                    this.state.friday.map((item,index)=>{
                        return(
                            <div style={myStyle} key={index}>
                                <input value={item.from} />
                                <input value={item.to} />
                                <button onClick={()=> this.handleDelete(index)}>Delete</button>
                            </div>
                        )
                    })
                }
                <hr />
                <h2 style={myStyle}>Saturday&nbsp;&nbsp;
                <button value="sat" onClick={(e)=>this.handleAdd(e)}>Add</button><hr/><br/></h2>
                {
                    this.state.saturday.map((item,index)=>{
                        return(
                            <div style={myStyle} key={index}>
                                <input value={item.from} />
                                <input value={item.to} />
                                <button onClick={()=> this.handleDelete(index)}>Delete</button>
                            </div>
                        )
                    })
                }
                <hr />
                <h2 style={myStyle}>Sunday&nbsp;&nbsp;
                <button value="sun" onClick={(e)=>this.handleAdd(e)}>Add</button><hr/><br/></h2>
                {
                    this.state.sunday.map((item,index)=>{
                        return(
                            <div style={myStyle} key={index}>
                                <input value={item.from} />
                                <input value={item.to} />
                                <button onClick={()=> this.handleDelete(index)}>Delete</button>
                            </div>
                        )
                    })
                }
                <hr /><hr/>
                <button style={myStyle}>Save Timings</button>
            </React.Fragment>
        )
    }
}

export default Timings;