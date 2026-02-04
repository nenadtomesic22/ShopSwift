import { useState } from 'react'
import products from '../../../data/articlesList'

export default function ProductSearch({ onSelect }) {
  const [query, setQuery] = useState('')

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
        <button>Pretraži</button>
      </div>
    </div>
  )
}
