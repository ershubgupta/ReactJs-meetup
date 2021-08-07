import React from 'react'
import { Form } from 'react-bootstrap'

export function InputFields({ label, name, type, as, onChange, reff, placeholder }) {
  return (
    <>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          name={name}
          type={type}
          as={as}
          ref={reff}
          onChange={onChange}
          placeholder={placeholder || `Enter ${label}`}
        />
      </Form.Group>
    </>
  );
}

export function SelectFields({label, name, options, onChange}) {
  return (
    <>
      <Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control as="select" name={name} onChange={onChange}>
          {options.map((ele, id) => (
            <option key={id} value={ele.value}>{ele.label}</option>
          ))}
        </Form.Control>
      </Form.Group>
    </>
  );
}
