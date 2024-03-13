import React from 'react';
interface IStudentOpinion {
  name: string;
  videoUrl: string;
  text: string;
}
const StudentOpinion = ({ name, videoUrl, text }:IStudentOpinion) => {
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
