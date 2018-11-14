import React, {Component}from "react";
class Statistic extends Component{
render(props){
    return(
        <div className="statistic">
         <h3 className="number">{this.props.number}</h3>
         <h3 className="description">{this.props.description}</h3>

        </div>

    );
 }
}
export default Statistic;