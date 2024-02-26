import PropTypes from 'prop-types'

const SearchBar = ( {onSearch} ) => {

	const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
            const query = form.elements.query.value;
            if(form.elements.query.value.trim() === "") {
                alert("Please enter search term!")
                return;
            }
            onSearch(query);
        form.reset();
    };
    
    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="query"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
}

export default SearchBar