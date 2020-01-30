import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  };

  async handleSubmitClub(event) {
    event.preventDefault();
    const { name,
      phone_number,
      email,
      female_member,
      male_member,
      monthly_price,
      annual_price,
      description,
      address,
      Manager_id_manager } = this.state;
    await axios
      .post('/boxingirl/clubs', {
        name,
        phone_number,
        email,
        female_member,
        male_member,
        monthly_price,
        annual_price,
        description,
        address,
        Manager_id_manager
      });
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="text">Nom</Label>
            <Input type="tex" name="mon" id="nom" placeholder="Saisissez votre nom" />
          </FormGroup>
          <FormGroup>
            <Label for="text">Prénom</Label>
            <Input type="text" name="prénom" id="prénom" placeholder="Saisissez votre prénom" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Renseigner votre email" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Tapez votre text ici:</Label>
            <Input type="textarea" name="text" id="text" />
          </FormGroup>
          <Button>Envoyer</Button>
        </Form>
      </div>
    )
  }
};

export default ContactUs;