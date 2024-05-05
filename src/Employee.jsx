import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularWebcam from "./CircularWebcam";

const Employee = () => {
  const [employees, setEmployees] = useState([]);
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    message: "",
    type: "",
  });
  const [showWebcam, setShowWebcam] = useState(false);
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleTrain = (id) => {
    setCurrentEmployeeId(id); // Set the current employee ID to know whom to train
    setShowWebcam(true); // Show the webcam component for training
  };

  const handleWebcamResponse = async (response) => {
    setShowWebcam(false); // Hide the webcam after receiving the response
    if (response.error) {
      setAlertInfo({ show: true, message: response.error, type: "error" });
    } else {
      try {
        // Assuming you want to make another API call upon successful initial response
        const response = await axios.post("http://127.0.0.1:3001/api/ai/train");
        // Check response for success and update state accordingly
        if (response.status === 200) {  // Assuming 200 OK means success
          setAlertInfo({
            show: true,
            message: "Training successful!",
            type: "success",
          });
        } else {
          throw new Error('Training failed with status: ' + response.status);
        }
      } catch (error) {
        setAlertInfo({
          show: true,
          message: "Training failed: " + error.message,
          type: "error"
        });
      }
    }
  };
  

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:3001/api/employees/all"
      );
      setEmployees(response.data);
    } catch (error) {
      console.error("Failed to fetch employees", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const employeeData = {
      name: formData.get("name"),
      date_of_birth: formData.get("date_of_birth"),
      department: formData.get("department"),
      address: formData.get("address"),
      contact_number: formData.get("contact_number"),
    };

    try {
      await axios.post(
        "http://127.0.0.1:3001/api/employees/create",
        employeeData
      );
      setAlertInfo({
        show: true,
        message: "Employee created successfully!",
        type: "success",
      });
      fetchEmployees();
    } catch (error) {
      setAlertInfo({
        show: true,
        message: "Failed to create employee",
        type: "error",
      });
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:3001/api/employees/delete/${id}`);
      setAlertInfo({
        show: true,
        message: "Employee deleted successfully!",
        type: "success",
      });
      fetchEmployees();
    } catch (error) {
      setAlertInfo({
        show: true,
        message: "Failed to delete employee",
        type: "error",
      });
    }
  };

  useEffect(() => {
    let timer;
    if (alertInfo.show) {
      timer = setTimeout(() => {
        setAlertInfo({ ...alertInfo, show: false });
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [alertInfo]);

  return (
    <div className="bg-[#032B44] p-6 rounded-lg shadow">
      <h1 className="text-xl text-white font-bold mb-6">New Employee</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="text-white block text-sm font-bold mb-2">
            Enter the employee name
          </label>
          <input
            type="text"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="text-white block text-sm font-bold mb-2">Date of Birth</label>
          <input
            type="date"
            name="date_of_birth"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="text-white block text-sm font-bold mb-2">Select Department</label>
          <select
            name="department"
            className="shadow border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="HR">HR</option>
            <option value="IT">IT</option>
            <option value="Finance">Finance</option>
            <option value="Operations">Operations</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="text-white block text-sm font-bold mb-2">Address</label>
          <input
            type="text"
            name="address"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="text-white block text-sm font-bold mb-2">Contact Number</label>
          <input
            type="tel"
            name="contact_number"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
        >
          Save
        </button>
      </form>
      {alertInfo.show && (
        <div
          className={`fixed top-5 left-1/2 transform -translate-x-1/2 px-2 py-2 rounded text-white ${
            alertInfo.type === "error" ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {alertInfo.message}
        </div>
      )}
      {showWebcam && (
        <div
          style={{ zIndex: 10 }}
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center"
        >
          <CircularWebcam
            endpointUrl={`http://127.0.0.1:3001/api/ai/upload/${currentEmployeeId}`}
            numImages={10}
            onResponse={handleWebcamResponse}
            buttonLabel={"Train"}
          />
        </div>
      )}
      <div className="mt-8">
        <h2 className="text-white text-xl font-bold mb-4">Employees</h2>
        <div className="overflow-x-auto">
          <table className="text-white min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-2 py-2 text-left">Name</th>
                <th className="px-2 py-2 text-left">Date of Birth</th>
                <th className="px-2 py-2 text-left">Department</th>
                <th className="px-2 py-2 text-left">Address</th>
                <th className="px-2 py-2 text-left">Contact Number</th>
                <th className="px-2 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="m-2">
                  <td className="px-2 py-2 md:px-2 md:py-4">{employee.name}</td>
                  <td className="px-2 py-2 md:px-2 md:py-4">{employee.date_of_birth}</td>
                  <td className="px-2 py-2 md:px-2 md:py-4">{employee.department}</td>
                  <td className="px-2 py-2 md:px-2 md:py-4">{employee.address}</td>
                  <td className="px-2 py-2 md:px-2 md:py-4">{employee.contact_number}</td>
                  <td className="px-2 py-2 md:px-2 md:py-4">
                    <button
                      onClick={() => handleTrain(employee.id)}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:translate-y-1 hover:shadow-lg mr-2"
                    >
                      Train
                    </button>
                    <button
                      onClick={() => handleDelete(employee.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 rounded focus:outline-none focus:shadow-outline transition-transform transform hover:translate-y-1 hover:shadow-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employee;
