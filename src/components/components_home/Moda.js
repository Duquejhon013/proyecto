
import React from 'react';

export function Moda() {
  return (
    <div className='bg-slate-900 h-40 relative'>
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="bg-white rounded-lg inset-0 flex justify-end p-4 mt-52 ml-96   bg-opacity-50">
        <img className="rounded-t-lg p-1" src="/assets/moda.png" alt=""  style={{ width: '100%', height: '100px' }} />
        <img className="rounded-t-lg p-1" src="/assets/moda.png" alt=""  style={{ width: '100%', height: '100px' }} />
        <img className="rounded-t-lg p-1 " src="/assets/moda.png" alt=""  style={{ width: '100%', height: '100px' }} />
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
  <a>
    <button className='rounded-3xl w-28 bg-blue-500 bg-opacity-80 mt-96 mr-64 hover:bg-opacity-40 dark:hover:bg-opacity-40 dark:hover:bg-orange-700 text-white'>
      Siguiente
    </button>
  </a>
</div>
      <img className="rounded-t-lg" src="/assets/moda.png" alt="" style={{ width: '100%', height: '400px' }} />
    </div>
  );
}

export default Moda;
