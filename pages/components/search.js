//
import SearchStyles from '../../styles/search.module.css'

// 
import React, {useState} from 'react'

const Search = function () {
    const [keys, setKeys] = useState('')


    return (
        <div className="form-inline m-2 my-lg-0">
            <input className={`form-control mr-sm-2 ${SearchStyles.form__search}`} type="search" aria-label="Search" 
            onKeyUp={(e) => { setKeys(e.target.value) }}/>
        </div>
    )
}

export default Search