import React from 'react'
import "../Css/InputsField.scss"
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import contact from "../../src/media/contact.png"
import { validate } from '../Yup/formRegex';
import { BiErrorCircle } from "react-icons/bi"
const InputsField = () => {
    const showAlert = () => {
        Swal.fire({
            title: "Success",
            text: `${JSON.stringify(state.first_name)},your message is sending`,
            icon: "success",
            confirmButtonText: "OK",
        }).then(function () {
            window.location.href = "/";
        });
    }
    const initialState = {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        whycontactus: ""
    }
    const [state, setState] = useState(initialState)
    const url = `http://165.22.79.92/core-api`
    const postData = async () => {
        if (!state.first_name || !state.last_name || !state.email || !state.phone_number) return;
        await axios.post(`${url}/contact/`, state);
        setState(initialState);
        showAlert()
    };
    // !handle contact state
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validate),
    });
    const onSubmit = () => {
        postData()
    }
    return (
        <section className='contact_section'>

            <div className="container">
                <div className="contact_form">
                    <div className="row">
                        <div className="col-12 col-lg-12 col-md-12 col-s-12 col-xs-12">
                            <div className="contact_title">
                                <h1>Contact us</h1>
                            </div>
                        </div>

                        <div className="col-6 col-md-12 col-s-12 col-xs-12">
                            <div className="contact_image">
                                <img src={contact} alt="" />
                            </div>
                        </div>
                        <div className="col-6 col-lg-6 col-md-12 col-s-12 col-xs-12">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="input_field">
                                    <div className="input_one">
                                        <input
                                            {...register("first_name")}
                                            onChange={handleChange}
                                            value={state.first_name}
                                            name="first_name"
                                            id="first_name"
                                            type="text"
                                            placeholder="First Name"
                                            style={errors.first_name ? { borderColor: "red" } : { borderColor: "#ced4da" }}
                                        />
                                        {errors.first_name ? (
                                            <span style={{ color: "red" }}><BiErrorCircle /> {errors?.first_name.message}</span>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                                <div className="input_field">
                                    <div className="input_one">
                                        <input
                                            {...register("last_name")}
                                            onChange={handleChange}
                                            value={state.last_name}
                                            name="last_name"
                                            type="text"
                                            id="last_name"
                                            aria-describedby="emailHelp"
                                            placeholder="Soyad"
                                            style={errors.last_name ? { borderColor: "red" } : { borderColor: "#ced4da" }}

                                        />

                                        {errors.last_name ? (
                                            <span style={{ color: "red" }}><BiErrorCircle />{errors.last_name.message}</span>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                                <div className="input_field">
                                    <div className="input_one">
                                        <input
                                            {...register("phone_number")}
                                            onChange={handleChange}
                                            value={state.phone_number}
                                            name="phone_number"
                                            type="tel"
                                            id="phone_number"
                                            aria-describedby="emailHelp"
                                            placeholder="phone"
                                            style={errors.phone_number ? { borderColor: "red" } : { borderColor: "#ced4da" }}

                                        />
                                        {errors.phone_number ? (
                                            <span style={{ color: "red" }}><BiErrorCircle />{errors.phone_number.message}</span>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                                <div className="input_field">
                                    <div className="input_one">
                                        <input
                                            {...register("email")}
                                            onChange={handleChange}
                                            value={state.email}
                                            name="email"
                                            id="email"
                                            type="email"
                                            aria-describedby="emailHelp"
                                            placeholder="E-mail"
                                            style={errors.email ? { borderColor: "red" } : { borderColor: "#ced4da" }}

                                        />
                                        {errors.email ? (
                                            <span style={{ color: "red" }}><BiErrorCircle />{errors.email.message}</span>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                                <div className="textarea_field">
                                    <textarea
                                        {...register("whycontactus")}
                                        value={state.whycontactus}
                                        onChange={handleChange}
                                        name="whycontactus"
                                        id="whycontactus"
                                        cols="30"
                                        rows="10"
                                        placeholder="Mesajınız"
                                        style={errors.whycontactus ? { borderColor: "red" } : { borderColor: "#ced4da" }}
                                    ></textarea>
                                    {errors.whycontactus ? (
                                        <span style={{ color: "red" }} className="text-error-m">
                                            <BiErrorCircle />  {errors.whycontactus.message}
                                        </span>
                                    ) : (
                                        <></>
                                    )}
                                </div>

                                <div className="form-button">
                                    <button type="submit" className="btn btn-primary mt-3">
                                        Submit
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default InputsField
