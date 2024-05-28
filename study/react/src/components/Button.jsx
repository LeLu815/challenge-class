function Button({ label, onClick: handleClick }) {
  console.log(handleClick);
  return <button onClick={handleClick}>{label}</button>;
}

export default Button;
