export default function PassionCard({ title = "", text = "", svg = "" }) {
  return (
    <div className="passion-container" style={{ gridArea: title }}>
      <div className="passion-img">
        <img src={process.env.PUBLIC_URL + "/Assets/Icon/" + svg} alt={svg} />
      </div>
      <h1 className="passion-title">{title}</h1>
      <p className="paragraph">{text}</p>
    </div>
  );
}
