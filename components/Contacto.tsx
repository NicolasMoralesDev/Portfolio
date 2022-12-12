import React from 'react'

const Contacto = () => {
  return (
    <div className="flex p-5 contacto_container justify-center flex-col items-center gap-4 w-full h-1/5">
      <h2 className='text-4xl text-white'>Dejame tu Mensaje</h2>
      <div className='form_container flex items-center flex-col h-1/3 w-64 p-5  rounded-xl bg-red-800'>
        <form action="" method="post" className=' text-white flex items-center flex-col gap-4'>
          <label htmlFor="nombre">Nombre:
          <input type="text" name="nombre" id="nombre" placeholder='ingrese su nombre' required />
          </label>
          <label htmlFor="apellido">Apellido:
          <input type="text" name="apellido" id="apellido" placeholder='ingrese su apellido' required />

          </label>
          <label htmlFor="correo">Correo:
          <input type="email" name="correo" id="correo" placeholder='ingrese su correo' />
          </label>
          <label htmlFor="mensaje">Mensaje:
          <textarea name="consulta" id="consulta" required placeholder='ingrese su mensaje' ></textarea>

          </label>
          <br />
        <button type="submit" className='rounded-md bg-green-700 w-full h-10'>Enviar</button>
        </form>
      </div>

    </div>
  )
}

export default Contacto