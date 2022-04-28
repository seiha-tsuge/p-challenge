export default function Square(props) {
  return (
    <button className="square" onClick={props.onClick} data-cy="square">
      {props.value}
    </button>
  );
}
