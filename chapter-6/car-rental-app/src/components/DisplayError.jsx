import Alert from "react-bootstrap/Alert";

function DisplayError() {
  return (
    <>
      <div className="d-flex justify-content-center align-item-center mt-5">
        <Alert variant="danger">
          <Alert.Heading>You got an error!</Alert.Heading>
          <hr />
          <p className="mb-0">
            The URL just isn't valid, Make sure you are on the valid URL!
          </p>
        </Alert>
      </div>
    </>
  );
}

export default DisplayError;
