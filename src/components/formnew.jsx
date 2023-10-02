import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import "./Form.css"; 

const Form = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
        getValues,
    } = useForm();

    const handlerOnSubmit = () => {
        console.log("Form is submitted");
        console.log("The name", getValues("name"));
        console.log("The email", getValues("email"));
    };

    useEffect(() => {
        console.log("Errors: ", errors);
    }, [errors]);

    return (
        <div className="container">
            <h1 className="title">MODULE: RegistrationForm</h1>
            <form onSubmit={handleSubmit(handlerOnSubmit)}>
                <div>
                    <h4 className="label">Name</h4>
                    <Controller
                        name="name"
                        control={control}
                        rules={{
                            required: "Name is required",
                            minLength: {
                                value: 2,
                                message: "Minimum length must be 2",
                            },
                            maxLength: {
                                value: 50,
                                message: "Maximum length must be 50",
                            },
                        }}
                        render={({ field }) => (
                            <input
                                placeholder="Enter name"
                                {...field}
                                className={`input-field ${errors.name ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.name && <h5 className="error-message">{errors.name.message}</h5>}
                </div>
                <div>
                    <h4 className="label">Email</h4>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        }}
                        render={({ field }) => (
                            <input
                                placeholder="Enter email"
                                {...field}
                                className={`input-field ${errors.email ? "error-border" : ""}`}
                            />
                        )}
                    />
                    {errors.email && <h5 className="error-message">{errors.email.message}</h5>}
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default Form;
