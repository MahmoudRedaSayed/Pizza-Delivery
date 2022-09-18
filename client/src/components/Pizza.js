import pizzas from "../4.1 pizzasdata";
import React from "react";
import {useState} from "react"
import {Modal,Button} from "react-bootstrap";

export default function Pizza({pizza}){
    const [varient,setVarient]=useState("small");
    const [quantity,setQuantity]=useState(1);
    const [show, setShow] = useState(false);
    const handleClose = () =>{ 
        console.log(show)
        setShow(false)
        console.log("hide")
        console.log(show)
    };
    const handleShow = () => {
        console.log(show)
        setShow(true);
        console.log(show)
    }

    return(<div  style={{margin:"70px"}} className="shadow p-3 mb-5 bg-body rounded">
        <div onClick={handleShow} ><div>{pizza.name}</div>
        <img src={pizza.image} className="img-fluid" style={{width:"200px",height:"200px"}}></img></div>
        <div  style={{display:'flex'}}>
            <div className="w-100 m-1">
                <p>varients</p>
                <select className="form-control" value={varient} onChange={(e)=>{setVarient(e.target.value)}}>
                    {pizza.varients.map(varient=>(
                        <option key={varient}  value={varient}>{varient}</option>
                    ))}
                </select>
            </div>
            <div className="w-100 m-1">
                <p>
                    Quantity
                </p>
                <select className="form-control" value={quantity} onChange={e=>setQuantity(e.target.value)}>
                    {[...Array(10).keys()].map((x,i)=>(
                        <option key={i} value={i+1}>{i+1}</option>
                    ))}
                </select>
            </div>
        </div>
        <div style={{display:"flex"}}>
            <div className="w-100 ">
                <p className="p-1">
                    price: {pizza.prices[0][varient]*quantity} EG/-
                </p>
            </div>
            <div className="w-100 ">
                <button className="btn">Add to Cart</button>
            </div>
        </div>
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{pizza.name}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div>
            <img src={pizza.image}  className="img-fluid" alt="image" style={{height:"400px "}}></img>
            <p>
                {pizza.description}
            </p>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <button className="btn" onClick={handleClose}>Close</button>
      </Modal.Footer>
    </Modal>
    </div>);
}