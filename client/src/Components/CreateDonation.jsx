import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import React, { useReducer, useState } from 'react'
import DonationList from './DonationList';


const INITIAL_DONATION_STATE = {
  donorName: "",
  campaignID: "",
  amount: "",
}
const INITIAL_CAMPAIGNS = [
  {
    id: 1,
    title: "Campaign 1",
  },
  {
    id: 2,
    title: "Campaign 2",
  },
  {
    id: 3,
    title: "Campaign 3",
  },
]

const CreateDonation = () => {
  const [donation, setDonation] = useReducer((state, payload) => ({
    ...state,
    ...payload,
  }), { ...INITIAL_DONATION_STATE })

  const [donationsList, setDonationsList] = useState([])

  const renderOptions = () => {
    if (!INITIAL_CAMPAIGNS.length) return

    return (
      INITIAL_CAMPAIGNS.map((item) =>
        (<option key={item.id} value={+item.id}>{item.title}</option>)
      )
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!donation.donorName || !donation.campaignID || !donation.amount) return

    setDonationsList((prevList) => ([...prevList, donation]))
    setDonation(INITIAL_DONATION_STATE)
  }

  return (
    <Container style={{ marginTop: '20px' }}>
      <h1>Create Donation</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Select
          onChange={(e) => setDonation({ campaignID: e.target.value })}
          aria-label="Default select example"
        >
          <option selected={true} disabled={true}>Open this select menu</option>
          {renderOptions()}
        </Form.Select>
        <Form.Label>Donor name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={donation.donorName}
          onChange={(e) => setDonation({ donorName: e.target.value })}
        />
        <Form.Label>Amount of donation</Form.Label>
        <Form.Control
          onChange={(e) => setDonation({ amount: e.target.value })}
          type="number"
          placeholder="Amount"
          value={donation.amount}
        />
        <Button style={{ margin: '20px 0' }} variant="primary" type="submit" >
          Submit
        </Button>
      </Form>

      <DonationList donations={donationsList} />
    </Container>
  )
}

export default CreateDonation