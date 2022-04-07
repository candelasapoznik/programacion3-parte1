import React from 'react';
import FilterMovie from './components/FilterMovie/FilterMovie'; 

function Header(){
    return(
    <header>
        <h1>Movie browser</h1>
        <section>
            <i class="fas fa-th"></i>
            <i class="fas fa-align-justify"></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search">
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
        </section>
    </header>
    )
}

export default Footer