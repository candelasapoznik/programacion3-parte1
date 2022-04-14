import React, { Component } from 'react'
import CardPelicula from '../CardPelicula/CardPelicula';
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
        addMore(){
            let url = this.state.nextUrl;
    
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    this.setState({
                        peliculas: this.state.peliculas.concat(data.results),
                        nextUrl: data.info.next,  //Para tener la página siguiente.
                    })
                })
                .catch( function (e){
                    console.log(e);
                })
        }
        cargarTarjetas() {
            let resultados = this.state.peliculasTotal
            this.setState({
                peliculas: resultados
        })
        }
        viewMore(){
            if(this.state.viewMore){
                this.setState({
                    viewMore: false,
                    text: 'Ver más'
                })
            } else {
                this.setState({
                    viewMore: true,
                    text: 'ver menos'
                })            
            }
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
                       <button className='more' onClick={()=>this.viewMore()}>{this.state.text}</button>
                    { <ul>
                        {
                            this.state.peliculas.map((element) => <CardPelicula key={element.id+element.nombre} info={element} removerTarjetas={(tarjetasId)=>this.removerTarjetas(tarjetasId)}/>)
                        }
                    </ul> }
                </div>
    
            )
        }
    }
export default UpcomingFilms