import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://lit-fjord-60113.herokuapp.com/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Bike Added');
                    reset()
                }
            })

    };
    return (
        <div style={{ backgroundColor: "#f8fafc" }}>
            <Container>
                <Row>
                    <h1 className="text-center mt-5">Add A New Bike</h1>
                    <Col className="mt-5">
                        <form onSubmit={handleSubmit(onSubmit)} className="addpack-from">
                            <input
                                style={{ width: "50%", marginBottom: "10px" }}
                                {...register("name")} placeholder="Enter Bike name" />
                            <br />
                            <input
                                style={{ width: "50%", marginBottom: "10px" }}
                                {...register("price")} placeholder="Enter Bike price" />
                            <br />
                            <input
                                style={{ width: "50%", marginBottom: "10px" }}
                                {...register("CC_Category")} placeholder="Enter Bike CC Category" />
                            <br />
                            <input
                                style={{ width: "50%", marginBottom: "10px" }}
                                {...register("Bike_Category")} placeholder="Enter Bike Category" />
                            <br />
                            <input
                                style={{ width: "50%", marginBottom: "10px" }}
                                {...register("description")} placeholder="Enter Bike description" />
                            <br />
                            <input
                                style={{ width: "50%", marginBottom: "10px" }}
                                {...register("img", { required: true })} placeholder="Enter image url" />
                            <br />

                            <input type="submit" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddProduct;