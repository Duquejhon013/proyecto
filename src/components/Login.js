import React from 'react';
import{FcGoogle} from 'react-icons/fc'

export function  Login() {
  return (
  <div className="w-full h-screen flex items-start">
    <div className='relative w-10/12 h-full flex flex-col'>
        <div className='absolute top-[25%] left-[10%] flex flex-col'>
            <h1 className='tex-4x1 text-white font-bold my-4'>Turn Your Ideas into reality</h1>
            <p className='text-x1 text-white font-normal'>start for free and get attrative</p>
        </div>
        <img src='https://definicion.de/wp-content/uploads/2011/01/casa-2.jpg'
        className='w-full h-full object-cover '
        />
    </div>


    <div className='w-full h-full bg-white flex flex-col justify-between'>
        <h1 className='text-base text-black'>Brand</h1>


        <div className=' flex flex-col max-w-[550px]  mx-80'>
          <div className='w-full flex flex-col mb-2'>
            <h3 className='text-3x1 font-semibold mb-4 text-center'>Login</h3>
             <p className='text-base mb-2 text-center'>Bienvenidos ingrese sus detalles</p>
            </div>
            
         <div className='w-full flex flex-col'>
            <input 
            type='email'
            placeholder='Email'
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            />

           <input 
            type='Password'
            placeholder='Contraseña'
            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
            />
          </div>

         <div className='w-full flex items-center justify-between'>
            <div className='w-full flex items-center'>
                <input type='checkbox' className='w-4 h-4 mr-2'/>
                <p className='text-sm'>Recordar</p>
            </div>

            <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Recordar Contraseña</p>
         </div>

         <div className='w-full flex flex-col my-4'>
            <button className='w-full text-white my-2 bg-black rounded-md p-4 text-center flex items-center justify-center'>Iniciar Sesión</button>
            <button className='w-full text-black my-2 font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center'>Crear Cuenta</button>
         </div>
         </div>


         <div className='w-full flex items-center justify-center relative py-2'>
            <div className='w-10/12 h-[1px] bg-black'></div>
            <p className=' text-lg absolute text-black/80 bg-white'>Ingresa con </p>
         </div>

        <div className=''>
        <div className='w-1/2 text-black  font-semibold bg-white border-2 border-black rounded-md p-4 text-center flex items-center justify-center mx-64'>
       <FcGoogle size={32}/>
       Ingresar con GOOGLE
       </div>

        </div>
    
    

        
        

          <div className='w-full flex items-center justify-center p-12'>
          <p className='text-sm font-normal text-black'>No tienes Cuenta? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Crear tu Cuenta</span></p>
          </div>
         </div>
    </div>





   

    

 
  );
}

export default Login;
