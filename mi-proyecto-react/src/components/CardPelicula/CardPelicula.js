import React, {Component} from 'react';


class CardPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className= 'character-card'>
                <img src={`https://image.tmdb.org/t/p/original${this.props.info.poster_path}`}alt="" />
                <h4>{this.props.info.title}</h4>
                <p> {this.props.info.overview} </p>
                <button className='more' onClick={()=>this.props.removerTarjetas(this.props.info.id)}>Borrar</button> {/* Aquí onClick necesita retornar la función con el parámetro pero no es necesario pasar el parámentro dentro de los () de la arrow functions. La arrow está para ejecutar el método que ya tiene el dato que necesita como parámetro.  */}
            </div>
            
        );
    }
}

export default CardPelicula