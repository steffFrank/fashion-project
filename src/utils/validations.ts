// Function to validate the name
export function validateName(name: string, fieldName: string): void {
	if (!name || name.trim() === "") {
	  throw new Error(`${fieldName} non può essere vuoto.`);
	}
  }

// Function to validate the email
export function validateEmail(email: string): void {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
	  throw new Error("Email non valida.");
	}
  }