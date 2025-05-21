# 🏥 KOH_ZI_JIE_healthcareManagementSystem.js

## 📑 Table of Contents

1. [📋 Project Description](#project-description)
2. [⚙️ Setup Instructions](#setup-instructions)
3. [📁 Project Structure](#project-structure)
4. [🛠️ Development Tools](#development-tools)
5. [🧪 Testing Tools](#testing-tools)
6. [🌐 Version Control](#version-control)
7. [🧩 Function Reference](#function-reference)
8. [📊 Example Data](#example-data)
9. [🧪 Usage Example](#usage-example)
10. [📚 References](#references)
11. [🪪 License](#license)

---

## 📝 Project Description <a id="project-description"></a>

This Node.js module simulates a simple appointment scheduling system for a clinic. It allows patients/admins to:

- View available doctors.
- Filter doctors based on specialty, gender, language, mode of visit, or illness treated etc.
- Book an appointment with a doctor.
- View a patient’s appointments.
- Cancel appointments.
- Reschedule existing appointments.
- Check if a doctor is available at a specific date and time.
- Check if a doctor accepts a specific insurance provider.
- View a doctor’s full schedule (Admin feature).
- Retrieve reviews left by other patients for each doctor.

All data is stored in-memory — no external database is used.

---

## ⚙️ Setup Instructions <a id="setup-instructions"></a>

### Prerequisites

- **Node.js** installed (v22+ recommended): [Download Node.js](https://nodejs.org/)

### Steps to Set Up

1. **Open Visual Studio Code** on your computer.

2. **Open the terminal**:

   - Click on the **View** tab in the top-left corner.
   - Then click **Terminal** from the dropdown menu.  
     (Or press `` Ctrl + ` `` — the backtick key just below the Esc key.)

3. **Clone this repository** by entering the following command into the terminal:

   ```bash
   git clone https://github.com/coolreson3/230107R_webApi_Assignment1.git
   ```

4. **After cloning finishes, move into the project directory** by entering the following command:

   ```bash
   cd 230107R_webApi_Assignment1  # (may be different depending on the terminal's directory)
   ```

5. **Create a file named `test.js` in the root of the project:**

   - In VS Code:  
     Right-click on the project folder > New File > Name it `test.js`.

6. **Copy the code from the [Usage Example](#usage-example) section below and paste it into `test.js` (everything except the Output section).**

7. **Run the demo script in the terminal:**

       node test.js

---

## 📁 Project Structure <a id="project-structure"></a>

```
230107R_WEBAPI_ASSIGNMENT1/
├── KOH_ZI_JIE_healthcareManagementSystem.js   # Main module
├── test.js                              # Script to demonstrate functionality
├── README.md                            # Documentation
```

---

## 🛠️ Development Tools <a id="development-tools"></a>

- **Node.js** — JavaScript runtime
- **VS Code** — Recommended code editor

---

## 🧪 Testing Tools <a id="testing-tools"></a>

- Manual test using `console.log()` in `test.js`

---

## 🌐 Version Control <a id="version-control"></a>

- Git-based (via GitHub)
- Clone the repository to your local machine to explore or test the demo.

---

## 🧩 Function Reference <a id="function-reference"></a>

### `listDoctors()`

```js
scheduler.listDoctors();
```

**Output:**

```js
[
  {
    id: 1,
    name: 'Dr. John Smith',
    specialty: 'Family Nurse Practitioner',
    gender: 'Male',
    modeOfVisit: [ 'video', 'inperson' ],
    languagesSpoken: [ 'English', 'Spanish' ],
    illnessesTreated: [ 'Heart Disease', 'High Blood Pressure' ],
    reviews: [ [Object], [Object] ],
    insuranceAccepted: [ 'Aetna', 'BlueCross BlueShield', 'Cigna' ],
    location: '123 Main St, Colorado Springs, CO'
  },
  {
    id: 2,
    name: 'Dr. Deborah Presken, MD',
    specialty: 'Family Physician',
    gender: 'Female',
    modeOfVisit: [ 'video' ],
    languagesSpoken: [ 'English', 'Chinese' ],
    illnessesTreated: [ 'Eczema', 'Acne' ],
    reviews: [ [Object], [Object] ],
    insuranceAccepted: [ 'UnitedHealthcare', 'Cigna', 'Medicare' ],
    location: '456 Elm St, Boulder, CO'
  }
]
```

---

### `bookAppointment(appointmentDetails)`

```js
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
  modeOfVisit: "video",
});



```

**Output:**

```js
"Appointment booked for Alice with Dr. John Smith on 2025-05-10 at 10:00 AM.";
```

---

### `getAppointmentsByPatient(patientName)`

```js
scheduler.getAppointmentsByPatient("Alice");
```

**Output:**

```js
[
  {
    id: 1,
    patientName: 'Alice',
    doctorId: 1,
    doctorName: 'Dr. John Smith',
    date: '2025-05-10',
    time: '10:00 AM',
    isNewPatient: true,
    isBookingForSomeoneElse: false,
    location: 'Colorado',
    insuranceProvider: 'UnitedHealthcare - Options PPO',
    memberId: '123456',
    note: 'Mild fever symptoms',
    modeOfVisit: 'video'
  }
]
```

---

### `getDoctorAppointments(doctorId)`

```js
scheduler.getDoctorAppointments(2);
```

**Output:**

```js
[
  {
    id: 2,
    patientName: 'Bob',
    doctorId: 2,
    doctorName: 'Dr. Deborah Presken, MD',
    date: '2025-05-11',
    time: '2:00 PM',
    isNewPatient: false,
    isBookingForSomeoneElse: true,
    location: 'Colorado',
    insuranceProvider: null,
    memberId: null,
    note: null,
    modeOfVisit: 'video'
  }
]
```

---

### `cancelAppointment(appointmentId)`

```js
scheduler.cancelAppointment(2);
```

**Output:**

```js
"Cancelled appointment with Dr. Deborah Presken, MD for Bob."
```

### `isDoctorAvailable(doctorId, date, time)`

```js
scheduler.isDoctorAvailable(1, "2025-05-10", "10:00 AM");
```

**Output:**

```js
false
```

### `rescheduleAppointment(appointmentId, newDate, newTime)`

```js
scheduler.rescheduleAppointment(1, "2025-05-12", "3:00 PM");
```

**Output:**

```js
"Appointment rescheduled to 2025-05-12 at 3:00 PM."
```


### `filterDoctors(criteria)`

```js
scheduler.filterDoctors({
  specialty: "Family Physician",
  gender: "Female",
  modeOfVisit: "video",
  language: "Chinese",
  illness: "Eczema",
});
```

**Output:**

```js
[
  {
    id: 2,
    name: 'Dr. Deborah Presken, MD',
    specialty: 'Family Physician',
    gender: 'Female',
    modeOfVisit: [ 'video' ],
    languagesSpoken: [ 'English', 'Chinese' ],
    illnessesTreated: [ 'Eczema', 'Acne' ],
    reviews: [ [Object], [Object] ],
    insuranceAccepted: [ 'UnitedHealthcare', 'Cigna', 'Medicare' ],
    location: '456 Elm St, Boulder, CO'
  }
]
```


---

### `getDoctorReviews(doctorId)`

```js
scheduler.getDoctorReviews(2);
```

**Output:**

```js
[
  {
    rating: 5,
    comment: 'Amazing care and attention to detail.',
    date: 'May 6, 2025',
    patientName: 'Cheryl B.',
    verification: 'Verified patient',
    modeOfVisit: 'Video visit'
  },
  {
    rating: 4,
    comment: 'Great doctor, but hard to reach for follow-ups.',
    date: 'April 18, 2025',
    patientName: 'Liam M.',
    verification: 'Verified patient',
    modeOfVisit: 'In-person visit'
  }
]
```



### `checkInsurance(doctorId, insuranceProvider)`

```js
scheduler.checkInsurance(1, "Cigna");
```

**Output:**

```js
"Doctor Dr. John Smith accepts Cigna."
```

## 📊 Example Data <a id="example-data"></a>

Initial in-memory data:

```js
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
```

---

## 🧪 Usage Example <a id="usage-example"></a>

```js
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

```

**Output:**

```js
=== Available Doctors ===
[
  {
    id: 1,
    name: 'Dr. John Smith',
    specialty: 'Family Nurse Practitioner',
    gender: 'Male',
    modeOfVisit: [ 'video', 'inperson' ],
    languagesSpoken: [ 'English', 'Spanish' ],
    illnessesTreated: [ 'Heart Disease', 'High Blood Pressure' ],
    reviews: [ [Object], [Object] ],
    insuranceAccepted: [ 'Aetna', 'BlueCross BlueShield', 'Cigna' ],
    location: '123 Main St, Colorado Springs, CO'
  },
  {
    id: 2,
    name: 'Dr. Deborah Presken, MD',
    specialty: 'Family Physician',
    gender: 'Female',
    modeOfVisit: [ 'video' ],
    languagesSpoken: [ 'English', 'Chinese' ],
    illnessesTreated: [ 'Eczema', 'Acne' ],
    reviews: [ [Object], [Object] ],
    insuranceAccepted: [ 'UnitedHealthcare', 'Cigna', 'Medicare' ],
    location: '456 Elm St, Boulder, CO'
  }
]

=== Booking Appointments ===
"Appointment booked for Alice with Dr. John Smith on 2025-05-10 at 10:00 AM."
"Appointment booked for Bob with Dr. Deborah Presken, MD on 2025-05-11 at 2:00 PM."

=== Alice's Appointments ===
[
  {
    id: 1,
    patientName: 'Alice',
    doctorId: 1,
    doctorName: 'Dr. John Smith',
    date: '2025-05-10',
    time: '10:00 AM',
    isNewPatient: true,
    isBookingForSomeoneElse: false,
    location: 'Colorado',
    insuranceProvider: 'UnitedHealthcare - Options PPO',
    memberId: '123456',
    note: 'Mild fever symptoms',
    modeOfVisit: 'video'
  }
]

=== Dr. Deborah Presken, MD's Appointments ===
[
  {
    id: 2,
    patientName: 'Bob',
    doctorId: 2,
    doctorName: 'Dr. Deborah Presken, MD',
    date: '2025-05-11',
    time: '2:00 PM',
    isNewPatient: false,
    isBookingForSomeoneElse: true,
    location: 'Colorado',
    insuranceProvider: null,
    memberId: null,
    note: null,
    modeOfVisit: 'video'
  }
]

=== Canceling Appointment ID 2 ===
"Cancelled appointment with Dr. Deborah Presken, MD for Bob."

=== All Appointments for Bob After Cancellation ===
[]

=== Checking Availability (Dr. John Smith on 2025-05-10 at 10:00 AM) ===
false
=== Checking Availability (Dr. John Smith on 2025-05-12 at 11:00 AM) ===
true

=== Rescheduling Appointment ID 1 to 2025-05-12 at 3:00 PM ===
"Appointment rescheduled to 2025-05-12 at 3:00 PM."
=== Updated Alice's' Appointments ===
[
  {
    id: 1,
    patientName: 'Alice',
    doctorId: 1,
    doctorName: 'Dr. John Smith',
    date: '2025-05-12',
    time: '3:00 PM',
    isNewPatient: true,
    isBookingForSomeoneElse: false,
    location: 'Colorado',
    insuranceProvider: 'UnitedHealthcare - Options PPO',
    memberId: '123456',
    note: 'Mild fever symptoms',
    modeOfVisit: 'video'
  }
]


=== Filtering Doctors ===
Matching Doctors:
[
  {
    id: 2,
    name: 'Dr. Deborah Presken, MD',
    specialty: 'Family Physician',
    gender: 'Female',
    modeOfVisit: [ 'video' ],
    languagesSpoken: [ 'English', 'Chinese' ],
    illnessesTreated: [ 'Eczema', 'Acne' ],
    reviews: [ [Object], [Object] ],
    insuranceAccepted: [ 'UnitedHealthcare', 'Cigna', 'Medicare' ],
    location: '456 Elm St, Boulder, CO'
  }
]


=== Reviews for Dr. Deborah Presken ===
[
  {
    rating: 5,
    comment: 'Amazing care and attention to detail.',
    date: 'May 6, 2025',
    patientName: 'Cheryl B.',
    verification: 'Verified patient',
    modeOfVisit: 'Video visit'
  },
  {
    rating: 4,
    comment: 'Great doctor, but hard to reach for follow-ups.',
    date: 'April 18, 2025',
    patientName: 'Liam M.',
    verification: 'Verified patient',
    modeOfVisit: 'In-person visit'
  }
]


=== Insurance Check ===
`Doctor Dr. John Smith accepts Cigna.`
`Doctor Dr. Deborah Presken, MD is out-of-network for UnitedHealthcare - W500 Emergent Wrap. You may have a higher copay or be responsible for the full cost of your visit.`

```

---


## 📚 References <a id="references"></a>

Zocdoc – Online Appointment Booking UI → https://www.zocdoc.com/

Node.js Docs → https://nodejs.org/en/docs

JavaScript Date/Time → MDN Date Object

## 🪪 License <a id="license"></a>

MIT License — free to use, modify, and distribute.










# <a id="readMe"></a>
This `README.md` should serve as a comprehensive guide to using and understanding the healthcareManagementSystem.js module. It includes detailed instructions on how to install and use the module, as well as examples of how to interact with the module. The module is designed to be easy to use and understand, making it a valuable tool for healthcare professionals and patients alike.
