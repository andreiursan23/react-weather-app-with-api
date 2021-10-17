import ClipLoader from "react-spinners/ScaleLoader";
import { useState } from "react";

const WeatherSpinner = ({ loading }) => {
    let color = "#949596";

    return (
      <div className="sweet-loading">
        <ClipLoader color={color} loading={loading} size={150} />
      </div>
    );
}

export default WeatherSpinner;