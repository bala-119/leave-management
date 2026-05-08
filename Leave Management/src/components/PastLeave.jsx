import "./PastLeaves.css";
function PastLeaves({ pastLeaves }) {

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

            {pastLeaves.map((leave, index) => (
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