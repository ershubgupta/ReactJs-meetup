import React from "react";
import { Col, Row } from "react-bootstrap";
import { Chart } from "../components/Charts";

export default function Reports() {
  return (
    <>
      <Row>
        <Col className="mb-5" md="12" lg="6">
          <Chart
            title={"By Age"}
            desc={
              "Below chart showing the number of participants distributed by  age range."
            }
            chartName={"ByAgeRange"}
          />
        </Col>
        <Col className="mb-5" md="12" lg="6">
          <Chart
            title={"By Group head count"}
            desc={
              "Below chart showing the distribution of participants on the basis of no. of Guest."
            }
            chartName={"ByGroupCount"}
          />
        </Col>
        <Col className="mb-5" md="12" lg="6">
          <Chart
            title={"By Profession"}
            desc={
              "Below chart showing the distribution of participants by their profession."
            }
            chartName={"ByProfession"}
          />
        </Col>
        <Col className="mb-5" md="12" lg="6">
          <Chart
            title={"By Locality"}
            desc={
              "Below chart showing the distribution of participants by their profession."
            }
            chartName={"ByLocality"}
          />
        </Col>
      </Row>
    </>
  );
}
