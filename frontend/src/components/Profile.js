import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

function Profile() {
  return (
    <div className="Profile">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-5 text-white">
            <h1>Profile</h1>
            <Form>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                value=""
                placeholder="Enter Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="condition">Condition</Label>
              <Input
                type="text"
                name="condition"
                value=""
                placeholder="Enter Medical Condition"
              />
            </FormGroup>
            <FormGroup>
              <Label for="birthday">Birthday</Label>
              <Input
                type="text"
                name="birthday"
                value=""
                placeholder="01/01/2022"
              />
            </FormGroup>
          </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;