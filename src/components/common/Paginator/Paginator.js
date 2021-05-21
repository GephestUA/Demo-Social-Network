import React, { useState } from 'react'
import style from './Paginator.module.css'

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChange, getUsers, portionSize = 10 }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize)
  let pages = []
  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let rightPortionPageNumber = portionNumber * portionSize
  let leftPortionPageNumber = rightPortionPageNumber - portionSize + 1

  const nextTargetPageClick = () => {
    setPortionNumber(portionNumber + 1)
    getUsers(leftPortionPageNumber + portionSize, pageSize)
  }
  const prevTargetPageClick = () => {
    setPortionNumber(portionNumber - 1)
    getUsers(leftPortionPageNumber - portionSize, pageSize)
  }

  return (
    <div>
      {portionNumber > 1 && <button onClick={prevTargetPageClick}>PREV</button>}
      {pages
        .filter((p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
        .map((p) => (
          <span className={currentPage === p ? style.selectedPage : ''} key={p} onClick={() => onPageChange(p)}>
            {p}
          </span>
        ))}
      {portionCount > portionNumber && <button onClick={nextTargetPageClick}>NEXT</button>}
    </div>
  )
}

export default Paginator
