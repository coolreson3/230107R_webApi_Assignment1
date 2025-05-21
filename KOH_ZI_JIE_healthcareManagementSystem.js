/**
 * appointmentScheduler.js
 * Healthcare appointment scheduling module with dummy in-memory data.
 */

// In-memory storage for appointments.
const appointments = [];

// Sample list of doctors with details such as their specialty, language, reviews, etc.
const doctors = [
  {
    id: 1,
    name: "Dr. John Smith",
    specialty: "Family Nurse Practitioner",
    gender: "Male",
    modeOfVisit: ["video", "inperson"],
    languagesSpoken: ["English", "Spanish"],
    illnessesTreated: ["Heart Disease", "High Blood Pressure"],
    reviews: [
      {
        rating: 4.5,
        comment: "Very caring and thorough doctor.",
        date: "April 10, 2025",
        patientName: "Emily R.",
        verification: "Verified patient",
        modeOfVisit: "In-person visit",
      },
      {
        rating: 3.5,
        comment: "Good, but a bit rushed.",
        date: "March 22, 2025",
        patientName: "Jake P.",
        verification: "Verified patient",
        modeOfVisit: "Video visit",
      },
    ],
    insuranceAccepted: ["Aetna", "BlueCross BlueShield", "Cigna"],
    location: "123 Main St, Colorado Springs, CO",
  },
  {
    id: 2,
    name: "Dr. Deborah Presken, MD",
    specialty: "Family Physician",
    gender: "Female",
    modeOfVisit: ["video"],
    languagesSpoken: ["English", "Chinese"],
    illnessesTreated: ["Eczema", "Acne"],
    reviews: [
      {
        rating: 5,
        comment: "Amazing care and attention to detail.",
        date: "May 6, 2025",
        patientName: "Cheryl B.",
        verification: "Verified patient",
        modeOfVisit: "Video visit",
      },
      {
        rating: 4,
        comment: "Great doctor, but hard to reach for follow-ups.",
        date: "April 18, 2025",
        patientName: "Liam M.",
        verification: "Verified patient",
        modeOfVisit: "In-person visit",
      },
    ],
    insuranceAccepted: ["UnitedHealthcare", "Cigna", "Medicare"],
    location: "456 Elm St, Boulder, CO",
  },
];

/* ------------------------- Helper Functions ------------------------- */

/**
 * Finds a doctor by their unique ID.
 * @param {number} doctorId - The ID of the doctor to search for.
 * @returns {object|null} The doctor object or null if not found.
 */
function findDoctorById(doctorId) {
  return doctors.find((d) => d.id === doctorId);
}

/**
 * Checks if a doctor is available at a specified date and time.
 * @param {number} doctorId - The doctor's ID.
 * @param {string} date - The date for the appointment.
 * @param {string} time - The time for the appointment.
 * @returns {boolean} `true` if available, `false` if the doctor is already booked.
 */
function isDoctorAvailable(doctorId, date, time) {
  return !appointments.some(
    (app) => app.doctorId === doctorId && app.date === date && app.time === time
  );
}

/* ------------------------ Appointment Functions ------------------------ */

/**
 * Books an appointment for a patient.
 * @param {object} appointmentDetails - Details for the appointment.
 * @returns {string} Confirmation message or error.
 */
function bookAppointment({
  patientName,
  doctorId,
  date,
  time,
  isNewPatient,
  isBookingForSomeoneElse = false,
  location,
  insuranceProvider = null,
  memberId = null,
  note = null,
  modeOfVisit = "video",
}) {
  // Find the doctor by their ID.
  const doctor = findDoctorById(doctorId);
  if (!doctor) return `Doctor with ID ${doctorId} not found.`; // Handle doctor not found case.

  // Ensure the patient is located in Colorado for a video visit.
  if (location !== "Colorado" && modeOfVisit === "video") {
    return "You must be located in Colorado for this video visit.";
  }

  // Validate the patient's new patient status.
  if (typeof isNewPatient !== "boolean") {
    return "Please specify if you are a new patient (Yes/No).";
  }

  // Check if the doctor is available for the given date and time.
  if (!isDoctorAvailable(doctorId, date, time)) {
    return `Doctor is already booked on ${date} at ${time}.`;
  }

  // Create and store a new appointment.
  const newAppointment = {
    id: appointments.length + 1,
    patientName,
    doctorId,
    doctorName: doctor.name,
    date,
    time,
    isNewPatient,
    isBookingForSomeoneElse,
    location,
    insuranceProvider,
    memberId,
    note,
    modeOfVisit,
  };

  appointments.push(newAppointment); // Add the appointment to the in-memory list.
  return `Appointment booked for ${patientName} with ${doctor.name} on ${date} at ${time}.`;
}

/**
 * Retrieves all appointments for a specific patient.
 * @param {string} patientName - The name of the patient.
 * @returns {array} A list of appointments for the patient.
 */
function getAppointmentsByPatient(patientName) {
  // Check if patientName is provided and is a valid string.
  // This prevents errors from invalid input types like null, undefined, or non-string values.
  if (!patientName || typeof patientName !== "string") {
    return "Invalid or missing patient name.";
  }
  // Filter the appointments array to find all entries matching the patient's name exactly.
  return appointments.filter((a) => a.patientName === patientName);
}

/**
 * Cancels an appointment by its ID.
 * @param {number} appointmentId - The ID of the appointment to cancel.
 * @returns {string} Confirmation message or error.
 */
