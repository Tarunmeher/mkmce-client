import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { portalinfo } from '../../portalInfo.js'


const Admission = () => {
    const classList = "w-full border p-2 rounded focus:outline-none";

    const [form, setForm] = useState({
        studentId: '',
        academicYear: '',
        standard: '',
        section: '',
        rollNo: '',
        admissionType: '',
        remarks: ''
    });

    const [records, setRecords] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fields = Object.values(form);
        if (fields.some(f => !f)) {
            toast.error('Please fill in all required fields!');
            return;
        }
        setRecords([...records, form]);
        toast.success('Student information submitted successfully!');
        handleReset();
    };

    const handleReset = () => {
        setForm({
            studentId: '',
            academicYear: '',
            standard: '',
            section: '',
            rollNo: '',
            admissionType: '',
            remarks: ''
        });
        toast.info('Form cleared');
    };

    return (
        <div className="p-4 mx-auto">
            <ToastContainer autoClose={2000} />
            <p className="text-sm text-gray-500 mb-4 cursor-pointer"><Link to='/'>Home </Link>- <span className="text-blue-600">Admission Form</span></p>
            <div className="p-4 mx-auto">
                <ToastContainer autoClose={2000} />
                <h2 className="text-xl font-bold mb-4">Student Admission Form</h2>
                <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded space-y-4">
                    <input
                        name="studentId"
                        autoComplete="off"
                        value={form.studentId}
                        onChange={handleChange}
                        placeholder="Student ID"
                        className={classList}
                        required
                    />

                    <input
                        name="academicYear"
                        autoComplete="off"
                        value={form.academicYear}
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
                        {[...Array(10)].map((_, i) => (
                            <option key={i} value={`Class ${i + 1}`}>{`Class ${i + 1}`}</option>
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
                        {['A', 'B', 'C', 'D'].map((sec) => (
                            <option key={sec} value={sec}>{sec}</option>
                        ))}
                    </select>

                    <input
                        name="rollNo"
                        autoComplete="off"
                        value={form.rollNo}
                        onChange={handleChange}
                        placeholder="Roll Number"
                        className={classList}
                        required
                    />

                    <select
                        name="admissionType"
                        value={form.admissionType}
                        onChange={handleChange}
                        className={classList}
                        required
                    >
                        <option value="">Select Admission Type</option>
                        <option value="Regular">Regular</option>
                        <option value="Transfer">Transfer</option>
                        <option value="Other">Other</option>
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
                        <button type="button" onClick={handleReset} className={`${portalinfo.bgColor_2}text-white px-4 py-2 rounded`}>
                            Reset
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Admission;