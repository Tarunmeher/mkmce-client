import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { portalinfo } from '../../portalInfo.js'


const AddStudent = () => {
    const inputClass = "w-full border p-2 rounded focus:outline-none";

    const [form, setForm] = useState({
        first_name: '',
        last_name: '',
        class_id: '',
        standard: '',
        section: '',
        gender: '',
        caste: '',
        dob: '',
        roll_no: '',
        admission_no: '',
        email: '',
        current_address: '',
        fathers_name: '',
        contact_number: '',
        photo: null,
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setForm({
            ...form,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const handleReset = () => {
        setForm({
            first_name: '',
            last_name: '',
            class_id: '',
            standard: '',
            section: '',
            gender: '',
            caste: '',
            dob: '',
            roll_no: '',
            admission_no: '',
            email: '',
            current_address: '',
            fathers_name: '',
            contact_number: '',
            photo: null,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
        toast.success("Student details submitted successfully!", { autoClose: 1500 });
        handleReset();
    };

    return (
        <div className="p-4 mx-auto">
            <ToastContainer />
            <p className="text-sm text-gray-500 mb-4 cursor-pointer">
                <Link to="/">Home</Link> -{" "}
                <span className="text-blue-600">View Student Details</span>
            </p>
            <div className="p-6 bg-white shadow-md rounded-md max-w-7xl mx-auto">
                <h2 className="text-xl font-semibold mb-4">Student Information</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <input name="first_name" autoComplete='off' required placeholder="First Name" value={form.first_name} onChange={handleChange} className={inputClass} />
                    <input name="last_name" autoComplete='off' required placeholder="Last Name" value={form.last_name} onChange={handleChange} className={inputClass} />
                    <select name="class_id" required value={form.class_id} onChange={handleChange} className={inputClass}>
                        <option value="">Select Class</option>
                        <option value="1">Class 1</option>
                        <option value="2">Class 2</option>
                        <option value="3">Class 3</option>
                    </select>
                    <select name="section" required value={form.section} onChange={handleChange} className={inputClass}>
                        <option value="">Select Section</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="B">C</option>
                        <option value="B">D</option>
                    </select>
                    <select name="gender" required value={form.gender} onChange={handleChange} className={inputClass}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <input type="date" name="dob" required value={form.dob} onChange={handleChange} className={inputClass} />
                    <input name="roll_no" autoComplete='off' required placeholder="Roll No" value={form.roll_no} onChange={handleChange} className={inputClass} />
                    <input name="admission_no" autoComplete='off' required placeholder="Admission No" value={form.admission_no} onChange={handleChange} className={inputClass} />
                    <select name="standard" required value={form.standard} onChange={handleChange} className={inputClass}>
                        <option value="">Standard</option>
                        {['Nursery', 'LKG', 'UKG', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((cls) => (
                            <option key={cls} value={cls}>Class {cls}</option>
                        ))}
                    </select>
                    <select name="caste" required value={form.caste} onChange={handleChange} className={inputClass}>
                        <option value="">Select Caste</option>
                        <option value="GEN">GEN</option>
                        <option value="OBC">OBC</option>
                        <option value="SC/ST">SC/ST</option>
                    </select>
                    <input name="email" autoComplete='off' required placeholder="Email" value={form.email} onChange={handleChange} className={inputClass} />
                    <input name="fathers_name" autoComplete='off' required placeholder="Father's Name" value={form.fathers_name} onChange={handleChange} className={inputClass} />
                    <input name="contact_number" autoComplete='off' required placeholder="Contact Number" value={form.contact_number} onChange={handleChange} className={inputClass} />
                    <input name="current_address" autoComplete='off' required placeholder="Current Address" value={form.current_address} onChange={handleChange} className={inputClass} />
                    {/* <input
                        type="file"
                        name="photo"
                        onChange={handleChange}
                        accept="image/*"
                        className="col-span-2"
                    /> */}
                    <div className="col-span-4 flex gap-4 mt-4">
                        <button type="submit" className={`${portalinfo.bgColor} text-white px-4 py-2 rounded`}>Save</button>
                        <button type="button" onClick={handleReset} className={`${portalinfo.bgColor_2} text-white px-4 py-2 rounded`}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddStudent;
