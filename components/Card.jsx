const Card = ({ type, data }) => {
  let content;
  let width;

  switch (type) {
    case 'meteorology':
      width = 'w-2/3'; // Se for do tipo 'meteorology', ocupa 65% do espaço disponível
      content = (
        <div className="relative w-full h-80 rounded-md overflow-hidden">
          <img src="images/cold.jpg" alt="Meteorology background" className="absolute inset-0 w-full h-full object-cover rounded-md" style={{ margin: 0 }} />
          <div className="absolute inset-0 flex flex-col items-start justify-start text-white p-4">
            <h2 className="text-xl font-bold mb-2">Hola, Ruben</h2>
            <p className="text-lg">Temperature: 45 °C</p>
          </div>
        </div>
      );
      break;
    case 'sensor':
    case 'actuator':
    default:
      width = 'w-75'; // Caso contrário, ocupa 300px de largura
      content = (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-2">{data.user}</h2>
          <p className="text-lg">{type === 'sensor' ? 'Sensor data:' : 'Actuator control:'} {data.value}</p>
        </div>
      );
  }

  return (
    <div className={`p-4 rounded-md shadow-md bg-gray-800 text-white ${width}`}>
      {content}
    </div>
  );
};

export default Card;
