import React, {Component} from "react";
class Ville extends Component{
    render(props){
        return(
            <div className="ville">
              <img src={this.props.photo} alt= ""/>
              <h2 className="nomville"> {this.props.nomVille}</h2>
            </div>
        );
    }
}
export default Ville ;