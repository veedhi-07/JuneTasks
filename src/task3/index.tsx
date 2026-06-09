import { useState } from "react";

export default function UsersTable() {
  return (
    <>
      <div style={{ padding: "20px" }}>
        <h2>Users Table</h2>

        <table className="border mt-10" cellPadding="10">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody></tbody>
        </table>
      </div>
    </>
  );
}
