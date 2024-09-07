import obj from "./Obj";
import ObjMap from "./ObjMap";

const Filter = () => {
  return (
    <div>
      {obj.map((name, price, categarory) => (
        <ObjMap name={name} price={price} categarory={categarory} key={name} />
      ))}
    </div>
  );
};

export default Filter;
