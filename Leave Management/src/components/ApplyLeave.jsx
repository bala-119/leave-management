import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplyLeave.css";

function ApplyLeave() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    leaveType: "",
    fromDate: "",
    toDate: "",
    reason: ""
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {

    e.preventDefault();

    // current logged user
    const currentUser = localStorage.getItem("currentUser") || "Balasubramaniyan";

    // old leaves
    const existingLeaves =
      JSON.parse(localStorage.getItem(currentUser)) || [];

    // new leave object
    const newLeave = {
      leaveType: formData.leaveType,
      from: formData.fromDate,
      to: formData.toDate,
      status: "Pending",
      approvedBy: "-"
    };

    // add new leave
    const updatedLeaves = [newLeave, ...existingLeaves];

    // store again
    localStorage.setItem(
      currentUser,
      JSON.stringify(updatedLeaves)
    );

    console.log(updatedLeaves);

    alert("Leave Applied Successfully");

    navigate("/");
  }

  return (
    <div className="apply-page">

      <div className="apply-container">

        <h2>Apply Leave</h2>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Leave Type</label>

            <select
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              required
            >
              <option value="">Select Leave</option>

              <option value="Casual Leave">
                Casual Leave
              </option>

              <option value="Sick Leave">
                Sick Leave
              </option>

              <option value="Paid Leave">
                Paid Leave
              </option>

            </select>
          </div>

          <div className="form-group">
            <label>From Date</label>

            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>To Date</label>

            <input
              type="date"
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Reason</label>

            <textarea
              name="reason"
              rows="4"
              placeholder="Enter reason..."
              value={formData.reason}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">
            Submit Leave
          </button>

        </form>

      </div>

    </div>
  );
}

export default ApplyLeave;