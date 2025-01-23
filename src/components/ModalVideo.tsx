import ReactPlayer from "react-player";

interface ModalVideoProps {
  url: string;
}

const ModalVideo: React.FC<ModalVideoProps> = ({ url }) => {
  return (
    <div className="w-full max-w-md mx-auto aspect-video">
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls={true}
        playing={false}
      />
    </div>
  );
};

export default ModalVideo;
