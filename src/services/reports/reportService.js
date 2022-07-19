import api from "../api/apiService";

const studentReport = "/reports/student";

/** 
 * Reports - API Endpoints
 * */

/**
 * Get a student's report.
 * @returns object of student's report
 */
export function getStudentReport(id) {
  return api.get(`${studentReport}/${id}`);
}
