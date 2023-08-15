// import React from 'react';
// import './styles.css';

// import MeetLogo from "../../../../assets/logo_meet.png"

// const JoinMeet = (courseData) => {

//     console.log(courseData.courseData.meeting_link)
//     const meetingLink = courseData.courseData.meeting_link

//     const handleJoinClick = () => {
//         window.open(meetingLink, '_blank');
//     };

//     return (
//         <div className="google-meet">
//             <div className="google-meet-top">
//                 <div>
//                     <div className="google-meet-logo">
//                         <img
//                             src={MeetLogo}
//                             alt="Google Meet"
//                         />
//                     </div>
//                     <div onClick={handleJoinClick}>Google Meet</div>
//                 </div>
//             </div>
//             <div>
//                 <button>Join</button>
//             </div>
//         </div>
//     );
// }

// export default JoinMeet;

import React from 'react';
import './styles.css';
import MeetLogo from '../../../../assets/logo_meet.png';

const JoinMeet = (courseData) => {
  console.log(courseData.courseData.meeting_link);
  const meetingLink = courseData.courseData.meeting_link;

  const handleJoinClick = () => {
    window.open(meetingLink, '_blank');
  };

  return (
    <div className="google-meet">
      <div className="google-meet-top">
        <div>
          <div className="google-meet-logo">
            <img src={MeetLogo} alt="Google Meet" />
          </div>
          <div>Google Meet</div>
        </div>
      </div>
      <div>
        <button onClick={handleJoinClick}>Join</button>
      </div>
    </div>
  );
};

export default JoinMeet;
