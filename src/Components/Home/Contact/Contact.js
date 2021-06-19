import React from 'react';
import {useForm} from 'react-hook-form';
import './Contact.css';

const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("example")); 
  
    return (
        <section className="contact-section mt-5">
            <div className="container text-center">
                <div className="contact-header">
                     <h4>Contact Us</h4>
                     <h2>Always Connect With Us</h2>
                </div>
                <div className="contact-reg ps-5">
                    <form className='contact-form' onSubmit={handleSubmit(onSubmit)}>
                        {/* <input defaultValue="test" {...register("example")} /> */}
                        <input name="Email" placeholder='Email' ref = {register("Email", { required: true })} />
                        {errors.Email && <span className='error'>This field is required</span>}
                        <input name="Subject" placeholder='Subject' ref = {register("Subject", { required: true })} />
                        {errors.Email && <span className='error'>This field is required</span>}
                        <input name="Message" style={{height:'150px'}} placeholder='Message' ref = {register("Message", { required: true })} />
                        {errors.Email && <span className='error'>This field is required</span>}
                        <input style={{backgroundColor:'gray',marginBottom:'100px'}} type="submit" />
                    </form>
                </div>
            </div>

        </section>
         
    );
  }

export default Contact;