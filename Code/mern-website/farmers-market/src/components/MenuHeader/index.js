import React, { useEffect } from 'react';
import { getAllCategory } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import "./style.css";
import { Link } from 'react-router-dom';
/**
* @author
* @function MenuHeader

**/

const MenuHeader = (props) => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);

    useEffect(() => {
        dispatch(getAllCategory());
    }, []);

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    {category.parentId ?
                        <Link to={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name}</Link>
                        : <span>{category.name}</span>
                    }
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>
            );
        }
        return myCategories;
    }


    return (
        <div className="menuHeader">
            <ul>
                {category.categories.length > 0 ? renderCategories(category.categories) : null}
            </ul>
        </div>
    );
}

export default MenuHeader
