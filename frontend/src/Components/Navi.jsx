import React from 'react'

export const Navi = () => {
    return (
        <nav className="col-2 d-flex flex-column p-3 bg-dark" style={{ minHeight: "100vh" }}>
            <h4 className="mb-4 text-light">Data-Up</h4>
            <ul className="nav flex-column">
                <li className="nav-item mb-2">
                    <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link" href="#">Proyectos</a>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link" href="#">Datos</a>
                </li>
                <li className="nav-item mb-2">
                    <a className="nav-link" href="#">Configuración</a>
                </li>
            </ul>
        </nav>
    )
};
