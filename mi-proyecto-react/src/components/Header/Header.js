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
            <div className='logoytitulo'>
            <img src='https://cdn.pixabay.com/photo/2016/03/31/18/36/cinema-1294496__340.png' alt="Logotipo Movie Browser" className="logo-header"></img>
            <h1 className='titulo'>Movie browser</h1>
            </div>
            <section>
                <form className="buscador" onSubmit={(event)=>this.evitarSubmit(event)}>
                    <input className="buscadorTexto" type="text" placeholder='Nombre de la película' onChange={(event)=>this.controlarCambios(event)} value={this.state.movie} />
                    <input className="boton_search" type="submit" value="Buscar" />
                </form>
            </section>
        </header>
        )
    }
}

export default Header