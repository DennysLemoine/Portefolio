import React from "react";
import {Link} from "react-router-dom";

import error from './error.css'

function Error() {
    return(
        <div className='divError'>
            <h2 className='error404'>404</h2>
            <p className='errorP'>On s'égare 😱 ?<br/>J'apprécie tout particulièrement votre volonté d'aventurier, à aller aux endroits où personne ne va !<br/> Mais là, c'est une page non existante !</p>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error