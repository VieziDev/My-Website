
import { FormData } from '@/pages/contact/components/ContactForm'

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  // Return the fetch promise
  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    });
}
