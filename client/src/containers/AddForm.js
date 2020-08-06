import React, { Component } from 'react'
import { connect } from 'react-redux';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', phone: '', isToggleOn: true };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    render() {
        return (
            <div>
                <button onClick={this.handleClick} id="btn-collapse" className={this.state.isToggleOn ? "btn btn-primary ml-3 mb-3 d-flex" : "btn btn-warning ml-3 mb-3 d-flex"} type="button" data-toggle="collapse" data-target="#add-collapse" aria-expanded="false" aria-controls="add-collapse">
                    {this.state.isToggleOn ? <i className="fas fa-user-plus"> Add Contact</i> : <i className="fas fa-ban"> Cancel</i>}
                </button>

                <div className="collapse mb-3" id="add-collapse">
                    <div className="card card-body">
                        <form >
                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label><b>Name</b></label>
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
                                    <div className="col">
                                        <label><b>Phone</b></label>
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
                                </div>
                            </div>

                            <div className="row d-flex justify-content-end" >
                                <button type="submit" className="btn btn-success">
                                    <i className="fas fa-plus"> Save</i>
                                </button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    // mapStateToProps,
    // mapDispatchToProps
)(AddForm)