import React, { useState, useEffect } from 'react';
import axios from './api';

const AttendanceManage = () => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    const fetchAttendance = async () => {
      
      try {
        const response = await axios.get('/api/attendance/all');
            console.log(response.data);
        setAttendance(response.data.attendance); // Set the attendance data from the response
      } catch (error) {
        console.error("Failed to fetch attendance:", error);
        // Optionally handle errors, e.g., show an error message
      }
    };

    fetchAttendance();
  }, []);

  return (
    <div className="bg-[#032B44] rounded-lg max-w-4xl mx-auto p-4">
      <h1 className="text-white text-2xl font-bold text-center mb-4">Attendance Sheet</h1>
      <div className="overflow-x-auto mt-4">
        <table className="w-full text-sm text-left text-zinc-500 dark:text-zinc-400">
          <thead className="text-xs text-zinc-700 uppercase bg-zinc-50 dark:bg-zinc-700 dark:text-zinc-400">
            <tr>
              <th scope="col" className="py-3 px-6">Date</th>
              <th scope="col" className="py-3 px-6">Employee Name</th>
              <th scope="col" className="py-3 px-6">Time</th>
              <th scope="col" className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((record, index) => (
              <tr key={index} className="bg-white border-b dark:bg-zinc-800 dark:border-zinc-700">
                <td className="py-4 px-6">{record.date}</td>
                <td className="py-4 px-6">{record.employee_name}</td>
                <td className="py-4 px-6">{record.time}</td>
                <td className="py-4 px-6">{record.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceManage;