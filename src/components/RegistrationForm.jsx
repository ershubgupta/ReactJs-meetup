import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { Prompt } from "react-router-dom";

export default function RegistrationForm() {
  const [formData, setFormData] = useState([]); // for storing form data
  const [buttonStatus, setButtonStatus] = useState(false); // check for error accodingly enable/disable submit btn
  const [addCount, setAddCount] = useState(50); // Address field text count tracker
  const [formMessage, setFormMessage] = useState(""); // store msg on form submissition
  const [loader, setLoader] = useState(false); // show loader when user hit on submit button

  const formIsHalfFilledOut = Object.values(formData).filter(
    (items) => items.val !== "" && items.length !== 0
  );

  const onSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    setButtonStatus(false);
    axios
      .post("https://react-meetup.free.beeceptor.com/registration", formData)
      .then((response) => {
        setFormMessage(response.data);
        setFormData([]);
      })
      .catch((response) => {
        setFormMessage(response.data);
      });
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    let btnActive = true;
    Array.from(document.getElementsByClassName("form-control")).forEach(
      function (ele) {
        if (ele.value === "") {
          setButtonStatus(false);
          return (btnActive = false);
        }
      }
    );
    if (btnActive) {
      setButtonStatus(true);
    }
    if (e.target.name === "address") {
      setAddCount(() => 50 - e.target.value.length);
    }
  };

  return (
    <>
      <Prompt
        when={formIsHalfFilledOut.length !== 0 ? true : false}
        message={`Are you sure you want to leave?`}
      />
      <div className="form-container mx-auto">
        {formMessage.length > 0 ? (
          <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>{formMessage}</p>
          </Alert>
        ) : (
          <Form
            onSubmit={onSubmit}
            autoComplete="off"
            className="mx-auto"
            method="post"
          >
            <h5 className="text-center mb-4">
              Register yourself for upcoming{" "}
              <span className="text-success">ReactJs MeetUp</span>
            </h5>
            <Form.Group>
              <Form.Label>Your Full Name:</Form.Label>
              <Form.Control
                name="name"
                type="text"
                onChange={onChange}
                placeholder="Enter Your Name"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Age:</Form.Label>
              <Form.Control
                name="age"
                type="number"
                onChange={onChange}
                placeholder="Enter Your Age"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Your Date of Birth:</Form.Label>
              <Form.Control
                name="dob"
                type="date"
                onChange={onChange}
                placeholder="Enter Your Date of Birth"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Your Profession:</Form.Label>
              <Form.Control as="select" name="profession" onChange={onChange}>
                <option value="">Please select from the list.</option>
                <option value="Employed">Employed</option>
                <option value="Student">Student</option>
              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Your Locality:</Form.Label>
              <Form.Control
                name="locality"
                type="text"
                onChange={onChange}
                placeholder="Enter Your Locality"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>You can bring your Guest with you:</Form.Label>
              <Form.Control as="select" name="guest_count" onChange={onChange}>
                <option value="">Please select the number of guest.</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </Form.Control>
            </Form.Group>

            <Form.Label>Your Full Address:</Form.Label>
            <Form.Control
              maxLength="50"
              name="address"
              as="textarea"
              onChange={onChange}
              placeholder="Enter Your Address"
            />
            <Form.Text className="text-right">
              Allowed Characters: {addCount}
            </Form.Text>
            <Button
              type="submit"
              variant={buttonStatus ? "outline-success" : "outline-secondary"}
              disabled={!buttonStatus}
              className="mt-4 mb-2"
            >
              <Spinner
                size="sm"
                animation="border"
                variant="success"
                className={`mr-2 mb-0 ${loader ? "d-inline-block" : "d-none"}`}
              />
              Submit
            </Button>
          </Form>
        )}
      </div>
    </>
  );
}
