// src/components/PastLeaves.jsx

import "./PastLeaves.css";

function PastLeaves() {

  const leaves = [
    {
      id: 1,
      type: "Casual Leave",
      from: "2026-05-01",
      to: "2026-05-03",
      status: "Approved",
      approvedBy: "HR Manager"
    },
    {
      id: 2,
      type: "Sick Leave",
      from: "2026-04-15",
      to: "2026-04-16",
      status: "Approved",
      approvedBy: "Team Lead"
    },
    {
      id: 3,
      type: "Casual Leave",
      from: "2026-03-10",
      to: "2026-03-12",
      status: "Pending",
      approvedBy: "-"
    },
    {
      id: 4,
      type: "Sick Leave",
      from: "2026-02-05",
      to: "2026-02-06",
      status: "Rejected",
      approvedBy: "Manager"
    },
    {
      id: 5,
      type: "Casual Leave",
      from: "2026-01-20",
      to: "2026-01-22",
      status: "Approved",
      approvedBy: "HR"
    },
    {
      id: 6,
      type: "Sick Leave",
      from: "2026-02-05",
      to: "2026-02-06",
      status: "Rejected",
      approvedBy: "Manager"
    },
    {
      id: 7,
      type: "Casual Leave",
      from: "2026-01-20",
      to: "2026-01-22",
      status: "Approved",
      approvedBy: "HR"
    },
    ,
    {
      id: 8,
      type: "Casual Leave",
      from: "2026-01-20",
      to: "2026-01-22",
      status: "Approved",
      approvedBy: "HR"
    },
    {
      id: 9,
      type: "Sick Leave",
      from: "2026-02-05",
      to: "2026-02-06",
      status: "Rejected",
      approvedBy: "Manager"
    },
    {
      id: 10,
      type: "Casual Leave",
      from: "2026-01-20",
      to: "2026-01-22",
      status: "Approved",
      approvedBy: "HR"
    }
  ];

  return (
    <div className="leaves-container">

      <h2>Past Leaves</h2>

      {/* Scrollable Table */}
      <div className="table-wrapper">

        <table className="leave-table">

          <thead>
            <tr>
              <th>Leave Type</th>
              <th>From</th>
              <th>To</th>
              <th>Status</th>
              <th>Approved By</th>
            </tr>
          </thead>

          <tbody>
            {leaves.map((leave) => (
              <tr key={leave.id}>

                <td>{leave.type}</td>

                <td>{leave.from}</td>

                <td>{leave.to}</td>

                <td>
                  <span className={`status ${leave.status.toLowerCase()}`}>
                    {leave.status}
                  </span>
                </td>

                <td>{leave.approvedBy}</td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PastLeaves;