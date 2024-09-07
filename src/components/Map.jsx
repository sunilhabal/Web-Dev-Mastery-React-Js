const Map = () => {
  let obj = [
    { id: 1, name: "sunil", proffesssion: "eng" },
    { id: 2, name: "giri", proffesssion: "doct" },
    { id: 3, name: "rocky", proffesssion: "act" },
  ];

  return (
    <div>
      {obj.map((data) => (
        <div key={data.id}>
          <h2>name :{data.name}</h2>
          <h3>proffesssion :{data.proffesssion}</h3>
        </div>
      ))}
    </div>
  );
};

export default Map;
