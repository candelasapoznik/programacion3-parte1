import React, {Component} from 'react';


class CardPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            viewMore: true,
            text: "Ver más",
            infoAdicionalTarjeta: ""
        }
    }
    viewMore(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text: this.state.text
            })
        } else {
            this.setState({
                viewMore: true,
                text: 'Ver menos'
            })            
        }
    }

    render(){
        return (
            <div className= 'movie-card'>
                <img src={`https://image.tmdb.org/t/p/original${this.props.info.poster_path}`}alt="" />
                <h4>{this.props.info.title}</h4>
                <button className='more' onClick={()=>this.viewMore()}>{this.state.text}</button>
                <p> {this.props.info.overview} </p>
                
                <button className='borrae' onClick={()=>this.props.removerTarjetas(this.props.info.id)}>Borrar</button> {/* Aquí onClick necesita retornar la función con el parámetro pero no es necesario pasar el parámentro dentro de los () de la arrow functions. La arrow está para ejecutar el método que ya tiene el dato que necesita como parámetro.  */}
            </div>
            
        );
    }
}

export default CardPelicula