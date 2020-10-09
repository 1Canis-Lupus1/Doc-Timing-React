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
            sunday:[],
            errors:{}
        }
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    componentDidMount(){
        docData().then(response=>{
            console.log("Response",response.availability);
            response.availability.forEach(item=>{
                // console.log("From",item.from)
                // console.log("To",item.to);
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
        // console.log(e)
        if(e==="mon"){
        this.state.monday.splice(index,1);
        this.setState({monday: this.state.monday})
        }
        else if(e==="tues"){
            this.state.tuesday.splice(index,1);
            this.setState({tuesday: this.state.tuesday})
        }
        else if(e==="wed"){
            this.state.wednesday.splice(index,1);
            this.setState({wednesday: this.state.wednesday})
        }
        else if(e==="thrus"){
            this.state.thrusday.splice(index,1);
            this.setState({thrusday: this.state.thrusday})
        }
        else if(e==="fri"){
            this.state.friday.splice(index,1);
            this.setState({friday: this.state.friday})
        }
        else if(e==="sat"){
            this.state.saturday.splice(index,1);
            this.setState({saturday: this.state.saturday})
        }
        else if(e==="sun"){
            this.state.sunday.splice(index,1);
            this.setState({sunday: this.state.sunday})
        }
    }

    handleFrom(from){
        if(typeof from !== "undefined"){
            if(from > 12){
                return `${(from)-12} PM`;
            }
            else return `${from} AM`;
        }
    }

    handleTo(to){
        if(typeof to !== "undefined"){
            if(to > 12){
                return `${(to)-12} PM`;
            }
            else return `${to} AM`;
         }
    }


    handleSubmit(e){
        e.preventDefault();
        console.log("Saving and Displaying Data :");
        this.state.monday.forEach((item)=>{
            console.log(`Monday:- From:${item.from} -- To:${item.to}`)
        })
        this.state.tuesday.forEach((item)=>{
            console.log(`Tuesday:- From:${item.from} -- To:${item.to}`)
        })
        this.state.wednesday.forEach((item)=>{
            console.log(`Wednesday:- From:${item.from} -- To:${item.to}`)
        })
        this.state.thrusday.forEach((item)=>{
            console.log(`Thrusday:- From:${item.from} -- To:${item.to}`)
        })
        this.state.friday.forEach((item)=>{
            console.log(`Friday:- From:${item.from} -- To:${item.to}`)
        })
        this.state.saturday.forEach((item)=>{
            console.log(`Saturday:- From:${item.from} -- To:${item.to}`)
        })
        this.state.sunday.forEach((item)=>{
            console.log(`Sunday:- From:${item.from} -- To:${item.to}`)
        })
        this.state.monday.forEach((item)=>{
            console.log(`Monday:- From:${item.from} -- To:${item.to}`)
        })

    }

    render(){
        const myStyle={
            margin:"20px 50px"
        }
        return(
            <React.Fragment>
                <h1 style={myStyle}>Edit Doctor Timings</h1>
                <hr />
                <form onSubmit={this.handleSubmit}>
                <h2 style={myStyle}>Monday&nbsp;&nbsp;
                <button value="mon" onClick={(e)=>this.handleAdd(e)}>Add</button><hr/><br/></h2>
                {
                    this.state.monday.map((item,index)=>{
                        return(
                            <div style={myStyle} key={index} >
                                <input value={this.handleFrom(item.from)} />
                                <input value={this.handleTo(item.to)} />
                                <button onClick={(e)=> this.handleDelete("mon",index)}>Delete</button>
                            </div>
                        )
                    })
                }
                <hr/>
                <h2 style={myStyle}>Tuesday&nbsp;&nbsp;
                <button value="tues" onClick={(e)=>this.handleAdd(e)}>Add</button><hr/><br/></h2>
                {
                    this.state.tuesday.map((item,index)=>{
                        // console.log("Tues:",item,index)
                        return(
                            <div style={myStyle} key={index}>
                                <input value={this.handleFrom(item.from)} />
                                <input value={this.handleTo(item.to)} />
                                <button onClick={()=> this.handleDelete("tues",index)}>Delete</button>
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
                                <input value={this.handleFrom(item.from)} />
                                <input value={this.handleTo(item.to)} />
                                <button onClick={()=> this.handleDelete("wed",index)}>Delete</button>
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
                                <input value={this.handleFrom(item.from)} />
                                <input value={this.handleTo(item.to)} />
                                <button onClick={()=> this.handleDelete("thrus",index)}>Delete</button>
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
                                <input value={this.handleFrom(item.from)} />
                                <input value={this.handleTo(item.to)} />
                                <button onClick={()=> this.handleDelete("fri",index)}>Delete</button>
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
                                <input value={this.handleFrom(item.from)} />
                                <input value={this.handleTo(item.to)} />
                                <button onClick={()=> this.handleDelete("sat",index)}>Delete</button>
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
                                <input value={this.handleFrom(item.from)} />
                                <input value={this.handleTo(item.to)} />
                                <button onClick={()=> this.handleDelete("sun",index)}>Delete</button>
                            </div>
                        )
                    })
                }
                <hr /><hr/>
                <button style={myStyle} type="submit">Save Timings</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Timings;