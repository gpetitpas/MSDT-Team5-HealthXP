import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";

function Habits() {
  return (
    <div className="Habits">
      <div class="container">
        <div class="row align-items-center my-5">
            <h1 class="text-white">Habits</h1>
        </div>
        <div class="text-white">
          <h3>Add a new habit or recurring activity needed to manage your condition</h3>
          <Form>
              <FormGroup>
                <Label for="title">Habit title</Label>
                <Input
                  type="text"
                  name="title"
                  value=""
                  placeholder="Enter title"
                />
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  value=""
                  placeholder="Enter Description"
                />
              </FormGroup>
              <FormGroup check>
                <Label for="mondayRecurr">
                  <Input
                    type="checkbox"
                    name="mondayRecurr"
                  />
                  Monday
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label for="tuesdayRecurr">
                  <Input
                    type="checkbox"
                    name="tuesdayRecurr"
                  />
                  Tuesday
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label for="wednesdayRecurr">
                  <Input
                    type="checkbox"
                    name="wednesdayRecurr"
                  />
                  Wednesday
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label for="thursdayRecurr">
                  <Input
                    type="checkbox"
                    name="thursdayRecurr"
                  />
                  Thursday
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label for="fridayRecurr">
                  <Input
                    type="checkbox"
                    name="fridayRecurr"
                  />
                  Friday
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label for="saturdayRecurr">
                  <Input
                    type="checkbox"
                    name="saturdayRecurr"
                  />
                  Saturday
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label for="sundayRecurr">
                  <Input
                    type="checkbox"
                    name="sundayRecurr"
                  />
                  Sunday
                </Label>
              </FormGroup>
            </Form>
        </div>
      </div>
    </div>
  );
}

export default Habits;