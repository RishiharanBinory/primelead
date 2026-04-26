export interface ContactFormState {
  fullName: string;
  phone: string;
  email: string;
  academicLevel: string;
  message: string;
}

export interface ContactFormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  academicLevel?: string;
  message?: string;
}