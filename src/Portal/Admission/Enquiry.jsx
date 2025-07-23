import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ViewEnquiryListModal from "./ViewEnquiryListModal";
import { Link } from "react-router-dom";
import { portalinfo } from '../../portalInfo.js'
import apiRequest from "../../../services/apiService";


const Enquiry = () => {
	const classList = "w-full border p-2 rounded focus:outline-none";

	const [form, setForm] = useState({
		student_name: "",
		father_name: "",
		standard: "",
		dob: "",
		address: "",
		pincode: "",
		mobile: "",
		email: "",
		adhaar_card: "",
	});

	const [showModal, setShowModal] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const fields = Object.values(form);
				if (fields.some((f) => !f)) {
					toast.error("Please fill in all required fields!");
					return;
				}

					const response = await apiRequest('POST', '/enquiry/registerNewEnquiry', form);
					if(response && response.success){
						toast.success("Form submitted successfully!");
					handleReset();
					}else{
						toast.success("Unable to save enquiry detail");
					}

		} catch (error) {
			toast.error("Something Went Wrong");
			console.log(error);
		}
	};

	const handleReset = () => {
		setForm({
			student_name: "",
			father_name: "",
			standard: "",
			dob: "",
			address: "",
			pincode: "",
			mobile: "",
			email: "",
			adhaar_card: "",
		});
	};

	const handleDelete = async (eid) => {
		try {
			const response = await apiRequest('DELETE', `/enquiry/deleteEnquiry/${eid}`);
			if(response && response.success){
				toast.success("Enquiry deleted");
			}else{
				toast.error("No Enquiry Available");
			}
		} catch (error) {
			console.log(error);
			// toast.error("Something Went Wrong");
		}
	};

	return (
		<div className="p-4 mx-auto">
			<ToastContainer autoClose={2000} />
			<p className="text-sm text-gray-500 mb-4 cursor-pointer">
				<Link to="/">Home </Link>-{" "}
				<span className="text-blue-600">Enquiry Form</span>
			</p>
			<form
				onSubmit={handleSubmit}
				className="bg-white p-6 shadow-md rounded space-y-4"
			>
				<div className="flex justify-between items-center mb-4 border-b pb-2">
					<h2 className="text-xl font-bold">Enquiry Form</h2>
					<button
						type="button"
						onClick={() => setShowModal(true)}
						className="bg-blue-600 text-white px-4 py-2 rounded"
					>
						View Enquiries List
					</button>
				</div>

				<div className="flex flex-col md:flex-row gap-4">
					<input
						name="student_name"
						autoComplete="off"
						value={form.student_name}
						onChange={handleChange}
						placeholder="Student Name"
						className={classList}
						required
					/>
					<input
						name="father_name"
						autoComplete="off"
						value={form.father_name}
						onChange={handleChange}
						placeholder="Father's Name"
						className={classList}
						required
					/>
				</div>

				<input
					name="standard"
					autoComplete="off"
					value={form.standard}
					onChange={handleChange}
					placeholder="Standard or Class"
					className={classList}
					required
				/>

				<div className="flex flex-col">
					<label htmlFor="dob" className="text-sm font-semibold text-gray-700">
						Date of Birth
					</label>
					<input
						type="date"
						name="dob"
						value={form.dob}
						onChange={handleChange}
						className={classList}
						required
					/>
				</div>

				<input
					name="mobile"
					autoComplete="off"
					value={form.mobile}
					onChange={handleChange}
					placeholder="Mobile Number"
					className={classList}
						maxLength={10}
					required
				/>
				<input
					type="email"
					name="email"
					autoComplete="off"
					value={form.email}
					onChange={handleChange}
					placeholder="Email"
					className={classList}
					required
				/>
				<input
					name="adhaar_card"
					autoComplete="off"
					value={form.adhaar_card}
					onChange={handleChange}
					placeholder="Aadhar Card Number"
					className={classList}
						maxLength={12}
					required
				/>
				<input
					name="address"
					autoComplete="off"
					value={form.address}
					onChange={handleChange}
					placeholder="Address"
					className={classList}
					required
				/>
				<input
					name="pincode"
					autoComplete="off"
					value={form.pincode}
					onChange={handleChange}
					placeholder="Pincode"
					className={classList}
					required
				/>

				<div className="flex flex-wrap gap-4 pt-4">
					<button
						type="submit"
						className="bg-green-600 text-white px-4 py-2 rounded"
					>
						Submit
					</button>
					<button
						type="button"
						onClick={handleReset}
						className="bg-gray-600 text-white px-4 py-2 rounded"
					>
						Reset
					</button>
				</div>
			</form>
				{ViewEnquiryListModal && (
				<ViewEnquiryListModal
					isOpen={showModal}
					onClose={() => setShowModal(false)}
					handleDelete={handleDelete}
				/>
			)}
		</div>
	);
};
    
export default Enquiry;