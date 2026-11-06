import profile from '../data/profile.js';

/** Full URL of the resume PDF stored in /public (works with any Vite base path). */
export const resumeUrl = `${import.meta.env.BASE_URL}${profile.resumeFile}`;

/** File name the browser saves the resume as. */
export const resumeDownloadName = profile.resumeDownloadName || profile.resumeFile;
