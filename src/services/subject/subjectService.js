import api from "../api/apiService";

const subjects = "/subjects";

function subjectURL(id) {
  return `${subjects}/${id}`;
}

/** 
 * subjects - RESTful API Endpoints
 * */

/**
 * Get all subject names and IDs.
 * @returns object of subjects with redacted details
 */
export function getSubjects() {
  return api.get(`${subjects}`);
}

/**
 * Get a subject's details.
 * @returns object of subject with details
 */
 export function getSubject(id) {
  return api.get(subjectURL(id));
}

/**
 * Creates a subject
 * @param {*} body 
 * @returns subject object
 */
export function createSubject(body) {
  const subject = { ...body };
  return api.post(subjects, subject);
}

/**
 * Updates subject by id
 * @param {Integer} id 
 * @param {*} body 
 * @returns subject object 
 */
export function updateSubject(id, body) {
  const subject = { ...body };
  return api.put(subjectURL(id), subject);
}

/**
 * Deletes subject by id
 * @param {Integer} id 
 * @returns null
 */
export function deleteSubject(id) {
  return api.delete(`${subjects}/${id}`);
}