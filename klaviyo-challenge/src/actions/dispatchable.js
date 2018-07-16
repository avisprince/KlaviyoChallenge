import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: (action) => dispatch(action)
    };
}

export default function dispatchable(component, mapStateToProps) {
    return connect(mapStateToProps, mapDispatchToProps)(component);
}