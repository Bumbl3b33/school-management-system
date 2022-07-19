import api from "../api/apiService";

const classrooms = "/classrooms";

function classroomURL(id) {
  return `${classrooms}/${id}`;
}

/** 
 * Classrooms - RESTful API Endpoints
 * */

/**
 * Get all classroom names and IDs.
 * @returns object of classrooms with redacted details
 */
export function getClassrooms() {
  return api.get(`${classrooms}`);
}

/**
 * Get a classroom details.
 * @returns object of classroom with details
 */
export function getClassroom(id) {
  return api.get(classroomURL(id));
}

/**
 * Creates a classroom
 * @param {*} body 
 * @returns classroom object
 */
export function createClassroom(body) {
  const classroom = { ...body };
  return api.post(classrooms, classroom);
}

/**
 * Updates classroom by id
 * @param {Integer} id 
 * @param {*} body 
 * @returns classroom object 
 */
export function updateClassroom(id, body) {
  const classroom = { ...body };
  return api.put(classroomURL(id), classroom);
}

/**
 * Deletes classroom by id
 * @param {Integer} id 
 * @returns null
 */
export function Deleteclassroom(id) {
  return api.delete(`${classrooms}/${id}`);
}

/**
 * Classrooms - Other endpoints
 */

/**
 * Updates classroom's subjects. 
 * @param {*} body 
 * @returns classroom's subjects
 */
export function updateClassroomsubjects(body) {
  const classroom = { ...body };
  return api.put(classrooms, classroom);
}