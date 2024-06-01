import "./App.css";
import { useModal } from "./contexts/modal.context";

function App() {
  const modalFunc = useModal();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    modalFunc.add(formDataObj);
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={form_style}>
      <h1 className={h1_style}>토스트 컨트롤러</h1>
      <div className={div_input_container_stlye}>
        <label className={label_style} htmlFor="title">
          제목 (필수)
        </label>
        <input
          className={input_style}
          id="title"
          type="text"
          name="title"
          placeholder="제목"
          required
        />
      </div>
      <div className={div_input_container_stlye}>
        <label className={label_style} htmlFor="content">
          내용 (필수)
        </label>
        <input
          className={input_style}
          id="content"
          type="text"
          name="content"
          placeholder="내용"
          required
        />
      </div>
      <div className={div_input_container_stlye}>
        <label className={label_style} htmlFor="time">
          노출 시간(ms) (선택)
        </label>
        <input
          className={input_style}
          id="time"
          type="number"
          name="time"
          placeholder="시간"
          required
          defaultValue="2000"
        />
      </div>
      <button className={button_style}>토스트 띄우기</button>
    </form>
  );
}

export default App;

const form_style = "grid grid-cols-1 gap-y-6";
const h1_style = "text-2xl font-semibold text-center";
const div_input_container_stlye = "flex flex-col gap-y-2";
const label_style = "text-sm font-medium";
const input_style = "border px-4 py-2.5 rounded-md w-80";
const button_style =
  "bg-black text-white py-4 text-[15px] rounded-md font-medium hover:bg-black/80 transition active:bg-black/70";
