import { Box, Container } from "@chakra-ui/react";
import React from "react";

const Map = ({ data }) => {
  console.log(data?.city?.coord?.lat);
  return (
    <Container
      height={"300px"}
      width={"100%"}
      border={"1px"}
      borderColor={"white"}
      rounded={"3xl"}
      bg={"#2E2F38"}
      p={0}
    >
      <iframe
        width="100%"
        height="100%"
        allowfullscreen=""
        loading="lazy"
        style={{ borderRadius: "20px" }}
        referrerpolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14130.859891299282!2d${data?.city?.coord?.lon}!3d${data?.city?.coord?.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1739359842756!5m2!1sen!2snp`}
      ></iframe>
    </Container>
  );
};

export default Map;
