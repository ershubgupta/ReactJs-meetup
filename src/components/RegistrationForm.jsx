import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Form, Spinner } from "react-bootstrap";
import { Prompt } from "react-router-dom";
import { InputFields, SelectFields } from "./FromFields";

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
    console.log(e.target.value);
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
            
            <InputFields
              label={"Your Full Name:"}
              name={"name"}
              type={"text"}
              onChange={onChange}
            />

            <InputFields
              label={"Your Age:"}
              name={"age"}
              type={"number"}
              onChange={onChange}
            />
            <InputFields
              label={"Your Date of Birth:"}
              name={"dob"}
              type={"date"}
              onChange={onChange}
            />

            <SelectFields
              label={"Your Profession:"}
              name={"profession"}
              onChange={onChange}
              options={[
                { value: "", label: "Please select from the list." },
                { value: "Employed", label: "Employed" },
                { value: "Student", label: "Student" },
              ]}
            />

            <InputFields
              label={"Your Locality:"}
              name={"locality"}
              type={"text"}
              onChange={onChange}
            />

            <SelectFields
              label={"You can bring your Guest with you:"}
              name={"guest_count"}
              onChange={onChange}
              options={[
                { value: "", label: "Please select the number of guest." },
                { value: "1", label: "1" },
                { value: "2", label: "2" },
              ]}
            />

            <InputFields
              label={"Your Full Address:"}
              name={"address"}
              as={"textarea"}
              onChange={onChange}
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
