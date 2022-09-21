import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editPizza, getPizzaById } from "../actions/PizzaActions";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Success from "../components/Success";
import {Link} from "react-router-dom";

export default function Editpizza({ match }) {
    const dispatch = useDispatch();
    const [name, setname] = useState("");
    const [smallprice, setsmallprice] = useState();
    const [mediumprice, setmediumprice] = useState();
    const [largeprice, setlargeprice] = useState();
    const [image, setimage] = useState("");
    const [description, setdescription] = useState("");
    const [category, setcategory] = useState("");
    const params = useParams();

    const { pizza, error, loading } = useSelector((state) => state.getPizzaById);


    const { editloading, editerror, editsuccess } = useSelector((state) => state.editPizza)

    useEffect(() => {

        if (pizza) {
            if (pizza._id == params.pizzaid) {
                setname(pizza.name)
                setdescription(pizza.description)
                setcategory(pizza.category)
                setsmallprice(pizza.prices[0]['small'])
                setmediumprice(pizza.prices[0]['medium'])
                setlargeprice(pizza.prices[0]['large'])
                setimage(pizza.image)
            }
            else {
                dispatch(getPizzaById(params.pizzaid));
            }

        }
        else {
            dispatch(getPizzaById(params.pizzaid));
        }



    }, [pizza, dispatch]);

    function formHandler(e) {
        e.preventDefault();

        const editedpizza = {
            _id: params.pizzaid,
            name,
            image,
            description,
            category,
            prices: {
                small: smallprice,
                medium: mediumprice,
                large: largeprice,
            },
        };

        dispatch(editPizza(editedpizza))
        dispatch(getPizzaById(editedpizza._id))
    }

    return (
        <div>
            <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

            <ul className="adminfunctions">
                <li>
                    <Link to={'/admin/userslist'} style={{ color: 'white' }}>Users List</Link>
                </li>
                <li>
                    <Link to={'/admin/pizzaslist'} style={{ color: 'white' }}>Pizzas List</Link>
                </li>
                <li>
                    <Link to={'/admin/addpizza'} style={{ color: 'white' }}>Add Pizza</Link>
                </li>
                <li>
                    <a href={'/admin/orderslist'} style={{ color: 'white' }}>Orders List</a>
                </li>
            </ul>


            <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
                <h1>Edit Pizza</h1>
                {loading && <Loader />}
                {error && <Error data="Something went wrong" />}
                {editsuccess && (<Success data='Pizza details edited successfully' />)}
                {editloading && (<Loader />)}

                <form onSubmit={formHandler}>
                    <input
                        className="form-control"
                        type="text"
                        placeholder="name"
                        value={name}
                        onChange={(e) => {
                            setname(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="small varient price"
                        value={smallprice}
                        onChange={(e) => {
                            setsmallprice(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="medium varient price"
                        value={mediumprice}
                        onChange={(e) => {
                            setmediumprice(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="large varient price"
                        value={largeprice}
                        onChange={(e) => {
                            setlargeprice(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="category"
                        value={category}
                        onChange={(e) => {
                            setcategory(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="description"
                        value={description}
                        onChange={(e) => {
                            setdescription(e.target.value);
                        }}
                    />
                    <input
                        className="form-control"
                        type="text"
                        placeholder="image url"
                        value={image}
                        onChange={(e) => {
                            setimage(e.target.value);
                        }}
                    />
                    <button className="btn mt-3" type="submit">
                        Edit Pizza
                    </button>
                </form>
            </div>
        </div>
    );
}