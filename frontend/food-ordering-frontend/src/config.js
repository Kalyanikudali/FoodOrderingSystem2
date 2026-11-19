// Use VITE_API_URL if defined (set in Render environment), otherwise fallback to localhost for development
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:9292';
