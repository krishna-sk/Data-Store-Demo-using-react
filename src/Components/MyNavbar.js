import React, { Fragment } from "react";

import { Button } from "react-bootstrap";

export const MyNavbar = (props) => {
  return (
    <Fragment>
      <div className="text-bold p-2">
        <div className="row">
          <div className="col-5"></div>
          <div className="col-7 d-flex flex-row justify-content-between">
            <h2>Data Store </h2>
            <Button variant="primary" onClick={props.clearAll}>
              Clear all
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
