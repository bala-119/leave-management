import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplyLeave.css";

function ApplyLeave({ onApplyLeave }) {

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

    const success = onApplyLeave(formData);

    if (success) {
      alert("Leave Applied Successfully");
      // navigate back to dashboard
      navigate("/");
    }
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