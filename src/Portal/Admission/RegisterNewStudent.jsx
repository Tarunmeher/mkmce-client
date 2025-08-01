import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import apiRequest from "../../../services/apiService";
import ConfirmModal from '../Common/ConfirmModal';

const AddStudentForm = () => {
  const inputClass = "border p-2 rounded focus:outline-none";
  const [form, setForm] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleConfirm = () => {
    let cnf = confirm("Did you note the Registartion & Student ID");
    if(cnf){
      setShowModal(false);
    }    
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({
      ...form,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest(
        "POST",
        "/student/registerStudent",
        form
      );
      if (response && response.success) {
        setSuccessMessage(`Your Registration No is ${response.regdId} & Student ID is ${response.studentId}, Please Note It to Update Academic Detail.`)
        setShowModal(true);
        handleReset();
      } else {
        toast.error("Registration Failed");
      }
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(error);
    }
  };

  const handleReset = () => setForm({});

  return (
    <>
      <div className="p-4 mx-auto">
        <ToastContainer autoClose={2000} />
      <p className="text-sm text-gray-500 mb-4 cursor-pointer">
        <Link to="/">Home </Link>-{" "}
        <span className="text-blue-600">Add New Student</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-white shadow rounded-md space-y-6"
      >
        <div>
          <h3 className="text-lg font-bold mb-2">Student Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              name="first_name"
              autoComplete="off"
              onChange={handleChange}
              placeholder="First Name"
              className={inputClass}
              required
            />
            <input
              name="last_name"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Last Name"
              className={inputClass}
              required
            />
            <select
              name="class_id"
              autoComplete="off"
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">Class in to which Admission Of Sought</option>
              <option value="Nursery">Nursery</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
            </select>
            <select
              name="gender"
              autoComplete="off"
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">Please Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Trans-Gender">Trans-Gender</option>
            </select>
            <select
              name="caste"
              autoComplete="off"
              onChange={handleChange}
              className={inputClass}
              required
            >
              <option value="">Please Select Caste</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OBC">OBC</option>
              <option value="GEN">GEN</option>
            </select>
            <div className="flex flex-col">
              <label
                htmlFor="dob"
                className="text-sm font-semibold text-gray-700"
              >
                Date of Birth
              </label>
              <input
                name="dob"
                autoComplete="off"
                onChange={handleChange}
                placeholder="Date of Birth"
                type="date"
                className={inputClass}
                required
              />
            </div>
            <input
              name="age"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Age Of The Date Of Admission"
              className={inputClass}
            />
            <input
              name="nationality"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Nationality"
              className={inputClass}
            />
            <input
              name="religion"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Religious"
              className={inputClass}
            />
            <input
              name="mother_tounge"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Mother Tongue"
              className={inputClass}
            />
            <input
              name="current_address"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Current Address"
              className={inputClass}
            />
            <input
              name="parmanent_address"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Parmanent Address"
              className={inputClass}
            />
            <input
              name="identification_mark"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Personal Mark of Identification"
              className={inputClass}
            />
            <input
              name="adhaar"
              autoComplete="off"
              maxLength={12}
              onChange={handleChange}
              placeholder="Aadhaar Number"
              className={inputClass}
            />
            <input
              name="blood_group"
              autoComplete="off"
              maxLength={5}
              onChange={handleChange}
              placeholder="Blood Group"
              className={inputClass}
            />

            <input
              name="health_record"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Health Record"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-2">Parents Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              name="fathers_name"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Father's Name"
              className={inputClass}
              required
            />

            <input
              name="father_occupation"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Father's Occupation"
              className={inputClass}
              required
            />

            <input
              name="annual_income"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Annual Income"
              className={inputClass}
              required
            />

            <input
              name="mothers_name"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Mother's Name"
              className={inputClass}
              required
            />

            <input
              name="legal_guardian"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Name of Legal Guardian"
              className={inputClass}
            />

            <input
              name="address_legal_guardian"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Address of Legal Guardian"
              className={inputClass}
            />

            <input
              name="fathers_adhaar"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Father's Aadhaar Number"
              className={inputClass}
            />

            <input
              name="mothers_adhaar"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Mother's Aadhaar Number"
              className={inputClass}
            />

            <input
              name="contact_number"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Mobile Number"
              className={inputClass}
              maxLength={10}
              required
            />
            <input
              name="email"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Email ID"
              className={inputClass}
              required
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Academic Information</h3>

          {/* First School Record */}
          <p className="font-medium text-sm text-gray-600 mb-1">
            Previous School 1
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              name="last_school"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Name of the School"
              className={inputClass}
            />
            <input
              name="last_class"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Class"
              className={inputClass}
            />
            <input
              name="last_syllabus"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Syllabus Followed"
              className={inputClass}
            />
            <input
              name="score_in_last_school_exam"
              autoComplete="off"
              onChange={handleChange}
              placeholder="Percentage/Grade in Final Exam"
              className={inputClass}
            />
          </div>

          {/* Second School Record */}
          {/* <p className="font-medium text-sm text-gray-600 mb-1">Previous School 2</p>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
							<input
								name="school2Name"
								autoComplete="off"
								onChange={handleChange}
								placeholder="Name of the School"
								className={inputClass}
							/>
							<input
								name="school2Class"
								autoComplete="off"
								onChange={handleChange}
								placeholder="Class"
								className={inputClass}
							/>
							<input
								name="school2Syllabus"
								autoComplete="off"
								onChange={handleChange}
								placeholder="Syllabus Followed"
								className={inputClass}
							/>
							<input
								name="school2Grade"
								autoComplete="off"
								onChange={handleChange}
								placeholder="Percentage/Grade in Final Exam"
								className={inputClass}
							/>
						</div> */}
        </div>
        <div>
          <h3 className="text-lg font-bold mb-2">Document Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Upload ZIP file (Aadhaar Card, CLC, Passport Photo)
              </label>
              <input
                name="documentZip"
                type="file"
                accept=".zip"
                onChange={handleChange}
                className="border p-2 rounded w-full"
                // required
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-yellow-400 px-4 py-2 rounded text-white font-semibold"
          >
            Save
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-blue-900 px-4 py-2 rounded text-white font-semibold"
          >
            Reset
          </button>
        </div>
      </form>
    </div>

      <ConfirmModal
        isOpen={showModal}
        title="Registration Successfull !"
        message={successMessage}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default AddStudentForm;
