
/**
 * Represents the data structure for a contact form submission.
 */
export interface FormSubmission {
  /**
   * The name of the person submitting the form.
   */
  name: string;
  /**
   * The email address of the person submitting the form.
   */
  email: string;
  /**
   * The message content from the form submission.
   */
  message: string;
}

/**
 * Asynchronously submits a contact form. This function will send the form data
 * to a specified endpoint (e.g., Formspree, EmailJS, or a custom API).
 *
 * @param submission The form submission data to be sent.
 * @returns A promise that resolves when the form is successfully submitted.  May return error if submission fails.
 */
export async function submitForm(submission: FormSubmission) {
    try {
        const response = await fetch('/api/submit-contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(submission),
        });
        if (response.ok) {
            console.log('Submission sent successfully.');
        }
        else {
            const errorData = await response.json();
            throw new Error(errorData.error || 'Failed to send submission');
        }
    }
    catch (error: any) {
        console.error('Error sending submission:', error);
        throw new Error(`Could not send submission: ${error.message}`);
    }
}
