import React from 'react';
import FilterMovie from '../FilterMovie/FilterMovie'; 

function Header(){
    return(
    <header>
        <h1>Movie browser</h1>
        <section>
            <i class="fas fa-th"></i>
            <i class="fas fa-align-justify"></i>
            <FilterMovie filtrarPeliculas={(textoAEncontrar)=> this.filtrarPeliculas(textoAEncontrar)}/>
        </section>
    </header>
    )
}

export default Header