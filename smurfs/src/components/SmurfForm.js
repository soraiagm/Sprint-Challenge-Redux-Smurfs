import React from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';


class SmurfForm extends Component {
    state = {
        name: '',
        age: '',
        height: '',
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    addSmurf = event => {
        event.preventDefault();

        const smurf = this.state;
        this.props.addSmurf(smurf);
        this.setState({ name: '', age: '', height: ''})
    }
    

    render(){
        <div>
            <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
        </div>
    }

}

const mapStateToProps = state => ({
    smurfs: state.smurfs
});

export default connect(mapStateToProps, {} )(Smurfform);