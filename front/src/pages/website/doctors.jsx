import { useState, useEffect } from "react";
import Navbar from "../../components/website/navbar";
import "./doctors.css";
import 'font-awesome/css/font-awesome.min.css';

export default function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const [filteredDoctors, setFilteredDoctors] = useState([]);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSpecialty, setSelectedSpecialty] = useState("");
    const [selectedArea, setSelectedArea] = useState("");
    const [showBookingModal, setShowBookingModal] = useState(false);
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedTime, setSelectedTime] = useState("");
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    // Sample data - Replace with API call
    useEffect(() => {
        const sampleDoctors = [
            {
                id: 1,
                name: "Dr. Mohamed Hassan",
                specialty: "Cardiology",
                area: "Cairo",
                image: "https://img.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg",
                rating: 4.8,
                reviewCount: 128,
                isAvailable: true,
                experience: "15 years",
                education: "MD, Cairo University",
                bio: "Dr. Ahmed Hassan is a renowned cardiologist with over 15 years of experience in treating various heart conditions. He specializes in interventional cardiology and has performed numerous successful procedures.",
                stats: {
                    patients: 2500,
                    reviews: 128,
                    experience: 15
                },
                reviews: [
                    {
                        name: "Mohamed Ali",
                        date: "2024-03-15",
                        rating: 5,
                        text: "Excellent doctor! Very professional and caring."
                    },
                    {
                        name: "Sarah Ahmed",
                        date: "2024-03-10",
                        rating: 4,
                        text: "Great experience. The doctor took time to explain everything."
                    }
                ]
            },
            {
                id: 2,
                name: "Dr. Layla Mahmoud",
                specialty: "Pediatrics",
                area: "Alexandria",
                image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",
                rating: 4.9,
                reviewCount: 95,
                isAvailable: true,
                experience: "12 years",
                education: "MD, Alexandria University",
                bio: "Dr. Layla Mahmoud is a dedicated pediatrician with a passion for children's health. She has extensive experience in treating various pediatric conditions and is known for her gentle approach with children.",
                stats: {
                    patients: 1800,
                    reviews: 95,
                    experience: 12
                },
                reviews: [
                    {
                        name: "Ahmed Hassan",
                        date: "2024-03-14",
                        rating: 5,
                        text: "My children love visiting Dr. Layla. She's amazing with kids!"
                    }
                ]
            },
            {
                id: 3,
                name: "Dr. Omar El-Sayed",
                specialty: "Dermatology",
                area: "Giza",
                image: "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg",
                rating: 4.7,
                reviewCount: 156,
                isAvailable: false,
                experience: "10 years",
                education: "MD, Ain Shams University",
                bio: "Dr. Omar specializes in cosmetic and medical dermatology. He has helped thousands of patients with various skin conditions and is known for his innovative treatment approaches.",
                stats: {
                    patients: 3200,
                    reviews: 156,
                    experience: 10
                },
                reviews: [
                    {
                        name: "Nour Hassan",
                        date: "2024-03-13",
                        rating: 5,
                        text: "Best dermatologist I've ever visited. Very knowledgeable and professional."
                    }
                ]
            },
            {
                id: 4,
                name: "Dr. Yasmine Mostafa",
                specialty: "Neurology",
                area: "Cairo",
                image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",

                rating: 4.9,
                reviewCount: 112,
                isAvailable: false,
                experience: "14 years",
                education: "MD, Cairo University",
                bio: "Dr. Yasmine is a leading neurologist specializing in complex neurological disorders. Her research work has contributed significantly to the field of neurology in Egypt.",
                stats: {
                    patients: 2100,
                    reviews: 112,
                    experience: 14
                },
                reviews: [
                    {
                        name: "Karim Ali",
                        date: "2024-03-12",
                        rating: 5,
                        text: "Dr. Yasmine's expertise in neurology is outstanding. She helped me understand my condition better."
                    }
                ]
            },
            {
                id: 5,
                name: "Dr. Tarek Ibrahim",
                specialty: "Orthopedics",
                area: "Alexandria",
                image: "https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-1532.jpg",
                rating: 4.8,
                reviewCount: 143,
                isAvailable: true,
                experience: "16 years",
                education: "MD, Alexandria University",
                bio: "Dr. Tarek is a skilled orthopedic surgeon specializing in sports injuries and joint replacements. He has successfully performed numerous complex surgeries.",
                stats: {
                    patients: 2800,
                    reviews: 143,
                    experience: 16
                },
                reviews: [
                    {
                        name: "Mohamed Samir",
                        date: "2024-03-11",
                        rating: 5,
                        text: "Excellent surgeon! My knee replacement surgery went perfectly."
                    }
                ]
            },
            {
                id: 6,
                name: "Dr. Nour El-Din",
                specialty: "Ophthalmology",
                area: "Cairo",
                image: "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg",

                rating: 4.9,
                reviewCount: 167,
                isAvailable: true,
                experience: "13 years",
                education: "MD, Cairo University",
                bio: "Dr. Nour is a renowned ophthalmologist specializing in advanced eye surgeries and treatments. She has helped restore vision for countless patients.",
                stats: {
                    patients: 3500,
                    reviews: 167,
                    experience: 13
                },
                reviews: [
                    {
                        name: "Fatima Ahmed",
                        date: "2024-03-10",
                        rating: 5,
                        text: "Dr. Nour's expertise in eye surgery is remarkable. My vision has improved significantly."
                    }
                ]
            }
        ];
        setDoctors(sampleDoctors);
        setFilteredDoctors(sampleDoctors);
    }, []);

    // Filter doctors based on search and filters
    useEffect(() => {
        let filtered = doctors;
        
        if (searchTerm) {
            filtered = filtered.filter(doctor => 
                doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        if (selectedSpecialty) {
            filtered = filtered.filter(doctor => 
                doctor.specialty === selectedSpecialty
            );
        }
        
        if (selectedArea) {
            filtered = filtered.filter(doctor => 
                doctor.area === selectedArea
            );
        }
        
        setFilteredDoctors(filtered);
    }, [searchTerm, selectedSpecialty, selectedArea, doctors]);

    // Get unique specialties and areas for filters
    const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];
    const areas = [...new Set(doctors.map(doctor => doctor.area))];

    // Render star rating
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <i 
                key={index} 
                className={`fa fa-star ${index < Math.floor(rating) ? 'text-warning' : 'text-muted'}`}
            />
        ));
    };

    // Sample time slots - Replace with actual available slots from API
    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
        "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
    ];

    const handleBookAppointment = () => {
        setShowBookingModal(true);
    };

    const showNotification = (message) => {
        setToastMessage(message);
        setShowToast(true);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const handleSubmitBooking = (e) => {
        e.preventDefault();
        // Here you would typically make an API call to save the appointment
        showNotification("Appointment booked successfully!");
        setShowBookingModal(false);
        setSelectedDoctor(null);
    };

    return (
        <>  <Navbar />
        <div className="doc-container">
          
            
            {/* Search and Filter Section */}
            <div className="doctors-header">
                <div className="search-filter-container">
                    <div className="search-box">
                        <i className="fa fa-search"></i>
                        <input 
                            type="text" 
                            placeholder="Search doctors by name..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select 
                        className="filter-select"
                        value={selectedSpecialty}
                        onChange={(e) => setSelectedSpecialty(e.target.value)}
                    >
                        <option value="">All Specialties</option>
                        {specialties.map(specialty => (
                            <option key={specialty} value={specialty}>{specialty}</option>
                        ))}
                    </select>
                    <select 
                        className="filter-select"
                        value={selectedArea}
                        onChange={(e) => setSelectedArea(e.target.value)}
                    >
                        <option value="">All Areas</option>
                        {areas.map(area => (
                            <option key={area} value={area}>{area}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Doctors Grid */}
            <div className="doctors-grid">
                {filteredDoctors.map(doctor => (
                    <div 
                        key={doctor.id} 
                        className="doctor-card"
                        onClick={() => setSelectedDoctor(doctor)}
                    >
                        <img 
                            src={doctor.image} 
                            alt={doctor.name} 
                            className="doctor-image"
                        />
                        <div className="doctor-info">
                            <h3 className="doctor-name">{doctor.name}</h3>
                            <p className="doctor-specialty">{doctor.specialty}</p>
                            <div className="doctor-location">
                                <i className="fa fa-map-marker"></i>
                                <span>{doctor.area}</span>
                            </div>
                            <div className="doctor-rating">
                                <div className="rating-stars">
                                    {renderStars(doctor.rating)}
                                </div>
                                <span className="rating-count">
                                    ({doctor.reviewCount} reviews)
                                </span>
                            </div>
                            <div className={`doctor-availability ${doctor.isAvailable ? 'available' : 'unavailable'}`}>
                                <i className="fa fa-circle"></i>
                                <span>{doctor.isAvailable ? 'Available Today' : 'Not Available'}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Doctor Details Modal */}
            {selectedDoctor && (
                <div 
                    className={`doctor-modal ${selectedDoctor ? 'active' : ''}`}
                    onClick={() => setSelectedDoctor(null)}
                >
                    <div 
                        className="modal-content"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="modal-header">
                            <h2>Doctor Details</h2>
                            <button 
                                className="modal-close"
                                onClick={() => setSelectedDoctor(null)}
                            >
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="doctor-details">
                                <div className="doctor-profile">
                                    <img 
                                        src={selectedDoctor.image} 
                                        alt={selectedDoctor.name}
                                        className="profile-image"
                                    />
                                    <h3>{selectedDoctor.name}</h3>
                                    <p>{selectedDoctor.specialty}</p>
                                    <div className="doctor-stats">
                                        <div className="stat-item">
                                            <div className="stat-value">{selectedDoctor.stats.patients}+</div>
                                            <div className="stat-label">Patients</div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="stat-value">{selectedDoctor.stats.reviews}</div>
                                            <div className="stat-label">Reviews</div>
                                        </div>
                                        <div className="stat-item">
                                            <div className="stat-value">{selectedDoctor.stats.experience}</div>
                                            <div className="stat-label">Years Exp.</div>
                                        </div>
                                    </div>
                                    <button 
                                        className="book-appointment-btn"
                                        onClick={handleBookAppointment}
                                    >
                                        Book Appointment
                                    </button>
                                </div>
                                <div className="doctor-content">
                                    <div className="doctor-bio">
                                        <h4 className="section-title">About</h4>
                                        <p>{selectedDoctor.bio}</p>
                                    </div>
                                    <div className="reviews-section">
                                        <h4 className="section-title">Reviews</h4>
                                        {selectedDoctor.reviews.map((review, index) => (
                                            <div key={index} className="review-card">
                                                <div className="review-header">
                                                    <span className="reviewer-name">{review.name}</span>
                                                    <span className="review-date">{review.date}</span>
                                                </div>
                                                <div className="review-rating">
                                                    {renderStars(review.rating)}
                                                </div>
                                                <p className="review-text">{review.text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Booking Modal */}
            {showBookingModal && (
                <div className="booking-modal">
                    <div className="booking-content">
                        <div className="booking-header">
                            <h2>Book Appointment with {selectedDoctor?.name}</h2>
                            <button 
                                className="modal-close"
                                onClick={() => setShowBookingModal(false)}
                            >
                                <i className="fa fa-times"></i>
                            </button>
                        </div>
                        <form onSubmit={handleSubmitBooking} className="booking-form">
                            <div className="form-group">
                                <label>Select Date</label>
                                <input 
                                    type="date" 
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    required
                                    min={new Date().toISOString().split('T')[0]}
                                />
                            </div>
                            <div className="form-group">
                                <label>Select Time</label>
                                <select 
                                    value={selectedTime}
                                    onChange={(e) => setSelectedTime(e.target.value)}
                                    required
                                >
                                    <option value="">Select a time slot</option>
                                    {timeSlots.map((time, index) => (
                                        <option key={index} value={time}>{time}</option>
                                    ))}
                                </select>
                            </div>
                            <button type="submit" className="submit-booking-btn">
                                Confirm Booking
                            </button>
                        </form>
                    </div>
                </div>
            )}

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