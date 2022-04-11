import React, { Component } from 'react'

class UpcomingFilms extends Component {
    constructor(){
        super()
        this.state = {
            peliculas: [],
            cargado: true,
            peliculasTotal: []
        }
    }
    componentDidMount(){
        console.log('');
        let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=3121857c6caecb9647e73f983b58b116&language=en-US&page=1';
        console.log(url)
        fetch(url)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                this.setState({
                    peliculas: data.results,
                    peliculasTotal: data.results,
                    cargado: true
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
        cargarTarjetas() {
            let resultados = this.state.peliculasTotal
            this.setState({
                peliculas: resultados
        })
        }
        filtrarPeliculas(textoRecibido){
            let filtrarBusqueda= this.state.peliculas.filter((element)=>element.name.toLowerCase().includes(textoRecibido.toLowerCase)) 
            this.setState({
                peliculas: filtrarBusqueda
            })
        }
        render() {
            console.log('Me renderice');
            return (
                this.state.cargado == false ?
                <p>Cargando...</p> :
                <div>
                       <button onClick={()=>this.cargarTarjetas()}>Cargar mas peliculas</button>
                    {/* <ul>
                        {
                            this.state.peliculas.map((element) => <CardPelicula key={element.id+element.nombre} info={element} removerTarjetas={(tarjetasId)=>this.removerTarjetas(tarjetasId)}/>)
                        }
                    </ul> */}
                </div>
    
            )
        }
    }
export default UpcomingFilms