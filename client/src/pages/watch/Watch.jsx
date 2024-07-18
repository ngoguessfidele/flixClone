import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        // progress
        controls
        src="https://www.w3schools.com/html/mov_bbb.mp4"
      />
    </div>
  );
}