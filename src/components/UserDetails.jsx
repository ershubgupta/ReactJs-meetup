import React from 'react'
import { Modal, Table } from 'react-bootstrap';

export default function UserDetails(props) {
  const modalProps = Object.assign({}, props);
  delete modalProps.seeMore;
  return (
    <>
      <Modal
        {...modalProps}
        size="lg"
        aria-labelledby={`user-${props.seeMore.id}`}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id={`user-${props.seeMore.id}`}>
            {props.seeMore.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover size="sm">
            <tbody>
              <tr>
                <td>
                  <b>Locality</b>
                </td>
                <td>{props.seeMore.locality}</td>
              </tr>
              <tr>
                <td>
                  <b>Age</b>
                </td>
                <td>{props.seeMore.age}</td>
              </tr>
              <tr>
                <td>
                  <b>Date of Birth</b>
                </td>
                <td>{props.seeMore.dob}</td>
              </tr>
              <tr>
                <td>
                  <b>No. of Guest</b>
                </td>
                <td>{props.seeMore.guest_count}</td>
              </tr>
              <tr>
                <td>
                  <b>Profession</b>
                </td>
                <td>{props.seeMore.profession}</td>
              </tr>
              <tr>
                <td>
                  <b>Address</b>
                </td>
                <td>{props.seeMore.address}</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
      </Modal>
    </>
  );
}
