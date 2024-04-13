import { useSelector } from 'react-redux';

function Card() {
    const user = useSelector((state) => state.user)

    return (
        <div className='card'>
            <p>Nombre: {user.name}</p>
            <p>Nombre de usuario: {user.username}</p>
            <p>Seguidores: {user.followers}</p>
            <p>Repositorios públicos: {user.publicRepositories}</p>
            <img src={user.image} alt="foto perfil"/>
        </div>
        )
    }

    export default Card