
import { Link } from "react-router-dom"
import { useUserStore } from "../store/useUserStore"

const ItemCard = ({ id, imageUrl, title, description, price, username, userId }) => {
    const { session } = useUserStore()

    const isOwner = session?.user?.id === userId

    return (
        <Link to={`/item/${id}`}>
            <div className="item-card">
                <img src={imageUrl} className="item-image" />

                <div className="item-content">
                    <span className="status-badge status-active">
                        Активное
                    </span>

                    <h3 className="item-title">{title}</h3>

                    <p className="item-description">{description}</p>

                    <div className="item-footer">
                        <div className="item-price">{price} ₽</div>

                        <div className="item-meta">
                            <span className="item-seller">
                                Продавец: {isOwner ? "Вы" : username}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ItemCard
