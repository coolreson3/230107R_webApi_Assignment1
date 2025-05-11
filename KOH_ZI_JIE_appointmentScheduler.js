/**
 * appointmentScheduler.js
 * A simple healthcare appointment scheduling module.
 * This module simulates booking, viewing, and canceling doctor appointments.
 * Dummy data is stored in arrays to simulate database-like behavior.
 */

// Dummy data
const appointments = [];
const doctors = [
    { id: 1, name: "Dr. John Smith", specialty: "Cardiologist" },
    { id: 2, name: "Dr. Sarah Lee", specialty: "Dermatologist" },
    { id: 3, name: "Dr. Emma Brown", specialty: "Dentist" }
];

// 1. Book an appointment with a doctor
function bookAppointment(patientName, doctorId, date, time) {
    const doctor = doctors.find(d => d.id === doctorId);
    if (!doctor) return `Doctor with ID ${doctorId} not found.`;

    const newAppointment = {
        id: appointments.length + 1,
        patientName,
        doctorId,
        doctorName: doctor.name,
        date,
        time
    };
    appointments.push(newAppointment);
    return `Appointment booked for ${patientName} with ${doctor.name} on ${date} at ${time}.`;
}

// 2. View all appointments for a specific patient
function getAppointmentsByPatient(patientName) {
    return appointments.filter(a => a.patientName === patientName);
}

// 3. Cancel an appointment by ID
function cancelAppointment(appointmentId) {
    const index = appointments.findIndex(a => a.id === appointmentId);
    if (index === -1) return `Appointment ID ${appointmentId} not found.`;
    const removed = appointments.splice(index, 1)[0];
    return `Cancelled appointment with ${removed.doctorName} for ${removed.patientName}.`;
}

// 4. View available doctors
function listDoctors() {
    return doctors;
}

// 5. Get all appointments for a specific doctor
function getDoctorAppointments(doctorId) {
    const doctor = doctors.find(d => d.id === doctorId);
    if (!doctor) return `Doctor not found.`;
    return appointments.filter(a => a.doctorId === doctorId);
}

// Export the module functions
module.exports = {
    bookAppointment,       // Book an appointment with a doctor
    getAppointmentsByPatient, // View all appointments by patient name
    cancelAppointment,     // Cancel an appointment using ID
    listDoctors,           // View available doctors
    getDoctorAppointments  // Get all appointments for a specific doctor
};
