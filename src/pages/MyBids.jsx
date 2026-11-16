import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api } from '../api/api'


const MyBids = () => {
    const [bids, setBids] = useState([])

    const loadBids = async () => {
        try {
            const data = await api.getMyBids()
            setBids(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        loadBids()
    }, [])


    const winningCount = bids.filter((bid) => bid.isWinning).length
    const totalAmount = bids.reduce((sum, bid) => sum + bid.amount, 0)

    return (
        <div className="container">

            <div class="page-header">
                <h1>Мои ставки</h1>
                <p class="page-subtitle">История ваших ставок на товары</p>
            </div>

            <div class="bids-summary">
                <div class="summary-card">
                    <span class="summary-value">{bids.length}</span>
                    <span class="summary-label">Всего ставок</span>
                </div>
                <div class="summary-card winning">
                    <span class="summary-value">{winningCount}</span>
                    <span class="summary-label">Лидирующих ставок</span>
                </div>
                <div class="summary-card">
                    <span class="summary-value">{totalAmount} ₽</span>
                    <span class="summary-label">Общая сумма</span>
                </div>
            </div>

            <div className="bids-list">
                {bids.map((bid) => (
                    <div
                        key={bid.id}
                        className={bid.isWinning ? "bid-item winning" : "bid-item"}
                    >
                        <div className="bid-item-content">
                            <div className="bid-item-header">
                                <Link to={`/item/${bid.itemId}`} className="bid-item-title">
                                    {bid.itemTitle}
                                </Link>
                                {bid.isWinning ? (
                                    <span className="winning-badge">🏆 Лидирую</span>
                                ) : (
                                    <span className="outbid-badge">Перебита</span>
                                )}
                            </div>
                            <div className="bid-item-meta">
                                <span>⏰ {new Date(bid.createdAt).toLocaleString("ru-RU")}</span>
                            </div>
                        </div>
                        <div className="bid-item-amount">
                            <span className="bid-amount">{bid.amount} ₽</span>
                            <span className="bid-status">Моя ставка</span>
                        </div>
                    </div>
                ))}
            </div>


        </div>
    )
}

export default MyBids