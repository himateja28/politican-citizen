import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import './Admin.css'; // The CSS you provided
import axios from "axios";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    fullname: "",
    email: "",
    dob: "",
    address: "",
    mobileno: "",
    role: "user",
  });

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  useEffect(() => {
    axios.get("https://politician-citizen-production.up.railway.app/admin/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  const totalUsers = users.length;

  const handleLogout = () => {
    // Clear localStorage on logout
    localStorage.removeItem('sessionExpiration');
    localStorage.removeItem('role');
    // Redirect to login page
    navigate('/login');
  };

  const handleEdit = (user) => {
    setEditingUser({ ...user });
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    axios
      .put(`https://politician-citizen-production.up.railway.app/admin/users/${editingUser.uid}`, editingUser)
      .then((res) => {
        const updatedUsers = users.map((user) =>
          user.uid === editingUser.uid ? res.data : user
        );
        setUsers(updatedUsers);
        setEditingUser(null);
      })
      .catch((error) => {
        console.error("Error updating user", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://politician-citizen-production.up.railway.app/admin/users/${id}`)
      .then(() => {
        const updatedUsers = users.filter((user) => user.uid !== id);
        setUsers(updatedUsers);
      })
      .catch((error) => {
        console.error("Error deleting user", error);
      });
  };

  const handleSubmitNewUser = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/user/signup", newUser)
      .then((res) => {
        setUsers([...users, res.data]);
        setNewUser({
          username: "",
          password: "",
          fullname: "",
          dob: "",
          address: "",
          mobileno: "",
          role: "user",
        });
      })
      .catch((error) => {
        console.error("Error adding user", error);
      });
  };

  return (
    <div className="dashboardContainer">
      <div className="header">
        <h1>Welcome, Admin</h1>
        <h3>Manage Users Below</h3>
        <h3>Total Users: {totalUsers}</h3>
        {/* Logout button */}
        <button className="logoutButton" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="formContainer">
        <h2>Add New User</h2>
        <form onSubmit={handleSubmitNewUser}>
          <input
            type="text"
            placeholder="Username"
            value={newUser.username}
            onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={newUser.password}
            onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Full Name"
            value={newUser.fullname}
            onChange={(e) => setNewUser({ ...newUser, fullname: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={newUser.email}
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            required
          />
          <input
            type="date"
            value={newUser.dob}
            onChange={(e) => setNewUser({ ...newUser, dob: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Address"
            value={newUser.address}
            onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Mobile No"
            value={newUser.mobileno}
            onChange={(e) => setNewUser({ ...newUser, mobileno: e.target.value })}
            required
          />
          <select
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
          >
            <option value="user">User</option>
            <option value="politician">Politician</option>
            <option value="moderator">Moderator</option>
          </select>
          <button type="submit" className="addBtn">Add User</button>
        </form>
      </div>

      <table className="userTable">
        <thead>
          <tr>
            <th>UID</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Email id</th>
            <th>DOB</th>
            <th>Address</th>
            <th>Mobile No</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              {editingUser && editingUser.uid === user.uid ? (
                <>
                  <td>{user.uid}</td>
                  <td>
                    <input
                      type="text"
                      value={editingUser.username}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, username: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editingUser.fullname}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, fullname: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="email"
                      value={editingUser.email}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, email: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={editingUser.dob}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, dob: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editingUser.address}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, address: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editingUser.mobileno}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, mobileno: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={editingUser.role}
                      onChange={(e) =>
                        setEditingUser({ ...editingUser, role: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <button className="submitBtn" onClick={handleSubmitEdit}>Submit</button>
                    <button className="cancelBtn" onClick={() => setEditingUser(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.uid}</td>
                  <td>{user.username}</td>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.dob}</td>
                  <td>{user.address}</td>
                  <td>{user.mobileno}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="editBtn" onClick={() => handleEdit(user)}>Edit</button>
                    <button className="deleteBtn" onClick={() => handleDelete(user.uid)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
