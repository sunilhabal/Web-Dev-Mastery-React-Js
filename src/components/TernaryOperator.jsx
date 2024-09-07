const TernaryOperator = ({ name, age }) => {
  const obj = {
    backgroundColor:"gray",
    padding:"10px",
    margin:"14px",
    borderRadius:"29px"
  }
  return (
    <div style={obj}>
      <div>
        <h1>name = {name}</h1>
      </div>

      <div>
        {age > 18 ? <h1>you can drive</h1> : <h1>you can not drive</h1>}
      </div>
    </div>
  );
};

export default TernaryOperator;
