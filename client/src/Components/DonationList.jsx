import React from 'react'
import Table from 'react-bootstrap/Table';

const DonationList = ({ donations }) => {

  const renderHeader = () => (
    <thead>
      <tr>
        <th>#</th>
        <th>Donor Name</th>
        <th>Campaign ID</th>
        <th>Amount</th>
      </tr>
    </thead>
  )

  const renderBody = () => (
    <tbody>
      {
        donations.map((donation, index) => (
          <tr key={donation.id}>
            <td>{index + 1}</td>
            <td>{donation.donorName}</td>
            <td>{donation.campaignID}</td>
            <td>{donation.amount}</td>
          </tr>
        ))
      }
      {/* <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr> */}
    </tbody>
  )
  return (
    <Table striped bordered hover>
      {renderHeader()}
      {renderBody()}
    </Table>
  )
}

export default DonationList