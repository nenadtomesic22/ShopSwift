import Article from '../../ui/Article'
import articles from '../../../data/articlesList.js'
import { useState } from 'react'

export default function ArticlesList() {
    let articleId = 1
    let article = articles.find(a => a.id === articleId)
    
    const [quantity, updateQuantity] = useState(1)
    
    return (
        <Article 
        {...article}
        quantity={quantity}
        editable
        onQuantityChange={q => updateQuantity(q)}
        />
    )
}