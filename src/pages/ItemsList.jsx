import { useEffect, useState } from 'react'
import ItemCard from '../components/ItemCard'
import { api } from '../api/api'

const ItemCard = ({ id, title, description, price, userId, image, createdAt }) => {
    const { session } = useUserStore()
    const [bids, setBids] = useState([])
    const [amount, setAmount] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)


    


    return (
        <div className="container">
            <div class="page-header">
                <h1>Все товары</h1>
            </div>
            <div class="stats">
                <div class="stat-item">
                    <span class="stat-value">{itemsCount}</span>
                    <span class="stat-label">Товаров</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">{bidsCount}</span>
                    <span class="stat-label">Ставок</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">{activeCount}</span>
                    <span class="stat-label">Активных</span>
                </div>
                <div class="stat-item">
                    <span class="stat-value">{avgPrice}₽</span>
                    <span class="stat-label">Средняя цена</span>
                </div>
            </div>

            <div class="items-grid">
                    <ItemCard/>
            </div>
        </div>
    )
}

export default ItemsList
