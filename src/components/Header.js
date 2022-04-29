import React from "react";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";


const Header = () => {
    const { categories, setSelectedCategory, setKeyword } = useContext(AppContext);

    return <div style={{display:"flex" , justifyContent:"space-between"}}>
        <input onChange={(e) => setKeyword(e.target.value)}  placeholder="mackbook.iphone..."/>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Please select</option>
            {
                categories.map(category => {
                    return <option key={category.id} value={category.name}>{category.name}</option>
                })
            }
        </select>
    </div>;
};

export default Header;
