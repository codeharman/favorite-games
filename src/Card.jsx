export default function Card(prop) {
  return (
    <div className="div">
      <div className="container">
        <img src={prop.img}/>
        <div>
          <h1>{prop.title}</h1>
          <p className="desp">{prop.desp}</p>
        </div>
      </div>
    </div>
  )
}