import React from 'react';
import FilterMovie from '../FilterMovie/FilterMovie'; 

function Header(){
    return(
    <header>
        <h1 className='titulo'>Movie browser</h1>
        <img src="../../../img/logo" alt="Logotipo Movie Browser" class="logo-header"></img>
        <section>
            <FilterMovie filtrarPeliculas={(textoAEncontrar)=> this.filtrarPeliculas(textoAEncontrar)}/>
        </section>
    </header>
    )
}

export default Header