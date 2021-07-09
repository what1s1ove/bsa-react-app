import PropTypes from 'prop-types';
import { useCallback, useEffect } from 'hooks/hooks';
import { KeydownKey } from 'common/enums/enums';
import './style.css';

const Modal = ({ children, isOpen, onClose }) => {
  const handleEscapeDown = useCallback(({ key }) => {
    if (key === KeydownKey.ESCAPE) {
      onClose();
    }
  }, [onClose]);

  const handleOverlayCheck = ({ target }) => {
    if (!target.closest('section')) {
      onClose();
    }
  };

  useEffect(() => {
    document.documentElement.style.overflowY = 'hidden';
    document.addEventListener('keydown', handleEscapeDown);

    return () => {
      document.documentElement.style.overflowY = '';
      document.removeEventListener('keydown', handleEscapeDown);
    };
  }, [handleEscapeDown]);

  return (
    <>
      {isOpen && (
        <div className="modal" onClick={handleOverlayCheck}>
          {children}
        </div>
      )}
    </>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Modal;
