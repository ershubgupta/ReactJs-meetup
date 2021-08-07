import React, { useRef, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

import userData from "../data/mock_data.json";
import { InputFields } from "./FromFields";
import UserDetails from "./UserDetails";

export default function Dashboard() {
  const [seeMore, setSeeMore] = useState({});
  const [modalShow, setModalShow] = React.useState(false);
  const [nodeSearch, setNodeSearch] = useState(userData);

  const nameRef = useRef("");
  const localityRef = useRef("");

  const onSubmit = (e) => {
    e.preventDefault();
  };
  const onChange = () => {
    let name = nameRef.current.value.toLowerCase();
    let locality = localityRef.current.value.toLowerCase();
    let searchResult = userData.filter((e) => {
      return (
        e.name.toLowerCase().includes(name) &&
        e.locality.toLowerCase().includes(locality)
      );
    });
    setNodeSearch(searchResult);
  };

  const moreDetail = (data) => {
    setSeeMore(data);
    setModalShow(true);
  };
  return (
    <>
      <Form onSubmit={onSubmit} className="row justify-content-center">
        <div className="col-sm-6">
          <InputFields
            label={"Filter by Name"}
            name={"search_by_name"}
            type={"text"}
            onChange={onChange}
            reff={nameRef}
            placeholder={"Name"}
          />
        </div>
        <div className="col-sm-6">
          <InputFields
            label={"Filter by Locality"}
            name={"search_by_locality"}
            type={"text"}
            onChange={onChange}
            reff={localityRef}
            placeholder={"Locality"}
          />
        </div>
      </Form>

      <div
        className="mx-auto my-4 px-4 py-4 overflow-auto h-auto"
        style={{
          boxShadow: "0 0 4px 2px #b8b8b85e",
          maxHeight: "600px",
          maxWidth: "900px",
        }}
      >
        <Table striped bordered hover size="sm" className="mb-0">
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Locality</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {nodeSearch.length > 0 ? (
              nodeSearch.map((e) => (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.locality}</td>
                  <td>
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => moreDetail(e)}
                    >
                      See More
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  {" "}
                  No Result Found
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      <UserDetails
        show={modalShow}
        onHide={() => setModalShow(false)}
        seeMore={seeMore}
      />
    </>
  );
}
