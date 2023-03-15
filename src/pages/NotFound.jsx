import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
          <h1>Erreur 404</h1>
          <Link to="/">
            <button>Retour à l'accueil <i className='fas fa-home'></i></button>
          </Link>
          </div>
    );
};

export default NotFound;