const Events = () => {
  const handleClick = () => {
    alert("you clicked the button");
  };

  const addition = (a) => {
    alert(a + 210);
  };
  return (
    <>
      <h1>We are learning events</h1>
      <div>
        {/* <button onMouseOver={handleClick}>Click this button</button> */}
        <button onClick={handleClick}>Click this button</button>
      </div>

      <div style={{padding:"20PX"}}>
        <button onClick={() => addition(150)}>Addition</button>
      </div>
    </>
  );
};

export default Events;
