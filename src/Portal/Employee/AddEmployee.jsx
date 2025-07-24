import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { portalinfo } from '../../portalInfo.js'


const AddTeacher = () => {
    const inputClass = 'w-full border p-2 rounded focus:outline-none';

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        typeOfEmployee: "",
        gender: "",
        dob: "",
        socialCategory: "",
        academicQualification: "",
        degree: "",
        professionalQualification: "",
        mobile: "",
        aadhar: "",
        email: "",
        nameAsPerAadhar: "",
        mathematicsLevel: "",
        scienceLevel: "",
        englishLevel: "",
        socialScienceLevel: "",
        languageLevel: "",
        disabilityType: "",
        appointmentNature: "",
        dateOfJoiningService: "",
        dateOfJoiningSchool: "",
    });

    const levelOptions = ["Up to 10th", "Up to 12th", "Graduate", "Post-Graduate"];
    const disabilityOptions = ["None", "Blindness", "Hearing Impairment", "Locomotor Disability", "Other"];
    const appointmentOptions = ["Regular", "Contractual", "Temporary"];

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "photo") {
            setFormData({ ...formData, [name]: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Teacher information saved successfully!");
        handleReset();
    };

    const handleReset = () => {
        setFormData({
            firstName: "",
            lastName: "",
            typeOfEmployee: "",
            gender: "",
            dob: "",
            socialCategory: "",
            academicQualification: "",
            degree: "",
            professionalQualification: "",
            mobile: "",
            aadhar: "",
            email: "",
            nameAsPerAadhar: "",
            mathematicsLevel: "",
            scienceLevel: "",
            englishLevel: "",
            socialScienceLevel: "",
            languageLevel: "",
            disabilityType: "",
            appointmentNature: "",
            dateOfJoiningService: "",
            dateOfJoiningSchool: "",
        });
        toast.info("Form cleared");
    };

    return (
        <div className="p-4 mx-auto">
            <ToastContainer autoClose={1000} />
            <p className="text-sm text-gray-500 mb-4 cursor-pointer">
                <Link to="/">Home </Link>- <span className="text-blue-600">Add New Teacher</span>
            </p>
            <div className="bg-white p-6 shadow rounded-md">
                <h2 className="text-xl font-semibold mb-4">Employee Information</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input name="firstName" autoComplete="off" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className={inputClass} />
                        <input name="lastName" autoComplete="off" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className={inputClass} />
                        <select name="typeOfEmployee" value={formData.typeOfEmployee} onChange={handleChange} required className={inputClass}>
                            <option value="">Employee Type</option>
                            <option value="Teaching">Teaching</option>
                            <option value="Non-Teaching">Non-Teaching</option>
                        </select>
                        <select name="gender" value={formData.gender} onChange={handleChange} required className={inputClass}>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                        <select name="socialCategory" value={formData.socialCategory} onChange={handleChange} required className={inputClass}>
                            <option value="">Social Category</option>
                            <option value="General">General</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                            <option value="OBC">OBC</option>
                            <option value="EWS">EWS</option>
                        </select>
                        <select name="academicQualification" value={formData.academicQualification} onChange={handleChange} required className={inputClass}>
                            <option value="">Highest Academic Qualification</option>
                            <option value="10th">10th</option>
                            <option value="12th">12th</option>
                            <option value="Graduate">Graduate</option>
                            <option value="Post-Graduate">Post-Graduate</option>
                        </select>
                        <select name="degree" value={formData.degree} onChange={handleChange} required className={inputClass}>
                            <option value="">Degree</option>
                            <option value="BA">BA</option>
                            <option value="BSc">BSc</option>
                            <option value="BCom">BCom</option>
                            <option value="MA">MA</option>
                            <option value="MSc">MSc</option>
                            <option value="MCom">MCom</option>
                        </select>
                        <select name="professionalQualification" value={formData.professionalQualification} onChange={handleChange} required className={inputClass}>
                            <option value="">Highest Professional Qualification</option>
                            <option value="B.Ed">B.Ed</option>
                            <option value="M.Ed">M.Ed</option>
                            <option value="D.El.Ed">D.El.Ed</option>
                            <option value="Others">Others</option>
                        </select>
                        <input name="mobile" autoComplete="off" value={formData.mobile} onChange={handleChange} placeholder="Mobile Number" required className={inputClass} />
                        <input name="aadhar" autoComplete="off" value={formData.aadhar} onChange={handleChange} placeholder="Aadhar Number" required className={inputClass} />
                        <input type="email" autoComplete="off" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className={inputClass} />
                        <input name="nameAsPerAadhar" autoComplete="off" value={formData.nameAsPerAadhar} onChange={handleChange} placeholder="Name As Per Aadhar" required className={inputClass} />
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Date of Birth</label>
                            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required className={inputClass} />
                        </div>
                    </div>

                    <h3 className="font-semibold text-lg mt-6 mb-2">Mention the level up to which following subjects are studied</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <select name="mathematicsLevel" value={formData.mathematicsLevel} onChange={handleChange} className={inputClass}>
                            <option value="">Mathematics</option>
                            {levelOptions.map(level => <option key={level} value={level}>{level}</option>)}
                        </select>
                        <select name="scienceLevel" value={formData.scienceLevel} onChange={handleChange} className={inputClass}>
                            <option value="">Science</option>
                            {levelOptions.map(level => <option key={level} value={level}>{level}</option>)}
                        </select>
                        <select name="englishLevel" value={formData.englishLevel} onChange={handleChange} className={inputClass}>
                            <option value="">English</option>
                            {levelOptions.map(level => <option key={level} value={level}>{level}</option>)}
                        </select>
                        <select name="socialScienceLevel" value={formData.socialScienceLevel} onChange={handleChange} className={inputClass}>
                            <option value="">Social Science</option>
                            {levelOptions.map(level => <option key={level} value={level}>{level}</option>)}
                        </select>
                        <select name="languageLevel" value={formData.languageLevel} onChange={handleChange} className={inputClass}>
                            <option value="">Language (Schedule VIII)</option>
                            {levelOptions.map(level => <option key={level} value={level}>{level}</option>)}
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                        <select name="disabilityType" value={formData.disabilityType} onChange={handleChange} className={inputClass}>
                            <option value="">Type of Disability</option>
                            {disabilityOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        <select name="appointmentNature" value={formData.appointmentNature} onChange={handleChange} className={inputClass}>
                            <option value="">Nature of Appointment</option>
                            {appointmentOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Date of Joining Service</label>
                            <input type="date" name="dateOfJoiningService" value={formData.dateOfJoiningService} onChange={handleChange} className={inputClass} />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-600 mb-1">Date of Joining Present School</label>
                            <input type="date" name="dateOfJoiningSchool" value={formData.dateOfJoiningSchool} onChange={handleChange} className={inputClass} />
                        </div>
                    </div>

                    <div className="mt-6 flex gap-4">
                        <button type="submit" className={`${portalinfo.bgColor} text-white px-6 py-2 rounded hover:bg-yellow-500`}>Save</button>
                        <button type="button" onClick={handleReset} className={`${portalinfo.bgColor_2}text-white px-6 py-2 rounded hover:bg-blue-800`}>Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTeacher;
