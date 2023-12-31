import 'react-dropdown/style.css';
import "./filterAlbum.css"
import React from 'react';
import Dropdown from "react-dropdown";
import Select from "react-select";

const FilterAlbum = ({setActiveFilter}) => {

     /* Options of dropdown filter */
    const options = [
        {value:'popularité', label:"Popularité", role:"option popularité",},
        {value:'date', label:"Date", role:"option date",},
        {value:'titre', label:"Titre", role:"option titre",}
    ];

    /* Options by default */
    const defaultOption = options.label;

    /* Function for get label option selected */
    const changeFilter = (options) => {
        setActiveFilter(options.label);
    };

    /* Style of filter */
    const customStyles = {
        control: (styles) => ({...styles, backgroundColor: 'brown', width: 200, textColor: 'white' }),
        option: (styles, state) => ({...styles, color: state.isFocused ? "black" : "white"}),
        singleValue: (styles) => ({...styles, color: 'white'}),
        placeholder: (styles) => ({...styles, color: 'white'}),
        indicatorContainer: (styles) => ({...styles, color: 'white'}),
        menu: (styles) => ({...styles, color: 'white', backgroundColor:'brown'}),
    }
    

    return (
        <div className="page__items-filter-position" role="option">
            <label className="page__filter-text" label="Trier par">Trier par</label>
            <Select
                onChange={changeFilter}
                options={options}
                value={defaultOption}
                styles={customStyles}
                role={options.role}
                label={options.label}
            />
        </div>
    )
}
export default FilterAlbum;