import ClipLoader from "react-spinners/ScaleLoader";

const WeatherSpinner = ({ loading }) => {
    let color = "#949596";

    return (
      <div className="sweet-loading">
        <ClipLoader color={color} loading={loading} height={50} width={6} radius={3} margin={3} />
      </div>
    );
}

export default WeatherSpinner;