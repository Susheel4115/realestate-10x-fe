import "./nav.css";
export default function Nav() {
  return (
    <div className="nav">
      <p className="choose1">
        <span className="digit1">1.</span> Basic info
      </p>
      <p className="choose">
        <span className="digit">2.</span>Property Detail
      </p>
      <p className="choose1">
        <span className="digit1">3.</span>General Info
      </p>
      <p className="choose1">
        <span className="digit1">4.</span>Location info
      </p>
    </div>
  );
}
