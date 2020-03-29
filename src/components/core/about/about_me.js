import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";

function AboutMe() {
  return (
    <Fragment>
      <Container maxWidth="md">
        <p>
          {`
          Python Engineer with full-stack experience working with API systems and dealing with Linux distros
        `}
        </p>

        <p>
          {`
          I am currently a Software Engineer for Sky, 
          developing applications for the Sky broadband internet service allowing for the 
          interaction of vendor services to connect and consume services. 
          Working with Linux to create scripts to ensure robust development. 
          Applying agile and SOLID skills to develop, maintain and enhance automation tools for deployment.
        `}
        </p>
      </Container>
    </Fragment>
  );
}

export default AboutMe;
