import { useModal } from "./Modal.context";

function Modal() {
  const modal = useModal();
  const handleClick = () => {
    modal.close();
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white w-80 h-40 flex justify-center items-center flex-col gap-5">
        <h1 className="text-gray-700 text-xl">모달 내용입니다!</h1>
        <button onClick={handleClick}>모달 닫기</button>
      </div>
    </div>
  );
}

export default Modal;
