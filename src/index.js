import Modal from './components/modal';
import * as modalActions from './actions';
import modalReducer from './reducers/modal';
import ModalStyles from './styles/modals.css';

export const modal = Modal;
export const actions = modalActions;
export const reducer = modalReducer;
export const styles = ModalStyles;