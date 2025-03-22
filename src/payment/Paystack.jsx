import { useState } from "react";
import { Container, FormControl, Toast } from "react-bootstrap";
import { PaystackButton } from "react-paystack";

const Paystack = () => {
  const [showToast, setShowToast] = useState(false);
  const [toastBg, setToastBg] = useState("success");
  const [toastText, setToastText] = useState("");

  const publicKey = "pk_test_98cc7a8e40b6480d8aec5b21efee3cb8ccb6bf2d";
  const [amount, setAmount] = useState("");
  const email = "codeemiler@gmail.com";

  const handleSuccess = (reference) => {
    setToastBg("success");
    setToastText(`✅ Payment successful! Reference: ${reference.transaction}`);
    setShowToast(true);
  };

  const handleClose = () => {
    setToastText("❌ Payment Cancelled");
    setToastBg("danger"); // Red background for cancellation
    setShowToast(true);
  };

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center">
      <h2>Enter Amount to Pay</h2>
      <FormControl
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        className="pay"
      />
      <PaystackButton
        className="pay-button"
        text="Pay now"
        amount={amount * 100}
        email={email}
        publicKey={publicKey}
        onClose={handleClose}
        onSuccess={handleSuccess}
        disabled={!amount || amount <= 0}
      />
      {/* Toast Notification */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        className="position-fixed bottom-0 end-0 p-3"
        bg={toastBg}
        delay={3000}
        autohide
      >
        <Toast.Body className="text-white">{toastText}</Toast.Body>
      </Toast>
    </Container>
  );
};

export default Paystack;
