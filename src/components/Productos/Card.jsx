import React from 'react'
import producto from '../../assets/productos/1.jpg'

export const Card = () => {
    return (
        <div className = "card">
            <img src={ producto } alt="Playera Vue" className="mb-2"/>
            <p className = "product-name mb-2 mt-2">Playera VUE</p>
            <p className = "product-seller mb-2">DEV.shop</p>
            <p className = "product-price mb-2">$250</p>
        </div>
    )
}
