import React, { useState, useRef } from 'react';
import { Send } from 'lucide-react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const JobOpportunities: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    yearOfBirth: '',
    yeshiva: '',
    shabbatBeitMidrash: '',
    canKnipSephardic: false,
    canKnipChabad: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Validate phone or email is provided
    if (!formData.phone && !formData.email) {
      Swal.fire({
        title: "Missing Information",
        text: "Please provide either a phone number or email address",
        icon: "warning"
      });
      return;
    }

    // Validate phone if provided
    if (formData.phone && formData.phone.trim().length === 0) {
      Swal.fire({
        title: "שגיאה",
        text: "אנא הזן מספר טלפון תקין",
        icon: "warning"
      });
      return;
    }

    // Validate email if provided
    if (formData.email && formData.email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        Swal.fire({
          title: "שגיאה",
          text: "אנא הזן כתובת אימייל תקינה",
          icon: "warning"
        });
        return;
      }
    }

    if (!formRef.current) return;

    try {
      const result = await emailjs.sendForm(
        'service_mf07ocu', // Your EmailJS service ID
        'template_cmgpcln', // Your EmailJS template ID
        formRef.current,
        {
          publicKey: 'NdweqLjXgq4KFdlno', // Your EmailJS public key
        }
      );

      if (result.status === 200) {
        setFormData({
          name: '',
          address: '',
          phone: '',
          email: '',
          yearOfBirth: '',
          yeshiva: '',
          shabbatBeitMidrash: '',
          canKnipSephardic: false,
          canKnipChabad: false
        });
        
        Swal.fire({
          title: "Success!",
          text: "Your application has been submitted successfully!",
          icon: "success"
        });
      }
    } catch (error) {
      console.error('Failed to send application:', error);
      Swal.fire({
        title: "Error!",
        text: "There was a problem submitting your application. Please try again.",
        icon: "error"
      });
    }
  };

  return (
    <section id="job-opportunities" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Job Opportunity</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Tzitzis Tying Specialist</h3>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We are looking for skilled individuals to tie kosher tzitzis, specifically for Chabad and Sephardic styles (chulyoth).
          </p>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg mt-4" dir="rtl">
            אנחנו מחפשים אנשים יר"ש לקשור ציצית כשרות, במיוחד חוליות חב"ד וספרד. זו הזדמנות מצוינת עבור אלה עם ניסיון ומסירות למצווה.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="font-serif text-2xl font-bold text-navy mb-6 text-center" dir="rtl">טופס</h3>
          
          <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium required-field" dir="rtl">שם:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                required
                dir="rtl"
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block mb-2 text-sm font-medium" dir="rtl">כתובת:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                dir="rtl"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium or-field" dir="rtl">טעלעפאון:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                dir="rtl"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium or-field" dir="rtl">אימייל:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                dir="rtl"
              />
            </div>
            
            <div className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-md" dir="rtl">
              <strong>שימו לב:</strong> חובה למלא לפחות אחת: טעלעפאון או אימייל
            </div>
            
            <div>
              <label htmlFor="yearOfBirth" className="block mb-2 text-sm font-medium" dir="rtl">שנת לידה:</label>
              <input
                type="number"
                id="yearOfBirth"
                name="yearOfBirth"
                value={formData.yearOfBirth}
                onChange={handleChange}
                min="1900"
                max="2023"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                dir="rtl"
              />
            </div>
            
            <div>
              <label htmlFor="yeshiva" className="block mb-2 text-sm font-medium" dir="rtl">למדת בישיבת:</label>
              <input
                type="text"
                id="yeshiva"
                name="yeshiva"
                value={formData.yeshiva}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                dir="rtl"
              />
            </div>
            
            <div>
              <label htmlFor="shabbatBeitMidrash" className="block mb-2 text-sm font-medium" dir="rtl">ביהמ"ד שבת/יו"ט:</label>
              <input
                type="text"
                id="shabbatBeitMidrash"
                name="shabbatBeitMidrash"
                value={formData.shabbatBeitMidrash}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
                dir="rtl"
              />
            </div>
            
            <div>
              <label className="block mb-2 text-sm font-medium" dir="rtl">אפשר לך לקשור:</label>
              <div className="space-y-2" dir="rtl">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="canKnipSephardic"
                    name="canKnipSephardic"
                    checked={formData.canKnipSephardic}
                    onChange={handleChange}
                    className="h-4 w-4 text-gold focus:ring-gold"
                  />
                  <label htmlFor="canKnipSephardic" className="ml-2 text-gray-700">חוליות ספרדית</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="canKnipChabad"
                    name="canKnipChabad"
                    checked={formData.canKnipChabad}
                    onChange={handleChange}
                    className="h-4 w-4 text-gold focus:ring-gold"
                  />
                  <label htmlFor="canKnipChabad" className="ml-2 text-gray-700">חוליות חב"ד</label>
                </div>
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center bg-gold text-navy font-bold py-3 px-6 rounded-md transition-transform hover:scale-105"
            >
              Submit Application <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JobOpportunities;