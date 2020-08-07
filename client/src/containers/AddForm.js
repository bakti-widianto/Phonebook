import React, { Component } from 'react'
import { connect } from 'react-redux';
import { postContact } from '../actions'

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', phone: '', isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.postContact(this.state.name, this.state.phone)
        this.setState({ name: '', phone: '' })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick} id="btn-collapse" className={this.state.isToggleOn ? "btn btn-primary ml-3 mb-3 d-flex" : "btn btn-warning ml-3 mb-3 d-flex"} type="button" data-toggle="collapse" data-target="#add-collapse" aria-expanded="false" aria-controls="add-collapse">
                    {this.state.isToggleOn ? <i className="fas fa-user-plus"> Add Contact</i> : <i className="fas fa-ban"> Cancel</i>}
                </button>

                <div className="collapse mb-3" id="add-collapse">
                    <div className="card card-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row">
                                <div className="col-3">
                                    <h3>
                                        <i className="fas fa-address-card"> Add New Contact: </i>
                                    </h3>
                                </div>
                                <div className="col-4">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Input contact name..."
                                        value={this.state.name}
                                        required={true}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <div className="col-4">
                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="Input phone number..."
                                        value={this.state.phone}
                                        className="form-control"
                                        required={true}
                                        onChange={this.handleChange}
                                    />
                                </div>
                                <button
                                    className="btn btn-secondary"

                                >save</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => ({
    postContact: (name, phone) => dispatch(postContact(name, phone))
})

export default connect(
    null,
    mapDispatchToProps
)(AddForm)