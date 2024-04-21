import React from 'react'

const Pronav = () => {
  return (
    <nav className="bg-white w-max z-20 mt-5 shadow-lg items-center justify-between rounded-3xl flex">
      <ul className="flex flex-col px-4 py-2  mt-4 font-medium border border-gray-100 rounded-3xl bg-gray-50 space-x-2  md:flex-row md:mt-0 md:border-0 md:bg-white">
        <li className="bg-[#377DFF] text-white px-3 py-2 rounded-3xl">
          Aperçu
        </li>
        <li className="bg-[#FFFFFF] border border-[#DBDBDB] text-black px-3 py-2 rounded-3xl">
          Détails
        </li>
        <li className="bg-[#FFFFFF] border border-[#DBDBDB] text-black px-3 py-2 rounded-3xl">
          Localisation
        </li>
        <li className="bg-[#FFFFFF] border border-[#DBDBDB] text-black px-3 py-2 rounded-3xl">
          Visite virtuelle
        </li>
      </ul>
    </nav>
  )
}

export default Pronav
