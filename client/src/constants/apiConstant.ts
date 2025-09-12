const MODE = import.meta.env.MODE;

// export const SERVER_URL = `http://localhost:4000/api/v1`;

export const SERVER_URL =
    MODE === "development"
        ? `http://localhost:4000/api/v1`
        : "https://first-voice-dashboard-admin.onrender.com/api/v1";
