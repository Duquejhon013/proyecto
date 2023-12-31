import{MdOutlineBedroomChild} from 'react-icons/md'
import{TbBathFilled} from 'react-icons/tb'
import{TbToolsKitchen2} from 'react-icons/tb'
import{RxRulerHorizontal} from 'react-icons/rx'
import{AiFillHeart} from 'react-icons/ai'
import ScrollArea from './Scrool'
import { Link } from "react-router-dom";


export  function Card() {
  return (
    <div className="flex flex-wrap justify-center  ">
     
     <div className="max-w-xs lg:max-w-sm bg-yellow-500 border border-yellow-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-6 lg:my-12 mx-12">
      <a href="#">
      <ScrollArea/>
      </a>
      <div className="p-2 my-6">
        <a href="#">
        <div className="flex flex-wrap mb-1">
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mr-4"> $4000.000.000 COP</p>
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white ml-28"> CC-1313</p>
      </div>
        
          <hr className=' text-gray-700 dark:text-gray-400'></hr>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">  Descripción Esta casa tiene dos pisos ademas de contar con un ,
         patio trasero demasiado grande con jardin de amapolas y con un mirador.

         
      </p>
      <hr className="my-4"></hr>

      <div className="flex items-center justify-center space-x-4">
          <MdOutlineBedroomChild size={32} color="white" />
          <span className="text-white">1</span>
          <TbBathFilled size={32} color="white" />
          <span className="text-white">2</span>
          <TbToolsKitchen2 size={32} color="white" />
          <span className="text-white">3</span>
          <RxRulerHorizontal size={32} color="white" />
          <span className="text-white">3 m²</span>
      </div>


        <hr className="my-4 decoration-sky-500"></hr>

                  <div className="flex items-center justify-between">
            <Link to={"/entro"}>
            <a href="#" className="inline-flex items-center px-2 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800 ml-32">
              Ver Más
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
            </Link>

            <div >
              <a href='#' className="inline-flex items-center space-x-2 mr-10  rounded-lg focus:ring-4 focus:outline-none  dark:focus:">
              <AiFillHeart size={40} className="text-white transition-colors hover:text-red-700"/>
              </a>
            </div>
          </div>
      </div>
    </div>


    {/*  card 2 */}

    <div className="max-w-xs lg:max-w-sm bg-yellow-500 border border-yellow-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-6 lg:my-12 mx-12">
      <a href="#">
      <ScrollArea/>
      </a>
      <div className="p-2 my-6">
        <a href="#">
        <div className="flex flex-wrap mb-1">
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mr-4"> $4000.000.000 COP</p>
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white ml-28"> CC-1314</p>
      </div>
          <hr></hr>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">  Descripción Esta casa tiene dos pisos ademas de contar con un ,
         patio trasero demasiado grande con jardin de amapolas y con un mirador.

         
      </p>
      <hr className="my-4"></hr>

      <div className="flex items-center justify-center space-x-4">
          <MdOutlineBedroomChild size={32} color="white" />
          <span className="text-white">2</span>
          <TbBathFilled size={32} color="white" />
          <span className="text-white">4</span>
          <TbToolsKitchen2 size={32} color="white" />
          <span className="text-white">1</span>
          <RxRulerHorizontal size={32} color="white" />
          <span className="text-white">20 m²</span>
      </div>


        <hr className="my-4"></hr>

                  <div className="flex items-center justify-between">
            <a href="#" className="inline-flex items-center px-2 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800 ml-32">
              Ver Más
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>

            <div >
              <a href='#' className="inline-flex items-center space-x-2 mr-10  rounded-lg focus:ring-4 focus:outline-none  dark:focus:">
              <AiFillHeart size={40} className="text-white transition-colors hover:text-red-700"/>
              </a>
            </div>
          </div>
      </div>
    </div>


{/*  card 3 */}

    <div className="max-w-xs lg:max-w-sm bg-yellow-500 border border-yellow-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-6 lg:my-12 mx-12">
      <a href="#">
      <ScrollArea/>
      </a>
      <div className="p-2 my-6">
        <a href="#">
        <div className="flex flex-wrap mb-1">
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mr-4"> $4000.000.000 COP</p>
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white ml-28"> CC-1315</p>
      </div>
          <hr></hr>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">  Descripción Esta casa tiene dos pisos ademas de contar con un ,
         patio trasero demasiado grande con jardin de amapolas y con un mirador.

         
      </p>
      <hr className="my-4"></hr>

      <div className="flex items-center justify-center space-x-4">
          <MdOutlineBedroomChild size={32} color="white" />
          <span className="text-white">4</span>
          <TbBathFilled size={32} color="white" />
          <span className="text-white">3</span>
          <TbToolsKitchen2 size={32} color="white" />
          <span className="text-white">2</span>
          <RxRulerHorizontal size={32} color="white" />
          <span className="text-white">32 m²</span>
      </div>


        <hr className="my-4"></hr>

                  <div className="flex items-center justify-between">
            <a href="#" className="inline-flex items-center px-2 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800 ml-32">
              Ver Más
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>

            <div >
              <a href='#' className="inline-flex items-center space-x-2 mr-10  rounded-lg focus:ring-4 focus:outline-none  dark:focus:">
              <AiFillHeart size={40} className="text-white transition-colors hover:text-red-700"/>
              </a>
            </div>
          </div>
      </div>
    </div>


{/*  card 4 */}


    <div className="max-w-xs lg:max-w-sm bg-yellow-500 border border-yellow-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-6 lg:my-12 mx-12">
      <a href="#">
      <ScrollArea/>
      </a>
      <div className="p-2 my-6">
        <a href="#">
        <div className="flex flex-wrap mb-1">
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mr-4"> $4000.000.000 COP</p>
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white ml-28"> CC-1316</p>
      </div>
          <hr></hr>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">  Descripción Esta casa tiene dos pisos ademas de contar con un ,
         patio trasero demasiado grande con jardin de amapolas y con un mirador.

         
      </p>
      <hr className="my-4"></hr>

      <div className="flex items-center justify-center space-x-4">
          <MdOutlineBedroomChild size={32} color="white" />
          <span className="text-white">1</span>
          <TbBathFilled size={32} color="white" />
          <span className="text-white">2</span>
          <TbToolsKitchen2 size={32} color="white" />
          <span className="text-white">3</span>
          <RxRulerHorizontal size={32} color="white" />
          <span className="text-white">3 m²</span>
      </div>


        <hr className="my-4"></hr>

                  <div className="flex items-center justify-between">
            <a href="#" className="inline-flex items-center px-2 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800 ml-32">
              Ver Más
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>

            <div >
              <a href='#' className="inline-flex items-center space-x-2 mr-10  rounded-lg focus:ring-4 focus:outline-none  dark:focus:">
              <AiFillHeart size={40} className="text-white transition-colors hover:text-red-700"/>
              </a>
            </div>
          </div>
      </div>
    </div>

{/*  card 5 */}

    <div className="max-w-xs lg:max-w-sm bg-yellow-500 border border-yellow-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-6 lg:my-12 mx-12">
      <a href="#">
      <ScrollArea/>
      </a>
      <div className="p-2 my-6">
        <a href="#">
        <div className="flex flex-wrap mb-1">
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mr-4"> $4000.000.000 COP</p>
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white ml-28"> CC-1317</p>
      </div>
          <hr></hr>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">  Descripción Esta casa tiene dos pisos ademas de contar con un ,
         patio trasero demasiado grande con jardin de amapolas y con un mirador.

         
      </p>
      <hr className="my-4"></hr>

      <div className="flex items-center justify-center space-x-4">
          <MdOutlineBedroomChild size={32} color="white" />
          <span className="text-white">1</span>
          <TbBathFilled size={32} color="white" />
          <span className="text-white">2</span>
          <TbToolsKitchen2 size={32} color="white" />
          <span className="text-white">3</span>
          <RxRulerHorizontal size={32} color="white" />
          <span className="text-white">3 m²</span>
      </div>


        <hr className="my-4"></hr>

                  <div className="flex items-center justify-between">
            <a href="#" className="inline-flex items-center px-2 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800 ml-32">
              Ver Más
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>

            <div >
              <a href='#' className="inline-flex items-center space-x-2 mr-10  rounded-lg focus:ring-4 focus:outline-none  dark:focus:">
              <AiFillHeart size={40} className="text-white transition-colors hover:text-red-700"/>
              </a>
            </div>
          </div>
      </div>
    </div>

    {/*  card 6 */}

    <div className="max-w-xs lg:max-w-sm bg-yellow-500 border border-yellow-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-6 lg:my-12 mx-12">
      <a href="#">
      <ScrollArea/>
      </a>
      <div className="p-2 my-6">
        <a href="#">
        <div className="flex flex-wrap mb-1">
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white mr-4"> $4000.000.000 COP</p>
        <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white ml-28"> CC-1318</p>
      </div>
          <hr></hr>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">  Descripción Esta casa tiene dos pisos ademas de contar con un ,
         patio trasero demasiado grande con jardin de amapolas y con un mirador.

         
      </p>
      <hr className="my-4"></hr>

      <div className="flex items-center justify-center space-x-4">
          <MdOutlineBedroomChild size={32} color="white" />
          <span className="text-white">1</span>
          <TbBathFilled size={32} color="white" />
          <span className="text-white">2</span>
          <TbToolsKitchen2 size={32} color="white" />
          <span className="text-white">3</span>
          <RxRulerHorizontal size={32} color="white" />
          <span className="text-white">3 m²</span>
      </div>


        <hr className="my-4"></hr>

                  <div className="flex items-center justify-between">
            <a href="#" className="inline-flex items-center px-2 py-2 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-orange-700 dark:focus:ring-blue-800 ml-32">
              Ver Más
              <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>

            <div >
              <a href='#' className="inline-flex items-center space-x-2 mr-10  rounded-lg focus:ring-4 focus:outline-none  dark:focus:">
              <AiFillHeart size={40} className="text-white transition-colors hover:text-red-700"/>
              </a>
            </div>
          </div>
      </div>
    </div>


  </div>
  )
}
export default Card;