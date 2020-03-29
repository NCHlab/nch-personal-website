import React, { Fragment } from "react";

// import { Document } from "react-pdf";

// import { Document, Page } from "react-pdf";

// class AboutCV extends Component {
//   state = {
//     numPages: null,
//     pageNumber: 1
//   };

//   onDocumentLoadSuccess = ({ numPages }) => {
//     this.setState({ numPages });
//   };

//   render() {
//     const { pageNumber, numPages } = this.state;

//     return (
//       <div>
//         <Document
//           file="somefile.pdf"
//           onLoadSuccess={this.onDocumentLoadSuccess}
//         >
//           <Page pageNumber={pageNumber} />
//         </Document>
//         <p>
//           Page {pageNumber} of {numPages}
//         </p>
//       </div>
//     );
//   }
// }

function AboutCV() {
  return (
    <Fragment>
      <p>{`
          Curriculum Vitae

          ReactPDF
          `}</p>
    </Fragment>
  );
}

export default AboutCV;
