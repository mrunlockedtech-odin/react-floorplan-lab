const Bedroom = (props) => {
  return (
    <div className="bedroom" id={`bed-${props.bedNum}`}>
      <p>Bedroom {props.bedNum}</p>
    </div>

  );
}

export default Bedroom;