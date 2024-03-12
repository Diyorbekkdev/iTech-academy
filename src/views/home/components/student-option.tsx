import React from 'react';

const StudentOpinion = ({ name, videoUrl, text }) => {
  return (
    <div className="relative flex flex-col items-center bg-light-gray shadow-md rounded-lg overflow-hidden">
      <h3 className="text-xl font-semibold absolute bottom-9 left-3 bg-white py-4 px-[18px] rounded-full">
        {name}
      </h3>
      <video
        width="100%"
        height="300px"
        src={videoUrl}
        controls
        className="object-cover"
        title={`${name}'s Opinion Video`}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default StudentOpinion;
