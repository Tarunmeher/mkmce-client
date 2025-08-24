import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { portalinfo } from "../../portalInfo.js";
import apiRequest from "../../../services/apiService";

const Admission = () => {
  const classList = "w-full border p-2 rounded focus:outline-none";
  const [classData, setClassData] = useState(null);

  const [form, setForm] = useState({
    student_id: "",
    academic_year: "",
    standard: "",
    section: "",
    roll_no: "",
    admission_type: "",
    fee_structure_id: "",
    remarks: "",
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiRequest(
        "POST",
        "/student/addAcademicDetails",
        form
      );
      if (response && response.success) {
        toast.success("Academic Record Added Successfully");
        handleReset();
      } else {
        toast.error("Academic Record Added Failed");
      }
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(error);
    }
  };

  const handleReset = () => {
    setForm({
      student_id: "",
      academic_year: "",
      standard: "",
      section: "",
      roll_no: "",
      admission_type: "",
      fee_structure_id: "",
      remarks: "",
    });
  };

  const fetchClassList = async () => {
    try {
      const response = await apiRequest("GET", "/class/getClasslist");
      if (response && response.success) {
        setClassData(response.data);
      } else {
        setClassData(null);
      }
    } catch (error) {
      setClassData(null);
      // toast.error(error.error || "Something Went Wrong !");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchClassList();
  }, []);

  return (
    <div className="p-4 mx-auto">
      <ToastContainer autoClose={2000} />
      <p className="text-sm text-gray-500 mb-4 cursor-pointer">
        <Link to="/">Home </Link>-{" "}
        <span className="text-blue-600">Admission Form</span>
      </p>
      <div className="p-4 mx-auto">
        <ToastContainer autoClose={2000} />
        <h2 className="text-xl font-bold mb-4">Student Admission Form</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 shadow-md rounded space-y-4"
        >
          <input
            name="student_id"
            autoComplete="off"
            value={form.student_id}
            onChange={handleChange}
            placeholder="Student ID"
            className={classList}
            required
          />

          <input
            name="academic_year"
            autoComplete="off"
            value={form.academic_year}
            onChange={handleChange}
            placeholder="Academic Year"
            className={classList}
            required
          />

          <select
            name="standard"
            value={form.standard}
            onChange={handleChange}
            className={classList}
            required
          >
            <option value="">Select Standard</option>
            {classData &&
              classData.map((item, index) => (
                <option value={item.class_id}>{item.name}</option>
              ))}
          </select>

          <select
            name="section"
            value={form.section}
            onChange={handleChange}
            className={classList}
            required
          >
            <option value="">Select Section</option>
            {["A", "B", "C", "D"].map((sec) => (
              <option key={sec} value={sec}>
                {sec}
              </option>
            ))}
          </select>

          <input
            name="roll_no"
            autoComplete="off"
            value={form.roll_no}
            onChange={handleChange}
            placeholder="Roll Number"
            className={classList}
            required
          />

          <select
            name="admission_type"
            value={form.admission_type}
            onChange={handleChange}
            className={classList}
            required
          >
            <option value="">Select Admission Type</option>
            <option value="new">New</option>
            <option value="promoted">Promoted</option>
            <option value="transferred">Transferred</option>
          </select>

          <select
            name="fee_structure_id"
            value={form.fee_structure_id}
            onChange={handleChange}
            className={classList}
            required
          >
            <option value="">Select Fee Structure</option>
            <option value="0">Class 1</option>
            <option value="2">Class 2</option>
            <option value="1">Class 3</option>
            <option value="3">Class 4</option>
          </select>

          <textarea
            name="remarks"
            value={form.remarks}
            onChange={handleChange}
            placeholder="Remarks"
            className={`${classList} resize-none`}
            rows="3"
          ></textarea>

          <div className="flex gap-4 pt-2">
            <button
              type="submit"
              className={`${portalinfo.bgColor} text-white px-4 py-2 rounded`}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleReset}
              className={`${portalinfo.bgColor_2}text-white px-4 py-2 rounded`}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admission;
