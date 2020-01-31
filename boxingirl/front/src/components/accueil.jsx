import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonDropdown, DropdownToggle, Button, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './accueil.css';

class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: [],
    };
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  componentDidMount() {
    axios
      .get('/boxingirl/clubs')
      .then(res => res.data)
      .then(result =>
        this.setState({
          clubs: result
        })
      );
  };

  handelClick() {
    axios
      .get('/boxingirl/clubs/:id')
      .then(res => res.data)
      .then(result =>
        this.setState({
          clubs: result
        })
      );
  };

  render() {
    const { clubs } = this.state
    return (
      <div className="acceuil-container">
        <div>
          <h1>LA BOXE EST AUSSI UN SPORT DE FEMME !</h1>
        </div>
        <div>
          <Button color="danger" className="button-acceuil"><Link to="/reference" className="link">Référence ton club</Link></Button>
          <select onClick={this.hanleClick}>
            {clubs.map(club => (<option>{club.name}</option>))}
          </select>
        </div>
      </div >
    )
  }
};

export default Accueil;