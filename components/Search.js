import React from 'react';

class Search extends React.Component {

    constructor(props){

        super(props);

        this.handleSearch = this.handleSearch.bind(this);

    }

    handleSearch(e)
    {
        this.props.search(e.target.value);
    }

    render(props) {

    return (
          <div className="row search-appointments">
            <div className="col-sm-offset-3 col-sm-6">
                <div className="input-group">
                    <input id="SearchApts" onChange={ this.handleSearch } placeholder="Search" type="text" className="form-control" aria-label="Search Appointments" />
                        <div className="input-group-btn">
                            <button type="button" className="btn btn-primary">Search
                            </button>
                        </div>
                </div>
            </div>
        </div>
      );
   }
}

export default Search;
