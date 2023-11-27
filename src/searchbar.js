import React from 'react';
import styles from './searchbar.module.css'; 

const sortByOptions = {
    "Best Match": "best_match",
    "Highest Rated": "rating",
    "Most Reviewed": "review_count",
};

const SearchBar = () => {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption];
            return (
                <option key={sortByOptionValue} value={sortByOptionValue}>
                    {sortByOption}
                </option>
            );
        });
    };

    return (
        <div className={styles.searchBar}>
            <div className="mb-3">
                <input placeholder="Search Businesses" />
            </div>
            <div className="mb-3">
                <input placeholder="Where?" />
            </div>
            <div>
                <select id="sort-by-dropdown">
                    {renderSortByOptions()}
                </select>
            </div>
            <div className="mt-3">
                <button type="submit">
                    Let's Go
                </button>
            </div>
        </div>
    );
}

export default SearchBar;

