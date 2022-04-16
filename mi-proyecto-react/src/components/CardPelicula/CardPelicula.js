import React, {Component} from 'react';

class CardPelicula extends Component{
    constructor(props){
        super(props)
        this.state = {
            viewMore: true,
            text: "Ver más",
        }
    }
    viewMore(){
        if(this.state.viewMore){
            this.setState({
                viewMore: false,
                text: "Ver menos"
            })
        } else {
            this.setState({
                viewMore: true,
                text: "Ver más"
            })
        }
    }
    render(){
        return (
            <div className= 'movie-card'>
                <div className='card-content'>
                    <img src={`https://image.tmdb.org/t/p/original${this.props.info.poster_path}`}alt="" />
                    <h4 className='nombrePelicula'>{this.props.info.title}</h4>
                    <p className='descripcionPelicula'> {this.props.info.overview} </p>
                    <button className='borrarYVerMas' onClick={()=>this.props.removerTarjetas(this.props.info.id)}>Borrar</button> {/* Aquí onClick necesita retornar la función con el parámetro pero no es necesario pasar el parámentro dentro de los () de la arrow functions. La arrow está para ejecutar el método que ya tiene el dato que necesita como parámetro.  */}
                    <button className='borrarYVerMas' onClick={()=>this.viewMore()}>{this.state.text}</button>
                    {this.state.viewMore == true ?
                    <p>  </p> :
                    <section className='verMas'>
                        <p>Release date: {this.props.info.release_date}</p>
                        <p>Vote average: {this.props.info.vote_average}</p>
                        <p>Popularity: {this.props.info.popularity}</p>
                    </section>}
                </div>
            </div>
        );
    }
}

export default CardPelicula