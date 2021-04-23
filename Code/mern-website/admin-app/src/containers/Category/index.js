import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Input from "../../components/UI/Input";
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../actions';
import Layout from "../../components/Layout";
import Modal from "../../components/UI/Modal";
/**
* @author
* @function Category
**/

const Category = (props) => {
    const category = useSelector(state => state.category);
    const [categoryName, setCategoryName] = useState("");
    const [categoryImage, setCategoryImage] = useState("");
    const [parentCategoryId, setParentCategoryId] = useState("");
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => {
        const form = new FormData();
        form.append("name", categoryName);
        form.append("parentId", parentCategoryId);
        form.append("categoryImage", categoryImage);
        dispatch(addCategory(form));
        setCategoryName("");
        setParentCategoryId("");
        // const cat = {
        //   categoryName,
        // parentCategoryId,
        //categoryImage
        // }

        setShow(false);
    }
    const handleShow = () => setShow(true);

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    {category.name}
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}

                </li>
            );
        }
        return myCategories;
    }
    const createCategoryList = (categories, options = []) => {

        for (let category of categories) {
            options.push({ value: category._id, name: category.name });
            if (category.children.length > 0) {
                createCategoryList(category.children, options)
            }
        }
        return options;
    }
    const handleCategoryImage = (e) => {
        setCategoryImage(e.target.files[0]);
    }

    return (
        <Layout sidebar>

            <Container>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                            <h3>Categories</h3>
                            <button onClick={handleShow}>Add</button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <ul>
                            {renderCategories(category.categories)}

                        </ul>
                    </Col>
                </Row>
            </Container>

            <Modal
                show={show}
                handleClose={handleClose}
                modalTile={"Add new Category"}
            >
                <Input
                    value={categoryName}
                    placeholder={`Category Name:`}
                    onChange={(e) => setCategoryName(e.target.value)}
                />
                <select className="from-control"
                    value={parentCategoryId}
                    onChange={(e) => setParentCategoryId(e.target.value)}>
                    <option>Select Category</option>
                    {
                        createCategoryList(category.categories).map(option =>
                            <option key={option.value} value={option.value}>{option.name}</option>)
                    }
                </select>
                <input type="file" name="categoryImage" onChange={handleCategoryImage} />
            </Modal>

        </Layout>
    )

}

export default Category
