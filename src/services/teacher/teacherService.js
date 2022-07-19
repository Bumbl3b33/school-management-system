import api from "../api/apiService";

const teachers = "/teachers";

function teacherURL(id) {
  return `${teachers}/${id}`;
}

/** 
 * Teachers - RESTful API Endpoints
 * */

/**
 * Get all teacher names and IDs.
 * @returns object of teachers with redacted details
 */
export function getTeachers() {
  return api.get(`${teachers}`);
}

/**
 * Get a teacher's details.
 * @returns object of teacher with details
 */
export function getTeacher(id) {
  return api.get(teacherURL(id));
}

/**
 * Creates a teacher
 * @param {*} body 
 * @returns teacher object
 */
export function createTeacher(body) {
  const teacher = { ...body };
  return api.post(teachers, teacher);
}

/**
 * Updates teacher by id
 * @param {Integer} id 
 * @param {*} body 
 * @returns teacher object 
 */
export function updateTeacher(id, body) {
  const teacher = { ...body };
  return api.put(teacherURL(id), teacher);
}

/**
 * Deletes teacher by id
 * @param {Integer} id 
 * @returns null
 */
export function deleteTeacher(id) {
  return api.delete(`${teachers}/${id}`);
}

/**
 * Teachers - Other endpoints
 */

/**
 * Updates teacher's subjects. 
 * @param {*} body 
 * @returns teacher's subjects
 */
export function updateTeacherSubjects(body) {
  const subjects = { ...body };
  return api.put(teachers, subjects);
}

/**
 * Updates teacher's classrooms. 
 * @param {*} body 
 * @returns teacher's classrooms
 */
 export function updateTeacherClassrooms(body) {
  const classrooms = { ...body };
  return api.put(teachers, classrooms);
}