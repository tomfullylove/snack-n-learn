import {connect} from 'react-redux';

import Screen from './Screen.component';

interface StateProps {
  availableVehicles: Array<any>;
}

export type Props = StateProps;

const mapStateToProps = (state: any): StateProps => ({
  availableVehicles: state.vehicles.available,
});

export default connect(mapStateToProps, {})(Screen);
