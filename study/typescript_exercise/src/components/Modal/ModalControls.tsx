import Modal from "./Modal";
import { useModal } from "./Modal.context";

function ModalControls() {
  const modal = useModal();
  const handleClickButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    modal.open(<Modal />);
  };
  return (
    <div>
      <button onClick={handleClickButton}>모달 띄우기</button>
    </div>
  );
}

export default ModalControls;
