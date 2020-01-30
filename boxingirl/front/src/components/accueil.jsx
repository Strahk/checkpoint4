import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonDropdown, DropdownToggle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './accueil.css';

class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clubs: []
    };
  };

  componentDidMount() {
    axios
      .get('/user/clubs')
      .then(res => res.data)
      .then(result =>
        this.setState({
          clubs: result
        })
      );
  };

  render() {
    return (
      <div className="acceuil-container">
        <div>
          <h1>LA BOXE EST AUSSI UN SPORT DE FEMME !</h1>
        </div>
        <div>
          <Button color="danger" className="button-acceuil"><Link to="/reference" className="link">Référence ton club</Link></Button>
          <ButtonDropdown >
            <DropdownToggle caret>Choisis un club</DropdownToggle>
          </ButtonDropdown>
        </div>
      </div >
    )
  }
};

export default Accueil;