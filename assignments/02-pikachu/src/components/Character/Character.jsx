function Character({ src, size, position, className }) {
  return (
    <img
      // style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      style={{
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className={className}
      src={src}
    ></img>
  );
}

export default Character;
