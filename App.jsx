import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import React, { useState } from 'react';
import './App.css'
import Home from './pages/Home'
import Acerca from './pages/Acerca'
import Contacto from './pages/Contacto'
import { Headers } from "./components/Headers"
import { Menu } from "./components/Menu"
import { Error404 } from "./pages/Error404"
import { Productos } from "./pages/Productos"
import { ProductoDetalle } from "./pages/ProductoDetalle"
import { Servicios } from "./pages/Servicios";
import { ServiciosGarantias } from "./pages/ServiciosGarantia";
import { ServiciosLista } from "./pages/ServiciosLista";
import { ServiciosPoliticas } from "./pages/ServiciosPoliticas";
import { ServiciosHome } from "./pages/ServiciosHome";
import { ServicioDetalle } from "./pages/ServicioDetalle";

function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Producto1', precio: 100 },
    { id: 2, nombre: 'Producto2', precio: 200 },
    { id: 3, nombre: 'Producto3', precio: 300 },
    { id: 4, nombre: 'Producto4', precio: 400 },
    { id: 5, nombre: 'Producto5', precio: 500 }
  ]);

  const [servicios, setServicios] = useState([
    { id: 1, nombre: 'Servicio1', precio: 100 },
    { id: 2, nombre: 'Servicio2', precio: 200 },
    { id: 3, nombre: 'Servicio3', precio: 300 },
    { id: 4, nombre: 'Servicio4', precio: 400 },
    { id: 5, nombre: 'Servicio5', precio: 500 }
  ]);
  return (
    <>
      <Headers />
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/acerca' element={<Acerca />} />
          <Route path='/abaut' element={<Navigate to="/acerca" />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/productos' element={<Productos productos={productos} />} />
          <Route path="/productos/:id" element={<ProductoDetalle productos={productos} />} />

          <Route path="/servicios" element={<Servicios/>}>
            <Route index element={<ServiciosHome/>}/>
            <Route path="/servicios/garantia" element={<ServiciosGarantias/>}/>
            <Route path="/servicios/lista" element={<ServiciosLista servicios={servicios}/>}/>
            <Route path="/servicios/:id" element={<ServicioDetalle servicios={servicios} />} />
            <Route path="/servicios/politicas" element={<ServiciosPoliticas/>}/>
          </Route>

          <Route path='*' element={<Error404 />} />

        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App;
