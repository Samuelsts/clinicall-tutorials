// src/components/VideoCard/VideoCard.tsx

import React from "react";

type VideoCardProps = {
  title: string;
  description: string;
  youtubeId: string; // Apenas o ID do vídeo
};

const VideoCard: React.FC<VideoCardProps> = ({ title, description, youtubeId }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="aspect-video rounded-md overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoCard;