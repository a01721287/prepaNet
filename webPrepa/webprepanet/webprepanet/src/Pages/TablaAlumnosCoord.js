import React, { Component } from 'react';
import { Table, Form, Button, Container, Row, Col, Link } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "./TablaAlumnosCoord.css";
import styles from "./TablaAlumnosCoord.css";
import { FireStoreTablaAlumnosInfoCoordi, FireStoreTablaAlumnosPorTallerCoordi } from '../components/FireStoreData';
import { useGetDataCoordinador } from '../hooks/useGetData';
import { useLocation } from "react-router-dom";

function TablaAlumnosCoord() {

    //const [coordis] = useGetDataCoordinador();

    //const location = useLocation();

    //let campus = "";

    //for (let i = 0; i < coordis.length; i++) {
    //    if (coordis[i].value.correo_institucional == location.state.correo) {
    //        campus = coordis[i].value.campus
    //    }
    //}
    if (sessionStorage.getItem("rol") == "Coordi") {
        return (<>
            <FireStoreTablaAlumnosInfoCoordi />
            {/* <AddValueInscripcion /> */}
        </>
        );
    }
    else {
        return (
            <p style={{ color: "white" }}>No se puede compita</p>
        );
    }
}

export function TablaAlumnoCoordiTaller({ taller }) {
    if (sessionStorage.getItem("rol") == "Coordi") {
        return (
            <FireStoreTablaAlumnosPorTallerCoordi taller={taller} />
        );
    }
    else {
        return (
            <p style={{ color: "white" }}>No se puede compita</p>
        );
    }
}

export default TablaAlumnosCoord;
