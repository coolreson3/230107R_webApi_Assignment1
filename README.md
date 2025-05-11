# 🏥 KOH_ZI_JIE_appointmentScheduler.js

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
10. [🪪 License](#license)

---

## 📝 Project Description <a id="project-description"></a>

This Node.js module simulates a simple appointment scheduling system for a clinic. It allows users to:

- View available doctors.
- Book an appointment with a doctor.
- View a patient’s appointments.
- View a doctor’s schedule.
- Cancel appointments.

All data is stored in-memory — no external database is used.

---

## ⚙️ Setup Instructions <a id="setup-instructions"></a>

### Prerequisites

- **Node.js** installed (v14+ recommended): [Download Node.js](https://nodejs.org/)

### Steps to Set Up

1. **Open Visual Studio Code** on your computer.

2. **Open the terminal**:
   - Click on the **View** tab in the top-left corner.
   - Then click **Terminal** from the dropdown menu.  
     (Or press `` Ctrl + ` `` — the backtick key just below the Esc key.)

3. **Clone this repository** by entering the following command into the terminal:

   ```bash
   git clone https://github.com/coolreson3/230107R_webApi_Assignment1.git

4. **After cloning finishes, move into the project directory** by entering the following command:

   ```bash
   cd 230107R_webApi_Assignment1  # (may be different depending on the terminal's directory)


4. **Run** the demonstration script:

   ```bash
   node test.js
   ```

---

## 📁 Project Structure <a id="project-structure"></a>

```
appointmentScheduler/
├── KOH_ZI_JIE_appointmentScheduler.js   # Main module
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
  { id: 1, name: "Dr. John Smith", specialty: "Cardiologist" },
  { id: 2, name: "Dr. Sarah Lee", specialty: "Dermatologist" },
  { id: 3, name: "Dr. Emma Brown", specialty: "Dentist" }
]
```

---

### `bookAppointment(patientName, doctorId, date, time)`

```js
scheduler.bookAppointment("Alice", 1, "2025-05-10", "10:00 AM");
scheduler.bookAppointment("Bob", 2, "2025-05-11", "2:00 PM");
```

**Output:**

```js
'Appointment booked for Alice with Dr. John Smith on 2025-05-10 at 10:00 AM.'
'Appointment booked for Bob with Dr. Sarah Lee on 2025-05-11 at 2:00 PM.'
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
    patientName: "Alice",
    doctorId: 1,
    doctorName: "Dr. John Smith",
    date: "2025-05-10",
    time: "10:00 AM"
  }
]
```

---

### `getDoctorAppointments(doctorId)`

```js
scheduler.getDoctorAppointments(1);
```

**Output:**

```js
[
  {
    id: 1,
    patientName: "Alice",
    doctorId: 1,
    doctorName: "Dr. John Smith",
    date: "2025-05-10",
    time: "10:00 AM"
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
'Cancelled appointment with Dr. Sarah Lee for Bob.'
```

---

## 📊 Example Data <a id="example-data"></a>

Initial in-memory data:

```js
const doctors = [
  { id: 1, name: "Dr. John Smith", specialty: "Cardiologist" },
  { id: 2, name: "Dr. Sarah Lee", specialty: "Dermatologist" },
  { id: 3, name: "Dr. Emma Brown", specialty: "Dentist" }
];

const appointments = [];
```

---

## 🧪 Usage Example <a id="usage-example"></a>

```js
const scheduler = require("./KOH_ZI_JIE_appointmentScheduler");

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
```

**Output:**

```js
=== Available Doctors ===
[
  { id: 1, name: 'Dr. John Smith', specialty: 'Cardiologist' },
  { id: 2, name: 'Dr. Sarah Lee', specialty: 'Dermatologist' },
  { id: 3, name: 'Dr. Emma Brown', specialty: 'Dentist' }
]

=== Booking Appointments ===
'Appointment booked for Alice with Dr. John Smith on 2025-05-10 at 10:00 AM.'
'Appointment booked for Bob with Dr. Sarah Lee on 2025-05-11 at 2:00 PM.'

=== Alice's Appointments ===
[
  {
    id: 1,
    patientName: 'Alice',
    doctorId: 1,
    doctorName: 'Dr. John Smith',
    date: '2025-05-10',
    time: '10:00 AM'
  }
]

=== Dr. Sarah Lee's Appointments ===
[
  {
    id: 2,
    patientName: 'Bob',
    doctorId: 2,
    doctorName: 'Dr. Sarah Lee',
    date: '2025-05-11',
    time: '2:00 PM'
  }
]

=== Canceling Appointment ID 2 ===
'Cancelled appointment with Dr. Sarah Lee for Bob.'

=== All Appointments After Cancellation ===
[]
```

---

## 🪪 License <a id="license"></a>

MIT License — free to use, modify, and distribute.
