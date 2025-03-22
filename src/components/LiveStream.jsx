import { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";

const LiveStream = () => {
  const targetDate = new Date("2025-03-19T16:12:00").getTime();

  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setShowVideo(true);
        clearInterval(timer);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time) => {
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <Container className="text-center mt-5">
      {!showVideo ? (
        <>
          <p>Our live service will begin in:</p>
          <h1 className="display-4 fw-bold text-danger">
            {formatTime(timeLeft)}
          </h1>
          <p>Stay tuned and be blessed</p>
        </>
      ) : (
        <>
          <p>We are live now! watch below:</p>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.youtube.com/embed/ywKzOWpDF8I"
              title="Live Service"
              allowFullScreen
              allow="autoplay; encrypted-media"
            />
          </div>
          <Button
            href="https://www.youtube.com/@KoinoniaTestimonyBank"
            target="_blank"
            className="mt-3"
          >
            Subscribe for updates
          </Button>
        </>
      )}
    </Container>
  );
};

export default LiveStream;
