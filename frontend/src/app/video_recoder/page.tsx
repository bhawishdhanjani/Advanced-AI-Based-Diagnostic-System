"use client";
import React, { useRef, useState, useEffect } from "react";

const video_recoder = () => {
  const videoRef = useRef<any>(null);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);

  useEffect(() => {
    const enableVideoStream = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        setMediaStream(stream);
      } catch (error) {
        console.error("Error accessing webcam", error);
      }
    };

    enableVideoStream();
  }, []);

  useEffect(() => {
    if (videoRef.current && mediaStream) {
      videoRef.current.srcObject = mediaStream;
    }
  }, [videoRef, mediaStream]);

  useEffect(() => {
    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [mediaStream]);

  return (
    <div>
      <video ref={videoRef} autoPlay={true} />
    </div>
  );
};

export default video_recoder;
