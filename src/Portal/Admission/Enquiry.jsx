import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Enquiry = () => {
  const [form, setForm] = useState({
    studentName: '',
    motherName: '',
    fatherName: '',
    permanentAddress: '',
    localAddress: '',
    dob: '',
    dobWords: '',
    admissionAge: '',
    gender: '',
    caste: '',
    nationality: '',
    motherTongue: '',
    occupationFather: '',
    annualIncome: '',
    guardianName: '',
    guardianRelation: '',
    admissionClass: '',
    identificationMark: '',
    aadharStudent: '',
    aadharFather: '',
    aadharMother: '',
    school1: '',
    class1: '',
    syllabus1: '',
    grade1: '',
    school2: '',
    class2: '',
    syllabus2: '',
    grade2: '',
    bloodGroup: '',
    healthRecord: '',
    declarationBy: '',
    place: '',
    date: '',
    mobile: '',
    guardianSignature: '',
    studentPhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Example validation
    if (!form.studentName || !form.fatherName || !form.mobile) {
      toast.error('Please fill in all required fields!');
      return;
    }

    console.log('Form Data:', form);
    toast.success('Form submitted successfully!');
  };

  const handleReset = () => {
    setForm({});
    toast.info('Form cleared');
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <ToastContainer />
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded space-y-6">
        <h2 className="text-2xl font-semibold border-b pb-2">Enquiry Form</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="studentName" value={form.studentName || ''} onChange={handleChange} placeholder="Name of the Student" className="border p-2 rounded" required />
          <input name="motherName" value={form.motherName || ''} onChange={handleChange} placeholder="Full Name of the Mother" className="border p-2 rounded" required />
          <input name="fatherName" value={form.fatherName || ''} onChange={handleChange} placeholder="Full Name of the Father" className="border p-2 rounded" required />

          <input name="permanentAddress" value={form.permanentAddress || ''} onChange={handleChange} placeholder="Permanent Home Address" className="border p-2 rounded" required />
          <input name="localAddress" value={form.localAddress || ''} onChange={handleChange} placeholder="Local Address" className="border p-2 rounded" required />

          <input type="date" name="dob" value={form.dob || ''} onChange={handleChange} className="border p-2 rounded" required />
          <input name="dobWords" value={form.dobWords || ''} onChange={handleChange} placeholder="DOB in Words" className="border p-2 rounded" required />
          <input type="date" name="admissionAge" value={form.admissionAge || ''} onChange={handleChange} className="border p-2 rounded" required />

          <select name="gender" value={form.gender || ''} onChange={handleChange} className="border p-2 rounded" required>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select name="caste" value={form.caste || ''} onChange={handleChange} className="border p-2 rounded" required>
            <option value="">Caste</option>
            <option value="GEN">GEN</option>
            <option value="OBC">OBC</option>
            <option value="ST/SC">ST/SC</option>
          </select>

          <input name="nationality" value={form.nationality || ''} onChange={handleChange} placeholder="Nationality" className="border p-2 rounded" required />
          <input name="motherTongue" value={form.motherTongue || ''} onChange={handleChange} placeholder="Mother Tongue" className="border p-2 rounded" required />
          <input name="occupationFather" value={form.occupationFather || ''} onChange={handleChange} placeholder="Father's Occupation" className="border p-2 rounded" required />

          <input name="annualIncome" value={form.annualIncome || ''} onChange={handleChange} placeholder="Annual Income" className="border p-2 rounded" required />
          <input name="guardianName" value={form.guardianName || ''} onChange={handleChange} placeholder="Guardian Name" className="border p-2 rounded" required />
          <input name="guardianRelation" value={form.guardianRelation || ''} onChange={handleChange} placeholder="Relation to Guardian" className="border p-2 rounded" required />

          <input name="admissionClass" value={form.admissionClass || ''} onChange={handleChange} placeholder="Class Admission Sought" className="border p-2 rounded" required />
          <input name="identificationMark" value={form.identificationMark || ''} onChange={handleChange} placeholder="Identification Mark" className="border p-2 rounded" />
          <input name="mobile" value={form.mobile || ''} onChange={handleChange} placeholder="Mobile Number" className="border p-2 rounded" required />

          <input name="aadharStudent" value={form.aadharStudent || ''} onChange={handleChange} placeholder="Student Aadhar No" className="border p-2 rounded" />
          <input name="aadharFather" value={form.aadharFather || ''} onChange={handleChange} placeholder="Father Aadhar No" className="border p-2 rounded" />
          <input name="aadharMother" value={form.aadharMother || ''} onChange={handleChange} placeholder="Mother Aadhar No" className="border p-2 rounded" />

          <input name="school1" value={form.school1 || ''} onChange={handleChange} placeholder="School (1st Yr)" className="border p-2 rounded" />
          <input name="class1" value={form.class1 || ''} onChange={handleChange} placeholder="Class" className="border p-2 rounded" />
          <input name="syllabus1" value={form.syllabus1 || ''} onChange={handleChange} placeholder="Syllabus" className="border p-2 rounded" />
          <input name="grade1" value={form.grade1 || ''} onChange={handleChange} placeholder="Grade/Percentage" className="border p-2 rounded" />

          <input name="school2" value={form.school2 || ''} onChange={handleChange} placeholder="School (2nd Yr)" className="border p-2 rounded" />
          <input name="class2" value={form.class2 || ''} onChange={handleChange} placeholder="Class" className="border p-2 rounded" />
          <input name="syllabus2" value={form.syllabus2 || ''} onChange={handleChange} placeholder="Syllabus" className="border p-2 rounded" />
          <input name="grade2" value={form.grade2 || ''} onChange={handleChange} placeholder="Grade/Percentage" className="border p-2 rounded" />

          <input name="bloodGroup" value={form.bloodGroup || ''} onChange={handleChange} placeholder="Blood Group" className="border p-2 rounded" />
          <input name="healthRecord" value={form.healthRecord || ''} onChange={handleChange} placeholder="Health Record" className="border p-2 rounded" />

          <input name="declarationBy" value={form.declarationBy || ''} onChange={handleChange} placeholder="Declaration By" className="border p-2 rounded" required />
          <input name="place" value={form.place || ''} onChange={handleChange} placeholder="Place" className="border p-2 rounded" required />
          <input name="date" value={form.date || ''} onChange={handleChange} type="date" className="border p-2 rounded" required />
          <input name="guardianSignature" value={form.guardianSignature || ''} onChange={handleChange} placeholder="Guardian Signature" className="border p-2 rounded" required />

          <div>
            <label className="block text-sm font-medium mb-1">Upload Photo</label>
            <input type="file" name="studentPhoto" onChange={handleChange} accept="image/*" className="border p-2 rounded w-full" />
          </div>
        </div>

        <div className="flex space-x-4 pt-4">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Submit</button>
          <button type="button" onClick={handleReset} className="bg-gray-600 text-white px-4 py-2 rounded">Reset</button>
        </div>
      </form>
    </div>
  );
};

export default Enquiry;
