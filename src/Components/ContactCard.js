import React from "react";
import { Card } from "react-bootstrap";

export const ContactCard = (props) => {
  const { id, name, email } = props.data;
  return (
    <Card className="p-2 mt-2" style={{ width: "35rem" }}>
      <div className="d-flex justify-content-between">
        <div>
          <h6>{name}</h6>
          <p>{email}</p>
        </div>
        <button
          type="button"
          className="btn-close"
          onClick={() => {
            props.delete(id);
          }}
        ></button>
      </div>
    </Card>
  );
};
