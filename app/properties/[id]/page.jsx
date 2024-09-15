const Rooms = ({ params }) => {
  console.log(params);
  return (
    <div>
      Good Day! <span className="font-extrabold">{params.id}</span>, How may we
      address your needs today?
    </div>
  );
};

export default Rooms;
