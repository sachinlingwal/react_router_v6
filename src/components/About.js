import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const params = useParams();
  console.log(params);
  return <div>About ID {params.id}</div>;
};

export default About;
