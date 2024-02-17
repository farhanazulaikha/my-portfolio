import Button from '../Button';
import './modal.css';

export default function Modal({ toggleModal, modal, children }) {  
    return (
      <>
        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <p>
                    { children }
                </p>
                <div className="close-modal-div">
                    <Button buttonStyle={'close-modal'} onClick={toggleModal}>
                        Close
                    </Button>
                </div>
            </div>
          </div>
        )}
      </>
    );
  }