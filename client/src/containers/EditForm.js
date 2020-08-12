import React, { Component } from 'react';
import { connect } from 'react-redux';
import { offUpdateContact } from '../actions/index'

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: this.props.name, phone: this.props.phone }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange(event) {
        console.log(event.target.name, event.target.value)
        this.setState({ [event.target.name]: event.target.value });
    }

    handleCancel() {
        console.log('tombol cancel')
        this.props.offUpdateContact()
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log('tombol submit')
        // console.log(this.state.name, this.state.phone)
        if (this.state.name && this.state.phone) {
            //   this.props.updateContact(this.state.name, this.state.phone)
        } else {
            // swall
        }

    }

    render() {
        return (
            <tr>
                <td>
                    <div className="col">
                        {this.props.index}
                    </div>
                </td>
                <td>
                    <div className="col">
                        <form className="form-row">
                            <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleChange} required={true} />
                        </form>
                    </div>
                </td>
                <td>
                    <div className="col">
                        <form className="form-row">
                            <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange} required={true} />
                        </form>
                    </div>
                </td>
                <td>
                    <button type="submit" className="btn btn-outline-success  mr-2" onClick={this.handleSubmit} ><i className="fas fa-check"> Save</i></button>
                    <button type="button" className="btn btn-outline-warning" onClick={this.handleCancel}><i className="fas fa-times"> Cancel</i></button>
                </td>
            </tr>

        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    offUpdateContact: () => dispatch(offUpdateContact(ownProps.id)),
    //     updateContact: (name, phone) => dispatch(updateContact(ownProps.id, name, phone))
})

export default connect(
    null,
    mapDispatchToProps
)(EditForm)