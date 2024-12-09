# Integrated HealthAI: Revolutionizing Healthcare Through Advanced Diagnostic Systems

## Project Overview
Integrated HealthAI combines multiple advanced diagnostic systems to provide cutting-edge healthcare solutions. The project includes:

1. **HeartBeat-Detection-using-OpenCV** - A system for heartbeat detection using computer vision.
2. **Skin Cancer** - A model for detecting skin cancer.
3. **Frontend** - The user interface for interacting with these systems.

---

## Prerequisites

### General Requirements:
- **Python** (version 3.7 or above) and **pip** should be pre-installed for the backend.
- **Node.js** and **npm** should be pre-installed for the frontend.

---

## Setting Up the Project

### 1. HeartBeat-Detection-using-OpenCV

The `HeartBeat-Detection-using-OpenCV` folder contains the code for heartbeat detection. To set up and run:

1. Navigate to the `HeartBeat-Detection-using-OpenCV` folder:
    ```bash
    cd HeartBeat-Detection-using-OpenCV
    ```
2. Install the dependencies:
    ```bash
    pip install -r requirements.txt
    ```
3. Start the server:
    ```bash
    uvicorn heartbeat:app --reload
    ```

---

### 2. Skin Cancer

The `Skin Cancer` folder contains the code for detecting skin cancer. To set up and run:

1. Navigate to the `Skin Cancer` folder:
    ```bash
    cd Skin_Cancer
    ```
2. Install the required Python libraries:
    ```bash
    pip install -r requirements.txt
    ```
3. Start the backend server:
    ```bash
    python main.py
    ```

---

### 3. Frontend

The `Frontend` folder contains the user interface code. To set up and run:

1. Navigate to the `Frontend` folder:
    ```bash
    cd Frontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

---

## Running the Project

1. Ensure all components (heartbeat detection, skin cancer model, and frontend) are set up.
2. Start the HeartBeat-Detection-using-OpenCV and Skin Cancer servers as described above.
3. Start the frontend development server.
4. Access the frontend through your browser to interact with the diagnostic systems.

---

## Notes
- Ensure all environment variables required by the project are configured properly.
- For troubleshooting, refer to the documentation or contact the development team.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

Empowering healthcare with AI-driven diagnostics!
