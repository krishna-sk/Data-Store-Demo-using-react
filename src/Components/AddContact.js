import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";

export const AddContact = (props) => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  // const [error, setError] = useState(false);

  const addContactHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    if (name.trim() === "" || email.trim() === "") {
      // setError(true);
      return;
    }
    props.addContact({
      name: nameRef.current.value,
      email: emailRef.current.value,
    });
    nameRef.current.value="";
    emailRef.current.value="";
  };

  return (
    <div className="d-flex justify-content-center p-2">
      {/* {error && alert("all fields are mandatory")} */}
      <Form style={{ width: "35rem" }} onSubmit={addContactHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            required
            ref={nameRef}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
