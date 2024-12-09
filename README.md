# Integrated HealthAI: Revolutionizing Healthcare through Advanced Diagnostic Systems

## Project Overview

Integrated HealthAI is a comprehensive system designed to revolutionize healthcare by providing advanced diagnostic capabilities through multiple components:

1. **HeartBeat-Detection-using-OpenCV** - An application for detecting heartbeats using computer vision techniques.
2. **Skin Cancer** - An application for diagnosing skin cancer using machine learning models.
3. **Frontend** - The user-facing interface for interacting with the system.

---

## Prerequisites

### General Requirements:

- **Node.js** and **npm** should be pre-installed for the frontend.
- **Python** (version 3.7 or above) and **pip** should be pre-installed for the backend components.

---

## Setting Up the Project

### 1. HeartBeat-Detection-using-OpenCV

The `HeartBeat-Detection-using-OpenCV` folder contains the application for heartbeat detection. To set it up:

1. Navigate to the `HeartBeat-Detection-using-OpenCV` folder:
   ```bash
   cd HeartBeat-Detection-using-OpenCV
   ```
2. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the application:
   ```bash
   uvicorn heartbeat:app --reload
   ```

---

### 2. Skin Cancer

The `Skin Cancer` folder contains the application for diagnosing skin cancer. To set it up:

1. Navigate to the `Skin Cancer` folder:
   ```bash
   cd Skin Cancer
   ```
2. Install all dependencies (ensure `requirements.txt` is set up):
   ```bash
   pip install -r requirements.txt
   ```
3. Start the application:
   ```bash
   python main.py
   ```

---

### 3. Frontend

The `frontend` folder contains the user-facing interface. To set it up:

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```

---

## Running the Project

1. Ensure all components are set up according to the instructions above.
2. Start the backend services (`HeartBeat-Detection-using-OpenCV` and `Skin Cancer`).
3. Start the frontend development server.
4. Access the system through the frontend interface to utilize the diagnostic applications.

---

## Notes

- Configure any required environment variables for each component.
- Ensure that all dependencies are installed as specified in the respective `requirements.txt` or `package.json` files.
- For additional help, consult the documentation or reach out to the development team.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Transforming healthcare, one diagnostic at a time.
