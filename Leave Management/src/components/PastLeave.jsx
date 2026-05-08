import "./PastLeaves.css";
import users from "../data/users.json";

function PastLeaves({ currentUser }) {

  const leaves = users[currentUser]?.pastLeaves || [];

  return (
    <div className="leaves-container">

      <h2>Past Leaves</h2>

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

            {leaves.map((leave, index) => (
              <tr key={index}>

                <td>{leave.leaveType}</td>

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