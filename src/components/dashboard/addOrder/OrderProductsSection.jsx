import './orderProductsSection.css'
import { useState } from 'react'
import ProductSearch from './ProducstSearch'
import ArticlesHeader from './ArticlesHeader'
import ArticlesList from './ArticlesList'

export default function OrderProductsSection() {
    const [orderArticles, setOrderArticles] = useState([])
    const handleAddArticle = product => {
  setOrderArticles(prev => {
    const existing = prev.find(a => a.id === product.id)

    if (existing) {
      return prev.map(a =>
        a.id === product.id
          ? { ...a, quantity: a.quantity + 1 }
          : a
      )
    }

    return [...prev, { id: product.id, quantity: 1 }]
  })
}
    return (
        <div className='orderProductsSection'>
            <ProductSearch onSelect={handleAddArticle}/>
            <ArticlesHeader />
            <ArticlesList 
            articles={orderArticles}
            editable
            />
        </div>
    )
}