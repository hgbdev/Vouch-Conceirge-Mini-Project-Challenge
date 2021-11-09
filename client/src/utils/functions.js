/**
 * Validate field text, not empty
 * @param {*} text
 * @returns {Boolean}
 */
export function validateTextField(text) {
  const newText = text.trim();
  if (!newText.length) {
    return false;
  }
  return true;
}
