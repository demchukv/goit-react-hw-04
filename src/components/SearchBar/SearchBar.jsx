import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import PropTypes from 'prop-types'
import { FaSearch } from "react-icons/fa";
import css from './SearchBar.module.css'

const SearchBar = ( {onSearch} ) => {

    const searchBtn = useRef();
    
    const handleUserInput = (evt) => {
        const inputValue = evt.target.value.trim();
        searchBtn.current.disabled = inputValue === "" ? true : false;
        
    }

	const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const query = form.elements.query.value;
        if(query === "") {
            toast.error('Please enter search term!', {position:'top right'});
            return;
        }
        onSearch(query);
        form.reset();
    };

    return (
        <header className={css.header}>
            <form className={css.searchForm} onSubmit={handleSubmit}>
                <input
                className={css.searchInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="query"
                onChange={handleUserInput}
                />
                <button className={css.searchBtn} ref={searchBtn} type="submit" disabled><FaSearch /></button>
            </form>
            <Toaster />
        </header>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default SearchBar