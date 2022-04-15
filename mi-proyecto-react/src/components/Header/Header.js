import React, { Component } from 'react'

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {
            movie: ''
        };
      }
    evitarSubmit(event) {
        event.preventDefault();
      }
      
    controlarCambios(event) {
        this.setState({movie: event.target.value},
          () => this.props.busqueda(this.state.movie));
      }
      render() {
        return(
        <header>
            <h1 className='titulo'>Movie browser</h1>
            <img src="../../../img/logo" alt="Logotipo Movie Browser" className="logo-header"></img>
            <section>
                <form className="buscador" onSubmit={(event)=>this.evitarSubmit(event)}>
                    <input type="text" placeholder='Nombre de la película' onChange={(event)=>this.controlarCambios(event)} value={this.state.movie} />
                    <input className="boton_search" type="submit" value="Submit" />
                </form>
            </section>
        </header>
        )
    }
}

export default Header