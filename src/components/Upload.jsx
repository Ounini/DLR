import { useEffect, useState } from "react";
import { Card, Button, Form, Container, Row, Col } from "react-bootstrap";
import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Upload() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const navigate = useNavigate();

  const extractVideoId = (url) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const getVideos = async () => {
    try {
      const q = query(
        collection(db, "videos"),
        orderBy("createdAt", "desc"),
        limit(20),
      );

      const snapshot = await getDocs(q);

      const allVideos = snapshot.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      setVideos(allVideos);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getVideos();
  }, []);

  const uploadVideo = async (e) => {
    e.preventDefault();

    if (!url.trim()) return;

    try {
      setLoading(true);

      const videoId = extractVideoId(url);

      if (!videoId) {
        alert("Invalid YouTube URL");
        return;
      }

      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`,
      );

      const data = await response.json();

      const item = data.items?.[0];

      if (!item) {
        alert("Video not found");
        return;
      }

      const video = {
        videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        date: item.snippet.publishedAt,
        channel: item.snippet.channelTitle,
        embedUrl: `https://www.youtube.com/embed/${videoId}`,
        createdAt: Date.now(),
      };

      await addDoc(collection(db, "videos"), video);

      setUrl("");
      getVideos();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteVideo = async (id) => {
    try {
      await deleteDoc(doc(db, "videos", id));
      getVideos();
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <Container className="pt-20 max-w-5xl mx-auto">
      <Card className="shadow-lg border-0 rounded-4 mb-4">
        <Card.Body className="p-4">
          <Form onSubmit={uploadVideo} className="pt">
            <Row className="g-3 align-items-center">
              <Col md={9}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Paste YouTube video link..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="rounded-3"
                />
              </Col>
              <Col md={3}>
                <Button
                  type="submit"
                  className="w-100 rounded-3 py-3"
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "Upload Video"}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      <Button variant="dark" onClick={logout} className="mb-5">
        Logout
      </Button>

      <div className="space-y-6">
        {videos.map((video) => (
          <Card
            key={video.id}
            className="shadow border-0 rounded-4 overflow-hidden mb-4"
          >
            <iframe
              className="w-full h-100"
              src={video.embedUrl}
              title={video.title}
              allowFullScreen
            />

            <Card.Body className="p-4">
              <h3 className="fw-bold mb-1">{video.title}</h3>
              <small className="text-muted d-block mb-1">{video.channel}</small>
              <small className="text-muted d-block mb-3">
                {new Date(video.date).toDateString()}
              </small>
              <p className="text-secondary line-clamp-3">{video.description}</p>

              <Button variant="danger" onClick={() => deleteVideo(video.id)}>
                Delete Video
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default Upload;
