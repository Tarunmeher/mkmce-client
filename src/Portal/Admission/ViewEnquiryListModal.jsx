import React from 'react';

const ViewEnquiryListModal = ({ isOpen, onClose, enquiries, handleDelete }) => {
  const classList = "border px-2 py-1";
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 md:w-3/4 lg:w-2/3 p-6 rounded shadow-lg overflow-y-auto max-h-[80vh]">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold">Enquiry List</h2>
          <button onClick={onClose} className="text-red-600 font-bold text-lg">✕</button>
        </div>

        {enquiries.length === 0 ? (
          <p className="text-gray-500">No enquiries available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className={classList}>Student Name</th>
                  <th className={classList}>Father's Name</th>
                  <th className={classList}>Class</th>
                  <th className={classList}>DOB</th>
                  <th className={classList}>Mobile</th>
                  <th className={classList}>Email</th>
                  <th className={classList}>Aadhar Card</th>
                  <th className={classList}>Address</th>
                  <th className={classList}>Pincode</th>
                  <th className={classList}>Action</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((entry, e) => (
                  <tr key={e} className="text-center">
                    <td className={classList}>{entry.studentName}</td>
                    <td className={classList}>{entry.fatherName}</td>
                    <td className={classList}>{entry.admissionClass}</td>
                    <td className={classList}>{entry.dob}</td>
                    <td className={classList}>{entry.mobile}</td>
                    <td className={classList}>{entry.email}</td>
                    <td className={classList}>{entry.aadharCard}</td>
                    <td className={classList}>{entry.address}</td>
                    <td className={classList}>{entry.pincode}</td>
                    <td className={classList}>
                      <button
                        onClick={() => handleDelete(e)}
                        className="text-white bg-red-600 px-2 py-1 rounded text-xs"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewEnquiryListModal;
