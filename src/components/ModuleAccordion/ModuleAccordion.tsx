import { useState } from "react";
import VideoCard from "../VideoCard/VideoCard";

type Video = {
  title: string;
  description: string;
  youtubeId: string;
};

type ModuleAccordionProps = {
  module: string;
  description: string;
  videos: Video[];
};

const ModuleAccordion = ({ module, description, videos }: ModuleAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="border border-gray-200 rounded-lg shadow-sm mb-6 bg-white">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition rounded-t-lg"
      >
        <div className="text-left">
          <h2 className="text-lg font-semibold text-gray-800">{module}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen && (
        <div className="p-4 space-y-6">
          {videos.map((video, index) => (
            <VideoCard
              key={index}
              title={video.title}
              description={video.description}
              youtubeId={video.youtubeId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ModuleAccordion;