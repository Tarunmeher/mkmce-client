import React, { useState } from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const FeeStructure = () => {
  const [feeData, setFeeData] = useState([
    {
      fid: 4,
      academic_year: "2025-2026",
      standard: "Nursery",
      admission_fee: "2500.00",
      tuition_fee: "12000.00",
      transport_fee: "3000.00",
      other_fee: "500.00",
      created_at: "2025-08-24T10:28:15.000Z",
      updated_at: "2025-08-24T10:28:15.000Z",
    },
  ]);

  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    academic_year: "",
    standard: "",
    admission_fee: "",
    tuition_fee: "",
    transport_fee: "",
    other_fee: "",
  });

  // Handle Form Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Submit (Add / Update)
  const handleSubmit = () => {
    const { academic_year, standard, admission_fee, tuition_fee, transport_fee, other_fee } = formData;
    if (!academic_year || !standard || !admission_fee || !tuition_fee) {
      return alert("⚠️ Please fill all required fields");
    }

    if (editId) {
      setFeeData((prev) =>
        prev.map((item) =>
          item.fid === editId ? { ...formData, fid: editId } : item
        )
      );
      setEditId(null);
    } else {
      setFeeData([
        ...feeData,
        { ...formData, fid: Date.now(), created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
      ]);
    }

    setFormData({
      academic_year: "",
      standard: "",
      admission_fee: "",
      tuition_fee: "",
      transport_fee: "",
      other_fee: "",
    });
  };

  // Handle Edit
  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item.fid);
  };

  // Handle Delete
  const handleDelete = (id) => {
    setFeeData(feeData.filter((item) => item.fid !== id));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Breadcrumb */}
      <p className="text-sm mb-2 text-gray-700">
      <Link to='/'>Home -</Link> <span className="text-blue-500">Manage Fee Structure</span>
      </p>

      <div className="bg-white rounded-lg shadow-md p-4">
        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-6">
          <input
            type="text"
            name="academic_year"
            placeholder="Academic Year"
            value={formData.academic_year}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md"
          />
          <input
            type="text"
            name="standard"
            placeholder="Standard"
            value={formData.standard}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md"
          />
          <input
            type="number"
            name="admission_fee"
            placeholder="Admission Fee"
            value={formData.admission_fee}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md"
          />
          <input
            type="number"
            name="tuition_fee"
            placeholder="Tuition Fee"
            value={formData.tuition_fee}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md"
          />
          <input
            type="number"
            name="transport_fee"
            placeholder="Transport Fee"
            value={formData.transport_fee}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md"
          />
          <input
            type="number"
            name="other_fee"
            placeholder="Other Fee"
            value={formData.other_fee}
            onChange={handleChange}
            className="border px-3 py-2 rounded-md"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          {editId ? "Update" : "Submit"}
        </button>

        {/* Table */}
        <div className="overflow-x-auto mt-6">
          <table className="w-full text-sm border border-gray-200">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="border px-3 py-2">Sl. No</th>
                <th className="border px-3 py-2">Academic Year</th>
                <th className="border px-3 py-2">Standard</th>
                <th className="border px-3 py-2">Admission Fee</th>
                <th className="border px-3 py-2">Tuition Fee</th>
                <th className="border px-3 py-2">Transport Fee</th>
                <th className="border px-3 py-2">Other Fee</th>
                <th className="border px-3 py-2">Total</th>
                <th className="border px-3 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {feeData.map((item, index) => (
                <tr key={item.fid} className="hover:bg-gray-50">
                  <td className="border px-3 py-2">{index + 1}</td>
                  <td className="border px-3 py-2">{item.academic_year}</td>
                  <td className="border px-3 py-2">{item.standard}</td>
                  <td className="border px-3 py-2">₹{item.admission_fee}</td>
                  <td className="border px-3 py-2">₹{item.tuition_fee}</td>
                  <td className="border px-3 py-2">₹{item.transport_fee}</td>
                  <td className="border px-3 py-2">₹{item.other_fee}</td>
                  <td className="border px-3 py-2 font-semibold">
                    ₹
                    {Number(item.admission_fee) +
                      Number(item.tuition_fee) +
                      Number(item.transport_fee) +
                      Number(item.other_fee)}
                  </td>
                  <td className="border px-3 py-2 flex gap-2">
                    <Pencil
                      className="w-4 h-4 text-green-600 cursor-pointer"
                      onClick={() => handleEdit(item)}
                    />
                    <Trash2
                      className="w-4 h-4 text-red-600 cursor-pointer"
                      onClick={() => handleDelete(item.fid)}
                    />
                  </td>
                </tr>
              ))}
              {feeData.length === 0 && (
                <tr>
                  <td colSpan={9} className="text-center py-3 text-gray-500">
                    No records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
