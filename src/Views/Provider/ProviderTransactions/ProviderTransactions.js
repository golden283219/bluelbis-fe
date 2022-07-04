import React from 'react';
import { Col, Container, Row } from "reactstrap";
import GDataTable from "../../../Components/GComponents/GDataTable";
import Select from "react-select";
import ProviderAccountAside from '../ProviderAccountAside/ProviderAccountAside';
const ProviderTransactions = () => {
    return (
      <>
        <section className="pt60 pb60">
          <Container>
            <Row>
              <Col lg={5} md={5} xl={4}>
                <ProviderAccountAside />
              </Col>
              <Col lg={7} md={7} xl={8}>
                <div className="d-flex align-items-center flex-wrap justify-content-between mb15 pb6 borBottom">
                  <div className="flex-fill">
                    <h3 className="fBold">Transactions</h3>
                  </div>
                  <Select
                    className=" themeSelect flex-grow-1"
                    classNamePrefix="themeSelect"
                  />
                </div>
                <TransactionsTable />
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  };

export default ProviderTransactions;

const TransactionsTable = () => {
    return (
      <>
        <GDataTable>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#250234564</td>
              <td>Referral Bonus</td>
              <td>$120</td>
              <td>April 26, 2021 9:30 am</td>
              <td>Credit</td>
            </tr>
          </tbody>
        </GDataTable>
      </>
    );
  };
  
