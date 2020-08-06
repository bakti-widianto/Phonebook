import { connect } from 'react-redux';
// import { deleteContact, resendContact, onUpdateContact } from '../actions';
import Contact from '../components/Contact';

const mapDispatchToProps = (dispatch, ownProps) => ({
//    onUpdateContact: () => dispatch(onUpdateContact(ownProps.id)),
//    onDelete: () => dispatch(deleteContact(ownProps.id)),
//    onResend: () => dispatch(resendContact(ownProps.id, ownProps.name, ownProps.phone))
})

export default connect(
   null,
   mapDispatchToProps
)(Contact)