import PropTypes from 'prop-types';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const Toastr = ({
  timeOut = 4000,
  position = `top-right`,
  transitionIn = `fadeIn`,
  transitionOut = `fadeOut`,
  isCloseOnToastrClick = true,
  isProgressBar = true,
  isNewestOnTop = false,
}) => (
  <ReduxToastr
    timeOut={timeOut}
    position={position}
    transitionIn={transitionIn}
    transitionOut={transitionOut}
    progressBar={isProgressBar}
    closeOnToastrClick={isCloseOnToastrClick}
    newestOnTop={isNewestOnTop}
  />
);

Toastr.propTypes = {
  timeOut: PropTypes.number,
  position: PropTypes.string,
  transitionIn: PropTypes.string,
  transitionOut: PropTypes.string,
  isProgressBar: PropTypes.bool,
  isNewestOnTop: PropTypes.bool,
  isCloseOnToastrClick: PropTypes.bool,
};

export default Toastr;
