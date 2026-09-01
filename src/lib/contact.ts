export const CONTACT_EMAIL = "hello.pncreation@gmail.com";
export const CONTACT_PHONE = "+919653386506";
export const CONTACT_PHONE_DISPLAY = "+91 96533 86506";

export const DEFAULT_SUBJECT = "Project Enquiry — PN Creation";
export const DEFAULT_BODY = `Hello PN Creation,

I would like to discuss a project with you.

Name:
Business / Brand:
Service needed:
Budget (approx.):
Timeline:
Details:

Thank you,`;

/** Builds a mailto: link with a prefilled subject and message. */
export function mailtoHref(subject: string = DEFAULT_SUBJECT, body: string = DEFAULT_BODY) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
