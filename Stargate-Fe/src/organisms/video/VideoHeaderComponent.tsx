import TimeLeftComponent from '@/atoms/common/TimeLeftComponent';
import ProFileIcon from '@/atoms/video/ProFileIcon';
import React, { useState } from 'react';

const VideoHeaderComponent = () => {
  const [time, setTime] = useState({ min: 0, sec: 0 });

  return (
    <div className="flex grid-col-4">
      <div className="col-span-1">
        <ProFileIcon />
      </div>
      <div className="col-span-3">
        <TimeLeftComponent min={time.min} sec={time.sec} />

      </div>
    </div>
  );
}

export default VideoHeaderComponent;