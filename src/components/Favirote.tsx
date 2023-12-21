import { useGetTotalItemsQuery } from '../store/api';
import Item from './Item';

export default function Favorite() {
  const { data } = useGetTotalItemsQuery();
  return (
    <>
      <div className="favorite">
        {data
          ?.filter((item) => item.favorite === true)
          .map((item) => <Item key={item.id} item={item} />)}
      </div>
    </>
  );
}
