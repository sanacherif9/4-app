import React, {Component} from "react";

class Program extends Component {
    
   bgcolor={background:this.props.bgcolor}
   txtcolor={color:this.props.txtcolor}
   bgcolor1={background:this.props.bgcolor1}
   txtcolor1={color:this.props.txtcolor1}
    render(props){
        
      return(
        <div className="program" style ={this.bgcolor}  >
       
           <h2 className="titre" style={this.txtcolor1}>{this.props.titre}</h2>
           <hr className="ligne"/>
           <div class="divider-white"></div>
          <h4 className="description1" style={this.txtcolor1}>{this.props.description}</h4>
          <h2 className="titre1" style={this.txtcolor}  >{this.props.bouton}</h2>
          
          </div>
      );
    }
}

export default Program ; 