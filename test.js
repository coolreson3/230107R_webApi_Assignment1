const scheduler = require("./KOH_ZI_JIE_healthcareManagementSystem");

// === Display All Available Doctors ===
console.log("=== Available Doctors ===");
console.log(scheduler.listDoctors());
console.log("\n");

// === Book Two Appointments ===
console.log("=== Booking Appointments ===");

// Booking for Alice
console.log(
  scheduler.bookAppointment({
    patientName: "Alice",
    doctorId: 1,
    date: "2025-05-10",
    time: "10:00 AM",
    isNewPatient: true,
    isBookingForSomeoneElse: false,
    location: "Colorado",
    insuranceProvider: "UnitedHealthcare - Options PPO",
    memberId: "123456",
    note: "Mild fever symptoms",
  })
);

// Booking for Bob (on behalf of someone else)
console.log(
  scheduler.bookAppointment({
    patientName: "Bob",
    doctorId: 2,
    date: "2025-05-11",
    time: "2:00 PM",
    isNewPatient: false,
    isBookingForSomeoneElse: true,
    location: "Colorado",
    insuranceProvider: null,
    memberId: null,
    note: null,
  })
);
console.log("\n");

// === View Alice's Appointments ===
console.log("=== Alice's Appointments ===");
console.log(scheduler.getAppointmentsByPatient("Alice"));
console.log("\n");

// === View Appointments for Dr. Deborah Presken (Doctor ID: 2) ===
console.log("=== Dr. Deborah Presken, MD's Appointments ===");
console.log(scheduler.getDoctorAppointments(2));
console.log("\n");

// === Cancel Bob's Appointment (Appointment ID: 2) ===
console.log("=== Canceling Appointment ID 2 ===");
console.log(scheduler.cancelAppointment(2));
console.log("\n");

// === Confirm Bob's Appointments After Cancellation ===
console.log("=== All Appointments for Bob After Cancellation ===");
console.log(scheduler.getAppointmentsByPatient("Bob"));
console.log("\n");

// === Check Doctor Availability ===
console.log(
  "=== Checking Availability (Dr. John Smith on 2025-05-10 at 10:00 AM) ==="
);
console.log(scheduler.isDoctorAvailable(1, "2025-05-10", "10:00 AM")); // Already booked

console.log(
  "=== Checking Availability (Dr. John Smith on 2025-05-12 at 11:00 AM) ==="
);
console.log(scheduler.isDoctorAvailable(1, "2025-05-12", "11:00 AM")); // Likely available
console.log("\n");

// === Reschedule Appointment for Alice (Appointment ID: 1) ===
console.log("=== Rescheduling Appointment ID 1 to 2025-05-12 at 3:00 PM ===");
console.log(scheduler.rescheduleAppointment(1, "2025-05-12", "3:00 PM"));

console.log("=== Updated Alice's Appointments ===");
console.log(scheduler.getAppointmentsByPatient("Alice"));
console.log("\n");

// === Filter Doctors Based on Multiple Criteria ===
console.log("=== Filtering Doctors ===");
const searchResults = scheduler.filterDoctors({
  specialty: "Family Physician",
  gender: "Female",
  modeOfVisit: "video",
  language: "Chinese",
  illness: "Eczema",
});

if (searchResults.length === 0) {
  console.log("No doctors found matching the criteria.");
} else {
  console.log("Matching Doctors:");
  console.log(searchResults);
}
console.log("\n");

// === View Reviews for Dr. Deborah Presken (Doctor ID: 2) ===
console.log("=== Reviews for Dr. Deborah Presken ===");
console.log(scheduler.getDoctorReviews(2));
console.log("\n");

// === Check if a Doctor Accepts a Given Insurance Provider ===
console.log("=== Insurance Check ===");
console.log(scheduler.checkInsurance(1, "Cigna")); // Expected: Accepted
console.log(
  scheduler.checkInsurance(2, "UnitedHealthcare - W500 Emergent Wrap")
); // Expected: Not Accepted
console.log("\n");
