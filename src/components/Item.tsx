import { useLocation } from 'react-router-dom';
import {
  useAddToBasketMutation,
  useAddToFovoriteMutation,
  useDelItemsMutation,
} from '../store/api';

export default function Item({ item }) {
  const [delItems] = useDelItemsMutation();
  const [addToFavorite] = useAddToFovoriteMutation();
  const [addToBasket] = useAddToBasketMutation();

  const location = useLocation();
  const handleToggleFavorite = () => {
    addToFavorite({ id: item.id, favorite: item.favorite });
  };
  const handleToggleBasket = () => {
    addToBasket({ id: item.id, basket: item.basket });
  };
  return (
    <div className="item">
      <p>{item.name}</p>
      <p>{item.info}</p>
      <label htmlFor="">
        favorite:
        <input
          type="checkbox"
          checked={item.favorite ? true : false}
          onChange={handleToggleFavorite}
        />
      </label>
      <label htmlFor="">
        Basket:{' '}
        <input
          type="checkbox"
          checked={item.basket ? true : false}
          onChange={handleToggleBasket}
        />
      </label>
      {location.pathname !== '/favorite' && location.pathname !== '/basket' && (
        <button onClick={() => delItems(item.id)}>Delete</button>
      )}
    </div>
  );
}
