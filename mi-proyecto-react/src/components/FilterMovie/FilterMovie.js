import React, { Component } from 'react'

class FilterMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {valor: ''};
      }
    
      evitarSubmit(event) {
        event.preventDefault();
      }
    
      controlarCambios(event) {
        this.setState({valor: event.target.value},
            this.props.filtrarPeliculas(this.state.valor));
      }
    
      render() {
        return (
         <form onSubmit={(event)=>this.evitarSubmit(event)}>
           <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
           <input type="submit" value="Submit" />
         </form>
        )
        }
}    

export default FilterMovie