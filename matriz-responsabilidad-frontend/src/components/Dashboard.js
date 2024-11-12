import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ user }) => {
    const [proyectos, setProyectos] = useState([]);
    const navigate = useNavigate();

useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:4000/api/proyectos', {
        headers: { Authorization: token }
    })
    .then(response => setProyectos(response.data))
    .catch(error => console.error('Error al obtener proyectos:', error));
        }, []);
    return (
    <div>
        <h1>Bienvenido, {user?.nombre_usuario}</h1>
            {user?.rol === 'admin' && <p>Eres administrador.</p>}
        <ul>
            {proyectos.map(proyecto => (
            <li key={proyecto.id} onClick={() =>    
        navigate(`/proyectos/${proyecto.id}`)}>
                {proyecto.nombre} - {proyecto.estado}
            </li>
            ))}
        </ul>
    </div>
    );
};

export default Dashboard;