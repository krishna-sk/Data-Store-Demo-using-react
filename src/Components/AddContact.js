import React from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

export const AddContact = (props) => {
  const { register, handleSubmit, errors } = useForm();
  // const [error, setError] = useState(false);

  const onSubmit = (data) => {
    props.addContact({
      name: data.name,
      email: data.email,
      password: data.password
    });
    console.log(errors);
  };

  return (
    <div className="d-flex justify-content-center p-2">
      {/* {error && alert("all fields are mandatory")} */}
      <Form style={{ width: "35rem" }} onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            {...register("name", { required: "Username is required" })}
          />
        </Form.Group>
        {/* <p>{errors.name?.message}</p> */}

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email", { required: "Email is required", pattern: {
              value: /^\S+@\S+$/i,
              message: "This is not a valid email",
            } })}
          />
        </Form.Group>
        {/* <p>{errors.email?.message}</p> */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            {...register("password", { required: "Password is required" })}
          />
        </Form.Group>
        {/* <p>{errors.password?.message}</p> */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
