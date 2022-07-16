import React from 'react'

const Pagination = ({profilePerPage, totalProfile,paginate}) => {
    let pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalProfile/profilePerPage);i++)
    {
        pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className='pagination'>
            {pageNumbers.map(num=>(
                <li onClick={() => paginate(num)} key={num} className='page-item'>
                    <a href='!#' className='page-link'>
                        {num}
                    </a>
                </li>
            ))}

        </ul>
    </nav>
  )
}

export default Pagination