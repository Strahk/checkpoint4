import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Label, Input, Button, CustomInput } from 'reactstrap';
import './reference.css';

class Reference extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      phone_number: null,
      email: '',
      female_member: null,
      male_member: null,
      monthly_price: null,
      annual_price: null,
      description: '',
      address: '',
      district: '',
      districts: [],
      Manager_id_manager: 1
    };
    this.handleSubmitClub = this.handleSubmitClub.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

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
      district,
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
        district,
        Manager_id_manager
      });
    alert("Merci ! Un nouveau club dans la team ! Retrouvez votre club via la page d'accueil")
  };

  render() {
    const { districts, name } = this.state
    return (
      <div >
        <h1 className="reference-title">Rejoind notre team !</h1>
        <Form onSubmit={this.handleSubmitClub} className="form-reference">
          <FormGroup>
            <Label for="name">Nom</Label>
            <Input type="text" name="name" id="name" placeholder="Renseigner le nom de votre club" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="phonenumber">Numéro de téléphone</Label>
            <Input type="number" name="phone_number" id="phone_number" placeholder="Renseigner le téléphone du club" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Saisissez votre email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="address">Adress</Label>
            <Input type="text" name="address" id="address" placeholder="Saisissez votre email" onChange={this.handleChange} />
          </FormGroup>
          {districts.map((district, id) => (
            <CustomInput
              key={id}
              onChange={this.handleChange}
              type="radio"
              checked={name === district.name}
              value={district.name}
              id={district.id_district}
              label={district.name}
            />
          ))}
          <FormGroup>
            <Label for="subscribtion">Prix abonnement mensuel</Label>
            <Input type="number" name="monthly_price" id="monthly_price" placeholder="Saisissez votre email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="subscription">Prix abonnement annuel</Label>
            <Input type="number" name="annual_price" id="annual_price" placeholder="Saisissez votre email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="men">Nombre d'hommes licenciés</Label>
            <Input type="number" name="male_member" id="male_member" placeholder="Renseignez un nombre" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="women">Nombre de femmes licenciées</Label>
            <Input type="number" name="female_member" id="women_member" placeholder="Renseignez un nombre" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Décrivez votre club</Label>
            <Input type="textarea" name="description" id="description" placeholder="Transmettez l'envie d'intégrer votre club" onChange={this.handleChange} />
          </FormGroup>
          <Button>Envoyer</Button>
        </Form>
      </div>
    )
  }
};

export default Reference;