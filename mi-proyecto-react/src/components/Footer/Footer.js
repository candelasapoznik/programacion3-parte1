import React from 'react';

function Footer(){
    return(
    <footer className="main-footer">
        <img src="../../../img/logo" alt="Logotipo Movie Browser" class="logo-footer"></img>
        <p className="derechos">© 2022 Movie Browser. All rights reserved.</p>
        <ul className="icons-redes">
            <li><a href="#"><span class="ion-social-facebook"><ion-icon name="logo-facebook"></ion-icon></span></a></li>
            <li><a href="#"><span class="ion-social-instagram"><ion-icon name="logo-instagram"></ion-icon></span></a></li>
            <li><a href="#"><span class="ion-social-linkedin"><ion-icon name="logo-linkedin"></ion-icon></span></a></li>
        </ul>
            <p className="nombres_developers">Por Agostina Maldonado, Candela Sapoznik y Matías Maldonado</p>
        </footer>
    )
}

export default Footer