function cancelAppointment(appointmentId) {
  // Check if appointmentId is a valid number; if not, return an error message.
  if (typeof appointmentId !== "number" || isNaN(appointmentId)) {
    return "Invalid appointment ID.";
  }
  // Find the index of the appointment to cancel.
  const index = appointments.findIndex((a) => a.id === appointmentId);
  if (index === -1) return `Appointment ID ${appointmentId} not found.`; // Handle case if appointment doesn't exist.

  // Remove the appointment from the list and return the cancellation message.
  const [removed] = appointments.splice(index, 1);
  return `Cancelled appointment with ${removed.doctorName} for ${removed.patientName}.`;
}

/**
 * Reschedules an existing appointment.
 * @param {number} appointmentId - The ID of the appointment to reschedule.
 * @param {string} newDate - The new date for the appointment.
 * @param {string} newTime - The new time for the appointment.
 * @returns {string} Confirmation message or error.
 */
function rescheduleAppointment(appointmentId, newDate, newTime) {
  // Validate that appointmentId is a valid number.
  if (typeof appointmentId !== "number" || isNaN(appointmentId)) {
    return "Invalid appointment ID.";
  }
  // Validate that newDate is a non-empty string.
  if (!newDate || typeof newDate !== "string") {
    return "Invalid or missing new date.";
  }
  // Validate that newTime is a non-empty string.
  if (!newTime || typeof newTime !== "string") {
    return "Invalid or missing new time.";
  }

  // Find the appointment by ID.
  const appointment = appointments.find((a) => a.id === appointmentId);
  if (!appointment) return "Appointment not found."; // Handle case where appointment doesn't exist.

  // Ensure the doctor is available at the new date and time.
  if (!isDoctorAvailable(appointment.doctorId, newDate, newTime)) {
    return `Doctor is not available on ${newDate} at ${newTime}.`;
  }

  // Update the appointment's date and time.
  appointment.date = newDate;
  appointment.time = newTime;

  return `Appointment rescheduled to ${newDate} at ${newTime}.`;
}

/**
 * Retrieves all appointments for a specific doctor.
 * @param {number} doctorId - The doctor's ID.
 * @returns {array} A list of the doctor's appointments.
 */
function getDoctorAppointments(doctorId) {
  // Validate that doctorId is a valid number.
  if (typeof doctorId !== "number" || isNaN(doctorId)) {
    return "Invalid doctor ID.";
  }
  const doctor = findDoctorById(doctorId);
  if (!doctor) return `Doctor not found.`; // Handle doctor not found case.

  return appointments.filter((a) => a.doctorId === doctorId); // Return appointments for the specified doctor.
}

/* ------------------------- Doctor Utilities ------------------------- */

/**
 * Lists all available doctors.
 * @returns {array} A list of all doctors.
 */
function listDoctors() {
  return doctors;
}

/**
 * Filters doctors based on the given criteria (specialty, gender, language, illness, etc.).
 * @param {object} criteria - The filter criteria (e.g., specialty, gender).
 * @returns {array} A list of doctors that match the criteria.
 */
function filterDoctors(criteria) {
  return doctors.filter((doctor) => {
    const { specialty, gender, modeOfVisit, language, illness } = criteria;

    // Filter based on specialty.
    if (specialty && doctor.specialty.toLowerCase() !== specialty.toLowerCase())
      return false;

    // Filter based on gender.
    if (gender && doctor.gender.toLowerCase() !== gender.toLowerCase())
      return false;

    // Filter based on preferred mode of visit.
    if (modeOfVisit && !doctor.modeOfVisit.includes(modeOfVisit.toLowerCase()))
      return false;

    // Filter based on preferred language.
    if (
      language &&
      !doctor.languagesSpoken.some(
        (lang) => lang.toLowerCase() === language.toLowerCase()
      )
    )
      return false;

    // Filter based on treated illness.
    if (
      illness &&
      !doctor.illnessesTreated.some(
        (ill) => ill.toLowerCase() === illness.toLowerCase()
      )
    )
      return false;

    return true; // All conditions matched, return the doctor.
  });
}

/**
 * Retrieves reviews for a specific doctor.
 * @param {number} doctorId - The doctor's ID.
 * @returns {array} A list of reviews for the doctor.
 */
function getDoctorReviews(doctorId) {
  const doctor = findDoctorById(doctorId);
  if (!doctor) return `Doctor with ID ${doctorId} not found.`; // Handle doctor not found case.

  // Return doctor reviews with default values for missing fields.
  return doctor.reviews.map(
    ({
      rating,
      comment,
      date = "N/A",
      patientName = "Anonymous",
      verification = "Unverified",
      modeOfVisit = "Not specified",
    }) => ({
      rating,
      comment,
      date,
      patientName,
      verification,
      modeOfVisit,
    })
  );
}

/**
 * Checks if a doctor accepts a specific insurance provider.
 * @param {number} doctorId - The doctor's ID.
 * @param {string} insuranceProvider - The insurance provider to check.
 * @returns {string} Confirmation message regarding insurance acceptance.
 */
function checkInsurance(doctorId, insuranceProvider) {
  const doctor = findDoctorById(doctorId);
  if (!doctor) return `Doctor with ID ${doctorId} not found.`; // Handle doctor not found case.

  return doctor.insuranceAccepted.includes(insuranceProvider)
    ? `Doctor ${doctor.name} accepts ${insuranceProvider}.`
    : `Doctor ${doctor.name} is out-of-network for ${insuranceProvider}. You may have a higher copay or be responsible for the full cost of your visit.`;
}

/* ---------------------------- Exports ---------------------------- */

// Exporting the functions to be used in other parts of the application.
module.exports = {
  bookAppointment,
  getAppointmentsByPatient,
  cancelAppointment,
  rescheduleAppointment,
  getDoctorAppointments,
  isDoctorAvailable,
  listDoctors,
  filterDoctors,
  getDoctorReviews,
  checkInsurance,
};
