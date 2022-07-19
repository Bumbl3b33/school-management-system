import api from "../api/apiService";

const students = "/students";

function studentURL(id) {
  return `${students}/${id}`;
}

/** 
 * Students - RESTful API Endpoints
 * */

/**
 * Get all student names and IDs.
 * @returns object of students with redacted details
 */
export function getStudents() {
  return api.get(`${students}`);
}

/**
 * Get a student details.
 * @returns object of student with details
 */
export function getStudent(id) {
  return api.get(studentURL(id));
}

/**
 * Creates a student
 * @param {*} body 
 * @returns student object
 */
export function createStudent(body) {
  const student = { ...body };
  return api.post(students, student);
}

/**
 * Updates student by id
 * @param {Integer} id 
 * @param {*} body 
 * @returns student object 
 */
export function updateStudent(id, body) {
  const student = { ...body };
  return api.put(studentURL(id), student);
}

/**
 * Deletes student by id
 * @param {Integer} id 
 * @returns null
 */
export function deleteStudent(id) {
  return api.delete(`${students}/${id}`);
}

/**
 * Students - Other endpoints
 */

/**
 * Updates student's subjects. 
 * @param {*} body 
 * @returns student's subjects
 */
export function updateStudentSubjects(body) {
  const subjects = { ...body };
  return api.put(students, subjects);
}