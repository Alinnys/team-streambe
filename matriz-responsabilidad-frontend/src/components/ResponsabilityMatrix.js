import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Card,
    CardHeader,
    CardContent,
    Button,
    TextField,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    Snackbar,
    Alert
} from '@mui/material';

const ResponsibilityMatrix = () => {
    const [projects, setProjects] = useState([]);
    const [newProject, setNewProject] = useState({ nombre_proyecto: '', descripcion: '', fecha_inicio: '', fecha_fin: '' });
    const [newActivity, setNewActivity] = useState({ nombre_actividad:'', descripcion: '', id_proyecto: '' });
    const [error, setError] = useState(null);

    useEffect(() => {
    loadProjects();
    }, []);

    // Función para cargar proyectos con manejo de errores
    const loadProjects = async () => {
    try {
        const token = localStorage.getItem('token');
        const { data } = await
axios.get(`${process.env.REACT_APP_API_URL}/proyectos`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setProjects(data);
        } catch (error) {
            setError(`Error al cargar proyectos: ${error.message}`);
        }
    };

    // Función para agregar un nuevo proyecto
    const handleAddProject = async () => {
        try {
            const token = localStorage.getItem('token');
            await
axios.post(`${process.env.REACT_APP_API_URL}/proyectos`, newProject, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setNewProject({ nombre_proyecto: '', descripcion: '', fecha_inicio: '', fecha_fin: '' });
            loadProjects();
            } catch (error) {
                setError(`Error al agregar proyecto: ${error.message}`);
            }
        };
    return (
    <div style={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
        <Typography variant="h3" gutterBottom> Matriz de Responsabilidades</Typography>
        <Card style={{ marginBottom: '20px', padding: '16px' }}>
            <CardHeader title="Agregar Proyecto" />
            <CardContent>
                <TextField
                    fullWidth
                    label="Nombre del Proyecto"
                    value={newProject.nombre_proyecto}
                    onChange={(e) => setNewProject({ ...newProject, nombre_proyecto: e.target.value })}
                    margin="normal"
                    />
                <TextField
                    fullWidth
                    label="Descripción"
                    multiline
                    rows={4}
                    value={newProject.descripcion}
                    onChange={(e) => setNewProject({ ...newProject, descripcion: e.target.value })}
                    margin="normal"
                    />
                <TextField
                    fullWidth
                    label="Fecha de Inicio"
                    type="date"
                    value={newProject.fecha_inicio}
                    onChange={(e) => setNewProject({ ...newProject, fecha_inicio: e.target.value })}
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    />
                <TextField
                    fullWidth
                    label="Fecha de Fin"
                    type="date"
                    value={newProject.fecha_fin}
                    onChange={(e) => setNewProject({ ...newProject, fecha_fin: e.target.value })}
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                    />
                <Button
                    onClick={handleAddProject}
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '10px' }}
                    >
                Agregar Proyecto
                </Button>
            </CardContent>
        </Card>
            {/* Rest of the component rendering projects */}
        </div>
    );
};
export default ResponsibilityMatrix;