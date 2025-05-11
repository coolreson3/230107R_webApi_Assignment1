const scheduler = require('./KOH_ZI_JIE_appointmentScheduler');

// List available doctors
console.log("=== Available Doctors ===");
console.log(scheduler.listDoctors());
console.log("\n");

// Book two appointments
console.log("=== Booking Appointments ===");
console.log(scheduler.bookAppointment("Alice", 1, "2025-05-10", "10:00 AM"));
console.log(scheduler.bookAppointment("Bob", 2, "2025-05-11", "2:00 PM"));
console.log("\n");

// View appointments for Alice
console.log("=== Alice's Appointments ===");
console.log(scheduler.getAppointmentsByPatient("Alice"));
console.log("\n");

// View appointments for Dr. Sarah Lee (ID 2)
console.log("=== Dr. Sarah Lee's Appointments ===");
console.log(scheduler.getDoctorAppointments(2));
console.log("\n");

// Cancel Bob's appointment (ID 2)
console.log("=== Canceling Appointment ID 2 ===");
console.log(scheduler.cancelAppointment(2));
console.log("\n");

// Check appointments after cancellation
console.log("=== All Appointments After Cancellation ===");
console.log(scheduler.getAppointmentsByPatient("Bob"));