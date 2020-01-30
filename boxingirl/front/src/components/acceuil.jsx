import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonDropdown, DropdownToggle, Button } from 'reactstrap';

class Acceuil extends React.Component {
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
      <div>
        <img src="" alt="boxeuse"></img>
        <Button color="danger">Référence ton club</Button>
        <ButtonDropdown >
          <DropdownToggle caret>
            Choisis un club
      </DropdownToggle>

          {/* <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu> */}

        </ButtonDropdown>
      </div>
    )
  }
};

export default Acceuil;