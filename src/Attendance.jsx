import React, { useState } from 'react';
import CircularWebcam from './CircularWebcam';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

const Attendance = () => {
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);
  const [attendanceTime, setAttendanceTime] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState(null);
  const [alreadyMarked, setAlreadyMarked] = useState(false);

  const handleResponse = async (names) => {
    if (alreadyMarked) {
      setError("You have already marked your attendance for today.");
      setTimeout(() => setError(null), 5000); // Reset error after 5 seconds
      return;
    }
    try {
      const mostOccurred = mode(names);
      const id = mostOccurred.persons[0];
      const response = await axios.get(`/api/employees/get/${id}`);
      const name = response.data.name;
      try {
        const currentTime = new Date();
        const attendanceDate = currentTime.toISOString().slice(0, 10);
        const attendanceHour = currentTime.getHours();
        const attendanceMinute = String(currentTime.getMinutes()).padStart(2, '0'); // Ensure minute is a 2-digit number
        const isLate = attendanceHour > 8 || (attendanceHour === 8 && attendanceMinute >= 30);
        let status = isLate ? "late" : "present";
        await attendanceMark(id, attendanceDate, attendanceHour, attendanceMinute, status);
        setPrediction(name);
        setAttendanceTime(`${attendanceHour}:${attendanceMinute}`);
        setAttendanceStatus(status);
        setAlreadyMarked(true);
        setTimeout(() => setPrediction(null), 5000); // Reset after 5 seconds
      } catch (error) {
        setError("Failed to mark attendance. Please try again.");
        setTimeout(() => setError(null), 5000); // Reset error after 5 minutes
      }
    } catch (error) {
      setError("Failed to get employee data. Please try again.");
      setTimeout(() => setError(null), 5000); // Reset error after 5 minutes
    }
  };

  const attendanceMark = async (id, date, hour, minute, status) => {
    try {
      const payload = {
        employee_id: id,
        date,
        time: `${hour}:${String(minute).padStart(2, '0')}`, // Ensure minute is a 2-digit number
        status
      };
      console.log(payload);
      const response = await axios.post(`/api/attendance/mark`, payload); // Changed the URL to include the port number
      return response.data;
    } catch (error) {
      throw new Error("Failed to mark attendance. Please try again.");
    }
  };

  const mode = arr =>
    arr.reduce(
      (acc, val) => (
        acc[val] ? acc[val]++ : acc[val] = 1,
        acc.max < acc[val] && (acc.max = val, acc.mode = val),
        acc
      ),
      { max: 0 }
    ).mode;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-6">Please align your face within the circle</h2>
      <CircularWebcam endpointUrl="/api/ai/predict" numImages={3} onResponse={handleResponse} />
      {prediction && (
        <div className="mt-6">
          <p className="text-xl font-semibold">
            Hi {prediction}, your attendance has been marked for {new Date().toDateString()} at {attendanceTime}
            {attendanceStatus === "late" ? (
              <span className='mx-4' style={{ color: 'red' }}>
                <FontAwesomeIcon icon={faClock} /> Late Attendance
              </span>
            ) : (
              <span>
                On Time
              </span>
            )}
          </p>
        </div>
      )}
      {error && (
        <div className="fixed top-5 z-100 w-full text-center">
          <div className="mx-auto p-4 bg-red-500 text-white max-w-lg">
            {error}
          </div>
        </div>
      )}
    </div>
  );
};

export default Attendance;