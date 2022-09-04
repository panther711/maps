import { useRef, ChangeEvent, useContext } from 'react';
import { PlacesContext } from '../context';
import { SearchResult } from '.';


export const SearchBar = () => {

    const { searchPlacesByTerm } = useContext(PlacesContext)

    const debounceRef = useRef<NodeJS.Timeout>()

    const onQueryChanged = (e: ChangeEvent<HTMLInputElement>) => {
        if (debounceRef.current)
            clearTimeout(debounceRef.current)

        debounceRef.current = setTimeout(() => {
            searchPlacesByTerm(e.target.value)
        }, 350)
    }

    return (
        <div className="search-container">
            <input
                type='text'
                className='form-control'
                placeholder='Buscar ubicación...'
                onChange={onQueryChanged}
            />
            <SearchResult />
        </div>
    )
}
