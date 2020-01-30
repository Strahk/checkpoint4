import React from 'react';
// import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class FormClub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Nom</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Saisissez le nom du club" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Numéro de téléphone</Label>
            <Input type="number" name="phone_number" id="phone_number" placeholder="Renseigner le téléphone du club" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="Saisissez votre email" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Quartiers</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">Décrivez votre club</Label>
            <Input type="textarea" name="description" id="description" />
          </FormGroup>
          <Button>Envoyer</Button>
        </Form>
      </div>
    )
  }
};

export default FormClub;