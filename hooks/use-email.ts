import { useState } from 'react';
import emailjs from '@emailjs/browser';

// Interfaces for the form data
interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    message: string;
    // Add other fields as needed
    serviceStr?: string; // Services needed
    orgName?: string;
    industry?: string;
}

interface NewsletterFormData {
    email: string;
}

export const useEmail = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // These should ideally come from env vars, but we can accept them as args or hardcode for MVP if user prefers
    // SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY

    // For now, we will expect these to be passed or hardcoded by the user in a config file
    // We will use placeholders that the user can replace
    const CONFIG = {
        SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_70fnmjj',
        TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_x0ly687',
        PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '3XHwOJkRsk69FKbrH',
    };

    const sendContactForm = async (data: ContactFormData) => {
        setIsLoading(true);
        setStatus('idle');

        try {
            // Map our form data to the template variables expected by EmailJS
            // Generally: {{from_name}}, {{from_email}}, {{message}}, etc.
            const templateParams = {
                from_name: data.name,
                from_email: data.email,
                phone: data.phone, // Ensure template has {{phone}}
                message: data.message,
                services: data.serviceStr, // {{services}}
                organization: data.orgName, // {{organization}}
                industry: data.industry, // {{industry}}
            };

            console.log("Sending email with config:", {
                service: CONFIG.SERVICE_ID,
                template: CONFIG.TEMPLATE_ID,
                keyLength: CONFIG.PUBLIC_KEY?.length
            });
            console.log("Template Params:", templateParams);

            await emailjs.send(
                CONFIG.SERVICE_ID,
                CONFIG.TEMPLATE_ID,
                templateParams,
                CONFIG.PUBLIC_KEY
            );

            console.log("Email sent successfully");
            setStatus('success');
            return true;
        } catch (error) {
            console.error("EmailJS Error details:", error);
            setStatus('error');
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    const sendNewsletterSignup = async (data: NewsletterFormData) => {
        // You might want a different template for newsletter, but we can reuse or use a different ID
        // For simplicity, reusing same logic but you might want split IDs
        setIsLoading(true);
        setStatus('idle');

        try {
            const templateParams = {
                from_name: 'Newsletter Subscriber',
                from_email: data.email,
                message: 'New Newsletter Subscription',
            };

            await emailjs.send(
                CONFIG.SERVICE_ID,
                CONFIG.TEMPLATE_ID, // Or a specific newsletter template ID
                templateParams,
                CONFIG.PUBLIC_KEY
            );
            setStatus('success');
            return true;
        } catch (error) {
            console.error("EmailJS Newsletter Error:", error);
            setStatus('error');
            return false;
        } finally {
            setIsLoading(false);
        }
    }

    return {
        sendContactForm,
        sendNewsletterSignup,
        isLoading,
        status,
        resetStatus: () => setStatus('idle')
    };
};
