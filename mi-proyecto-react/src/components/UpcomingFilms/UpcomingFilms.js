import React, { Component } from 'react'
import CardPelicula from '../CardPelicula/CardPelicula';
import Header from '../Header/Header';

class UpcomingFilms extends Component {
    constructor(){
        super()
        this.state = {
            peliculas: [],
            cargado: true,
            peliculasTotal: [],
            pagina: 1,
            leyenda: null
            }
    }
    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=3121857c6caecb9647e73f983b58b116&language=en-US&page=${this.state.pagina}`)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                let peliculasAMostrar= data.results.slice(0,10)
                this.setState({  
                    peliculas: peliculasAMostrar,
                    peliculasTotal: data.results,
                    cargado: true,
                    pagina: this.state.pagina+1
                })
            })
            .catch( error => console.log(error))
            console.log(this.state.peliculas)
         }
            componentDidUpdate() {
                console.log('Me actualicé');
        }
        removerTarjetas(tarjetasId) {
            // Aca quiero filtrar el array de tarjetas y setear el estado nuevamente
            let resultados = this.state.peliculas.filter((element) => element.id !== tarjetasId)
            this.setState({
                peliculas: resultados
            })
        }
        cargarMasTarjetas(){    
            fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=3121857c6caecb9647e73f983b58b116&language=en-US&page=${this.state.pagina}`)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    let peliculasAMostrar= data.results.slice(0,10)
                    this.setState({
                        peliculas: this.state.peliculas.concat(peliculasAMostrar),
                        peliculasTotal:this.state.peliculasTotal.concat(peliculasAMostrar),
                        pagina: this.state.pagina+1
                    })
                })
                .catch( function (e){
                    console.log(e);
                })
        }

        filtrarPeliculas(textoRecibido){
            let filtrarBusqueda= this.state.peliculasTotal.filter((element)=>element.title.toLowerCase().includes(textoRecibido.toLowerCase())) 
            if (filtrarBusqueda == 0) {
                this.setState({leyenda:"No se encontraron resultados para tu busqueda."})
            } else{ this.setState({
                peliculas: filtrarBusqueda,
                leyenda: 1
            })}
            this.setState({
                peliculas: filtrarBusqueda
            })
        }

        render() {
            console.log('Me renderice');
            return (
                this.state.leyenda !== null ?
                <>
                <Header busqueda={(textoRecibido)=>this.filtrarPeliculas(textoRecibido)}/> 
                <h3 className='leyenda'>No se encontraron resultados para tu busqueda.</h3></>
                 : 
                <>
                <Header busqueda={(textoRecibido)=>this.filtrarPeliculas(textoRecibido)}/> 
                <button className="botonMasPeliculas" onClick={()=> this.cargarMasTarjetas()}>Cargar más películas</button>
                {this.state.cargado == false ?
                <p>Cargando...</p> :
                <div className='peliculas'>
                    { <ul className='lista peliculas'>
                        {
                            this.state.peliculas.map((element) => <CardPelicula key={element.id+element.nombre} info={element} removerTarjetas={(tarjetasId)=>this.removerTarjetas(tarjetasId)}/>)
                        }
                    </ul> }
                </div>}
                </>
            )
        }
    }
export default UpcomingFilms