import '/src/index.css'
import Header from "./Header"
import React from 'react'

export function Home() {
    return (
        <React.StrictMode>
            <Header />
            <div className='container'>
                <img className='logo' src="/src/images/logosinfondo.png" alt="Logo Luna En Tauro" />
                <h1>Bienvenidos a Luna en Tauro</h1>
            </div>
        </React.StrictMode >
    )
}