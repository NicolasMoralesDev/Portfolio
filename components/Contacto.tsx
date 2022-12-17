import React from 'react'

const Contacto = () => {
  return (
    <div className="flex p-5 contacto_container justify-center flex-col items-center gap-4 w-full h-1/5">
      <h2 className='text-4xl text-white'>Dejame tu Mensaje</h2>
      <div className='form_container flex items-center flex-col h-1/3 w-64 p-5   bg-red-800'>
        <form action="https://formsubmit.co/nicolasmoralesj03@gmail.com" method="POST" className=' text-white flex items-center flex-col gap-4'>
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
          <input type="hidden" name="_captcha" value="false"/>
          <input type="hidden" name="_autoresponse" value="tu mensaje personalizado"/>
          <input type="hidden" name="_template" value="table"/>
          <input type="hidden" name="_replyto"/>
          <input type="hidden" name="_next" value="https://portfolio-topaz-zeta-83.vercel.app/"/>

          <br />

        <button type="submit" className=' bg-green-500 rounded-lg w-full h-10 '>Enviar</button>
     
        </form>
      </div>

    </div>
  )
}

export default Contacto