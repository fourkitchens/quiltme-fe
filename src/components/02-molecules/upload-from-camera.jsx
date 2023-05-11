import React, { useEffect, useRef } from "react";
import Button from "@mui/material/Button";

export default function UploadFromCamera({ setPhotoURL }) {
  const videoRef = useRef(null);
  const photoRef = useRef(null);
  const stripRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          width: { ideal: 300 },
          height: { ideal: 300 },
          facingMode: "environment",
        },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const takePhoto = () => {
    let video = videoRef.current;
    let canvas = photoRef.current;
    let photo = stripRef.current;
    let context = canvas.getContext("2d");

    const height = video.videoHeight;
    const width = video.videoWidth;

    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);
      const data = canvas.toDataURL("image/png");
      setPhotoURL(data);

      const image = document.createElement("image");
      image.setAttribute(
        'src',
        data,
      );
      
      image.setAttribute('alt', 'thumbnail');
      if (photo.firstChild) {
        photo.replaceChild(image, photo.firstChild);
      } else {
        photo.appendChild(image, photo.firstChild);
      }
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={() => takePhoto()}>
        Take a photo
      </Button>
      <video ref={videoRef} />
      <canvas ref={photoRef} />
      <div>
        <div ref={stripRef} />
      </div>
    </div>
  );
}
