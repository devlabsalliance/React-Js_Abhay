import axios from "axios";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Fetch1Api = ({ url }) => {
  const [userdata, setData] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [url]);
  return (
    <div>
      {userdata.map((users) => {
        return <div key={users.id}> {users.name}</div>;
      })}
    </div>
  );
};
Fetch1Api.propTypes = {
  url: PropTypes.string.isRequired, // `url` must be a string and is required
};

export default Fetch1Api;
