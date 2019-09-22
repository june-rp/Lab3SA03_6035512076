import React,{Component} from 'react';



export default class Content extends Component{
    construstor (){
        super()
        this.state={
            count:0
        }
    }
    addNum=()=>{
        this.setState({count:this.state.count+1})
    }
    render (){
        return(
            <div>
                <botton>onClick={this.addNum}>num{this.state.count}</botton>
            </div>
        )
    }
}
    