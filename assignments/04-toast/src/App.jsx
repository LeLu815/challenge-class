import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    e.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="제목" required />
      <input type="text" name="content" placeholder="내용" required />
      <input
        type="number"
        name="time"
        placeholder="시간"
        required
        defaultValue="2000"
      />
      <button>제출</button>
    </form>
  );
}

export default App;
