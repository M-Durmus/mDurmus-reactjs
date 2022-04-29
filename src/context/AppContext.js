import { createContext, useEffect, useState } from "react";


const PRODUCTS_API_URL = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/";
const CATEGORIES_API_URL = "https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        fetch(PRODUCTS_API_URL)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
                
            });
    }, []);

    useEffect(() => {
        fetch(CATEGORIES_API_URL)
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            
            });
    }, []);


    return <AppContext.Provider value={{ products, setProducts, selectedCategory, setSelectedCategory, keyword, setKeyword, categories }}>
        {children}
    </AppContext.Provider>
}


export { ContextProvider, AppContext };