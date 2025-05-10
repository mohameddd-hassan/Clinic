import { useState } from "react";
import Navbar from "../../components/website/navbar";
import "./account.css";
import 'font-awesome/css/font-awesome.min.css';

export default function Account() {
    const [isEditing, setIsEditing] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [userData, setUserData] = useState({
        name: "Ahmed Mohamed",
        email: "ahmed.mohamed@example.com",
        phone: "01234567890",
        dateOfBirth: "1990-01-01",
        gender: "Male",
        address: "123 Main St, Cairo, Egypt"
    });

    const [appointments, setAppointments] = useState([
        {
            id: 1,
            doctorName: "Dr. Mohamed Hassan",
            specialty: "Cardiology",
            date: "2024-03-25",
            time: "10:00 AM",
            status: "Upcoming"
        },
        {
            id: 2,
            doctorName: "Dr. Layla Mahmoud",
            specialty: "Pediatrics",
            date: "2024-03-20",
            time: "02:30 PM",
            status: "Completed"
        },
        {
            id: 3,
            doctorName: "Dr. Omar El-Sayed",
            specialty: "Dermatology",
            date: "2024-03-15",
            time: "11:00 AM",
            status: "Completed"
        }
    ]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const showNotification = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically make an API call to update the user data
        setIsEditing(false);
        showNotification("Profile updated successfully!");
    };

    const getStatusColor = (status) => {
        switch(status) {
            case 'Upcoming':
                return '#28a745';
            case 'Completed':
                return '#6c757d';
            case 'Cancelled':
                return '#dc3545';
            default:
                return '#6c757d';
        }
    };

    return (
        <>
            <Navbar />
            <div className="account-container">
                <div className="account-content">
                    {/* Profile Section */}
                    <div className="profile-section">
                        <div className="section-header">
                            <h2>My Profile</h2>
                            <button 
                                className="edit-btn"
                                onClick={() => setIsEditing(!isEditing)}
                            >
                                {isEditing ? 'Cancel' : 'Edit Profile'}
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="profile-form">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={userData.name}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={userData.phone}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Date of Birth</label>
                                    <input
                                        type="date"
                                        name="dateOfBirth"
                                        value={userData.dateOfBirth}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Gender</label>
                                    <select
                                        name="gender"
                                        value={userData.gender}
                                        onChange={handleInputChange}
                                        disabled={!isEditing}
                                    >
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={userData.address}
                                    onChange={handleInputChange}
                                    disabled={!isEditing}
                                />
                            </div>

                            {isEditing && (
                                <button type="submit" className="save-btn">
                                    Save Changes
                                </button>
                            )}
                        </form>
                    </div>

                    {/* Appointments Section */}
                    <div className="appointments-section">
                        <div className="section-header">
                            <h2>My Appointments</h2>
                        </div>

                        <div className="appointments-list">
                            {appointments.map(appointment => (
                                <div key={appointment.id} className="appointment-card">
                                    <div className="appointment-info">
                                        <h3>{appointment.doctorName}</h3>
                                        <p className="specialty">{appointment.specialty}</p>
                                        <div className="appointment-details">
                                            <div className="detail-item">
                                                <i className="fa fa-calendar"></i>
                                                <span>{appointment.date}</span>
                                            </div>
                                            <div className="detail-item">
                                                <i className="fa fa-clock-o"></i>
                                                <span>{appointment.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div 
                                        className="appointment-status"
                                        style={{ color: getStatusColor(appointment.status) }}
                                    >
                                        {appointment.status}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Toast Notification */}
                {showToast && (
                    <div className="toast-notification">
                        <i className="fa fa-check-circle"></i>
                        <span>{toastMessage}</span>
                    </div>
                )}
            </div>
        </>
    );
}
