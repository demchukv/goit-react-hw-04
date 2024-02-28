import PropTypes from 'prop-types'
import { FaSearch } from "react-icons/fa";
import css from './SearchBar.module.css'

const SearchBar = ( {onSearch, notify} ) => {

	const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const query = form.elements.query.value.trim();
        if(query === "") {
            notify('Please enter search term!');
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
                />
                <button className={css.searchBtn} type="submit"><FaSearch /></button>
            </form>
        </header>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    notify: PropTypes.func.isRequired,
}

export default SearchBar