export default function Child(props) {
  return (
    <div>
      <p style={{ color: "black" }}></p>
      <p style={{ color: "blue" }}>{props.dataBasic}</p>
      <p style={{ color: "red" }}>{props.dataState}</p>
    </div>
  );
}
