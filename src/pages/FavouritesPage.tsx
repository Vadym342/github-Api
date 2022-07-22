
import { useAppSelector } from './../hooks/redux';
export function FavouritePage() {

  const { favourites } = useAppSelector(state => state.github);

  if (favourites.length === 0) return <p className='text-center'>No items.</p>

  return (
    <ul className='list-none '>
      {
        favourites.map(fav => (
          <li key={fav}>
            <a href={fav} target='_blank'>{fav}</a>
          </li>
        ))
      }
    </ul>
  )
};