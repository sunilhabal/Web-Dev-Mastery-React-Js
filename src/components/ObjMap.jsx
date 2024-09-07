const ObjMap = (name, price, categarory) => {
  return (
    <div style={{ backgroundColor: "grey", color: "pink" }}>
      <h2>name: {name}</h2>
      <h3>price: {price}</h3>
      <h3>categarory: {categarory}</h3>
    </div>
  );
};

export default ObjMap;
