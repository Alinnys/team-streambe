import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
const Navbar = ({ user, onLogout }) => {
const [anchorEl, setAnchorEl] = useState(null);
const handleMenuOpen = (event) => {
setAnchorEl(event.currentTarget);
};
const handleMenuClose = () => {
setAnchorEl(null);
};
return (
<AppBar position="static" sx={{ bgcolor: '#222' }}>
<Toolbar>
<Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
<Button component={Link} to="/" color="inherit" sx={{

'&:hover': { bgcolor: '#333' } }}>

<Typography variant="button">Inicio</Typography>

</Button>
<Button component={Link} to="/proyectos" color="inherit"

sx={{ '&:hover': { bgcolor: '#333' } }}>

<Typography variant="button">Proyectos</Typography>
</Button>
{user?.rol === 'Administrador' && (
<Button component={Link} to="/matriz" color="inherit" sx={{

'&:hover': { bgcolor: '#333' } }}>

<Typography variant="button">Matriz</Typography>
</Button>
)}
</Box>
<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
{!user ? (
<>
<Button component={Link} to="/login" color="inherit"

sx={{ '&:hover': { bgcolor: '#333' } }}>

<Typography variant="button">Login</Typography>
</Button>
<Button component={Link} to="/signup" color="inherit"

sx={{ '&:hover': { bgcolor: '#333' } }}>

<Typography variant="button">Sign Up</Typography>
</Button>
</>
) : (
<>
<IconButton
size="large"
edge="end"
color="inherit"
onClick={handleMenuOpen}
sx={{ '&:hover': { color: 'secondary.main' } }}
>
<AccountCircle />
</IconButton>
<Menu
anchorEl={anchorEl}
open={Boolean(anchorEl)}
onClose={handleMenuClose}
anchorOrigin={{
vertical: 'top',
horizontal: 'right',

}}
transformOrigin={{
vertical: 'top',
horizontal: 'right',
}}
>
<MenuItem onClick={handleMenuClose}>Perfil</MenuItem>
<MenuItem onClick={onLogout}>Cerrar sesión</MenuItem>
</Menu>
</>
)}
</Box>
</Toolbar>
</AppBar>
);
};
export default Navbar;