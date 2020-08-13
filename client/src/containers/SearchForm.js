import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { searchContacts, loadContacts, onSearch } from '../actions';

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', phone: '' }
        this.handleChangeName = this.handleChangeName.bind(this);
          this.handleChangePhone = this.handleChangePhone.bind(this);
        //   this.handleReset = this.handleReset.bind(this);
    }

    handleChangeName(event) {
        //   let { phone } = this.state
        console.log(event.target.value)
        this.setState({ name: event.target.value })
        //   this.props.searchContacts(event.target.value, phone)
        //   this.props.onSearch({ name: event.target.value, phone: phone })
    }

    handleChangePhone(event) {
        //   let { name } = this.state
        console.log(event.target.value)
        this.setState({ phone: event.target.value })
        //   this.props.searchContacts(name, event.target.value)
        //   this.props.onSearch({ name: name, phone: event.target.value })
    }

    //    handleReset(event) {
    //       this.props.loadContacts()
    //       this.setState({ name: '', phone: '' });
    //       event.preventDefault();
    //    }

    render() {
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <form>
                        <div className="row">
                            <div className="col-3">
                                <h3>
                                    <i className="fas fa-search"> Search Contact</i>
                                </h3>
                            </div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by Name..."
                                    value={this.state.name}
                                    onChange={this.handleChangeName}
                                    required
                                />
                            </div>
                            <div className="col-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search by Phone Number..."
                                    value={this.state.phone}
                                    onChange={this.handleChangePhone}
                                    required
                                />
                            </div>
                            <div className="col">
                                <button className="btn btn-secondary"><i className="fas fa-sync-alt"> Reset</i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

// const mapStateToProps = (state) => ({
//    isSearch: state.contacts.isSearch,
//    filterName: state.contacts.filterName,
//    filterPhone: state.contacts.filterPhone
// })

// const mapDispatchToProps = dispatch => ({
//    searchContacts: (name, phone, offset, limit) => dispatch(searchContacts(name, phone, offset = 0, limit = 5)),
//    loadContacts: () => dispatch(loadContacts()),
//    onSearch: (filter) => dispatch(onSearch(filter))
// })

export default connect(
    //    mapStateToProps,
    //    mapDispatchToProps
)(SearchForm)
