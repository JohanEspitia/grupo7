import React from 'react'
import { useForm } from "react-hook-form"
import { Navigate, Routes, Route, useNavigate } from 'react-router-dom'


export function CreacionOrdenes() {
  const navigate = useNavigate();
  const handleSubmit = (e)=>{
    e.preventDefault()
    navigate('/ListaOrdenes')
}
  return (
    <section className="page-section bg-white" id="create">
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            {/* <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image">
                <img src="./register.jpg" width="100%" height="80%" alt="" />
              </div> */}
              <div className="col-lg-12">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Registro de Órdenes (Recogida)</h1>
                  </div>
                  <form className="orden" onSubmit={handleSubmit}>
                  <div className="form-group row" align="left">
                  <label className="col-sm-2 col-form-label">Fecha y hora</label>                    
                  <div className="col-sm-10">
                      <input
                      type="datetime-local"
                      />
                  </div>
                  </div> 
                  <div className="row">
                    <div className="col-md-3">
                      <input type="text" className="form-control" placeholder="Largo"/>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="form-control" placeholder="Ancho"/>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="form-control" placeholder="Alto"/>
                    </div>
                    <div className="col-md-3">
                      <input type="text" className="form-control" placeholder="Peso"/>
                    </div>
                  </div>
                  <br />
                  
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Dirección Recogida</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="address1" 
                        placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Ciudad Recogida</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="city1" 
                        placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Nombre Destinatario</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Cédula / NIT destinatario</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="identification" 
                        placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Dirección entrega</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="address2" 
                        placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-2 col-form-label">Ciudad entrega</label>
                      <div className="col-sm-10">
                        <input 
                        type="text" 
                        className="form-control" 
                        id="city2" 
                        placeholder=""
                        />
                      </div>
                    </div>
                    
                    <button
                      className="btn btn-primary btn-block books-home__create"
                    >
                      Crear Orden
                    </button>
                  </form>
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* </div> */}
    </section>
  )
}