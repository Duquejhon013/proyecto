import React from 'react';
import{MdOutlineBedroomChild} from 'react-icons/md'
import{TbBathFilled} from 'react-icons/tb'
import{TbToolsKitchen2} from 'react-icons/tb'
import{RxRulerHorizontal} from 'react-icons/rx'


export function Entro() {
    return (
    
  
<div className=''>
  <div className='mx-40  h-40 bg-red-700'>
      <img src='https://definicion.de/wp-content/uploads/2011/01/casa-2.jpg' style={{ width: '100%', height: '350px' }} />

        <div className='flex flex-col'>
            <img src="/assets/logo.jpg" class="h-14 mr-3" alt="Inmovilla Logo"  style={{ width: '8%', height: '120px' }}/>
        </div>
       
            <div className='-my-28 mx-5 '>
                <div className="flex  ml-32">
                     <p className=''>Casa de Campo</p> 
                    <p className='ml-56 text-lg font-bold'>CC-1313</p> 
                 </div>
                        <div className='flex space-x-4  my-5 ml-32'>
                            <MdOutlineBedroomChild size={32} color="black" />
                                 <span className="text-black">1</span>
                                <TbBathFilled size={32} color="black" />
                                <span className="text-black">2</span>
                                <TbToolsKitchen2 size={32} color="black" />
                                <span className="text-black">3</span>
                                <RxRulerHorizontal size={32} color="black" />
                                <span className="text-black">3 m²</span>
                        </div>
                        
                    </div>
                
            </div>

</div>

    );
  }
  
  export default Entro;