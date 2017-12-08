import React, { Component } from 'react';

class Submit extends Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <div className="pure-control-group">                                  
                <label></label> 
                <input type="submit" className={this.props.className} onClick={this.props.onClick} value={this.props.value}/> 
            </div>
        );
    }
}

export default Submit;