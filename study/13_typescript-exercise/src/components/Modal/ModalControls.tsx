import Modal from "./Modal";
import { useModal } from "./Modal.context";

function ModalControls() {
  const modal = useModal();
  const handleClick = () => {
    modal.open(<Modal />);
  };
  return <button onClick={handleClick}>모달을 열어 주세요</button>;
}

export default ModalControls;
