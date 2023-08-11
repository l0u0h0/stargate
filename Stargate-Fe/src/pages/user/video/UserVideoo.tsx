import NotepadComponent from "@/atoms/video/NotepadComponent";
import VideoHeaderComponent from "@/organisms/video/VideoHeaderComponent";

const UserVideoo = () => {

  return (
    <div className="flex flex-col w-screen h-screen">
      <VideoHeaderComponent />
      {/* Cam Partt */}
      <div className="flex flex-row w-screen h-full">
        <NotepadComponent />
        <div className="flex w-full h-full">
          <div className="grow h-full bg-slate-500"></div>
        </div>
        <div className="flex w-full h-full">
          <div className="grow h-full bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default UserVideoo;
