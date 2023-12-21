
import { useGetTotalItemsQuery, useLoadItemsQuery } from '../store/api';
import Item from './Item';
import MyLoader from './Skeleton';
import { useNavigate, useParams } from 'react-router-dom';
let arr = new Array(5).fill(1);
let ITEM_PER_PAGE = 5;
export default function MainPage() {
  const { page } = useParams();
  const navigate = useNavigate();
  const currentPage = parseInt(page) || 1;

  const { data: totalItemsData } = useGetTotalItemsQuery();

  const { data, isLoading, error } = useLoadItemsQuery(currentPage);

  const totalPage = Math.ceil(totalItemsData?.length / ITEM_PER_PAGE) || 1;

  let handlePage = (newPage) => {
    navigate(`/page/${newPage}`);
  };
  if (isLoading) {
    return arr.map((_, index) => <MyLoader key={index} />);
  }

  if (error) {
    return <div>Error loading items</div>;
  }
  return (
    <>
      <div className="items">
        {data.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
      <div className="page">
        {totalPage > 1 && (
          <div>
            {Array.from({ length: totalPage }).map((_, index) => (
              <button key={index} onClick={() => handlePage(index + 1)}>
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
