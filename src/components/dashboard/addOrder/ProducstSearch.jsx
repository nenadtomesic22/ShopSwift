import { useState } from 'react'
import products from '../../../data/articlesList'
import { useRef } from 'react'
import Modal from '../../ui/Modal/Modal'
import SearchList from './SearchList.jsx'

export default function ProductSearch() {
  const [query, setQuery] = useState('')
  const searchRef = useRef(null)
  
  return (
    <div className="productSearch">
        <h4>Proizvodi</h4>
      <div className="searchRow">
        <input
          type="text"
          placeholder="Pretraži proizvode"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button  onClick={() => searchRef.current?.showModal()}>Pretraži</button>
        <Modal id='searchModal' modalRef={searchRef}>
          <SearchList />
        </Modal>
      </div>
    </div>
  )
}
