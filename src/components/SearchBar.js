const SearchBar = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-8">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;