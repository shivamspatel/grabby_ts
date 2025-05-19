"use client";

import { Button, Input, Label } from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone, BiChevronDown } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import { db } from "../../../../firebaseConfig";
import { collection, addDoc, getDocs } from "firebase/firestore";
import emailjs from "@emailjs/browser";

export function Contact11() {
  type ContactForm = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    storeName: string;
    deliveryOptions: string[];
  };

  // Form state
  const [formData, setFormData] = useState<ContactForm>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    storeName: "",
    deliveryOptions: [],
  });

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Validation state
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    storeName: "",
  });

  // Test Firestore connection on component mount
  useEffect(() => {
    const testFirestoreConnection = async () => {
      try {
        
        // Get all documents from the contacts collection
        await getDocs(collection(db, "contacts"));

      } catch (error) {
        console.error("Firestore connection error:", error);
      }
    };

    testFirestoreConnection();
  }, []);

  // Form field change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    
    // Clear error when field is modified
    if (errors[id as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [id]: "" }));
    }
  };

  // Toggle delivery option
  const toggleOption = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      deliveryOptions: prev.deliveryOptions.includes(option)
        ? prev.deliveryOptions.filter((item) => item !== option)
        : [...prev.deliveryOptions, option],
    }));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Validate form fields
  const validateForm = () => {
    const newErrors = {
      firstName: formData.firstName ? "" : "First name is required",
      lastName: formData.lastName ? "" : "Last name is required",
      email: formData.email 
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) 
          ? "" 
          : "Invalid email format"
        : "Email is required",
      phone: formData.phone 
        ? /^\(?([0-9]{3})\)?[-.●\s]?([0-9]{3})[-.●\s]?([0-9]{4})$/.test(formData.phone)
          ? "" 
          : "Invalid phone format (must be 10 digits)"
        : "Phone number is required",
      storeName: formData.storeName ? "" : "Store name is required",
    };

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error);
  };

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    try {
      console.log("Submitting form data:", formData); // Log form data
      
      // Add form data to Firestore
      const docRef = await addDoc(collection(db, "contacts"), formData);
      console.log("Document written with ID: ", docRef.id); // Log Firestore response

      // Send email using EmailJS
      const emailParams = {
        to_email: "accounts@grabbl.io", 
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        storeName: formData.storeName,
        deliveryOptions: formData.deliveryOptions.join(", "),
        documentId: docRef.id, // Include the Firestore document ID in the email
      };

      const emailResponse = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        emailParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      console.log("Email sent successfully:", emailResponse);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        storeName: "",
        deliveryOptions: [],
      });
      setFormStatus({
        type: "success",
        message: "Form submitted successfully! We'll be in touch soon.",
      });
    } catch (error) {
      console.error("Error details:", {
        name: error instanceof Error ? error.name : "Unknown",
        message: error instanceof Error ? error.message : "Unknown error",
        stack: error instanceof Error ? error.stack : undefined,
      });

      setFormStatus({
        type: "error",
        message: `Failed to submit the form: ${
          error instanceof Error ? error.message : "Unknown error"
        }`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-[5%] py-16 md:py-24 lg:py-28 bg--100">
      <div className="container">
        <div className="rb-12 mb-8 max-w-lg md:mb-12">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-6xl">
            Partner with Grabbl
          </h2>
          <p className="md:text-md">We'd love to hear from you!</p>
        </div>
        
        {/* Form status messages */}
        {formStatus.message && (
          <div className={`mb-6 p-4 rounded ${formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {formStatus.message}
          </div>
        )}
        
        <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit} noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-center">
            <div>
              <Label htmlFor="firstName" className="mb-2">
                First Name <span className="text-red-600">*</span>
              </Label>
              <Input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "border-red-500" : ""}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <Label htmlFor="lastName" className="mb-2">
                Last Name <span className="text-red-600">*</span>
              </Label>
              <Input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "border-red-500" : ""}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-center">
            <div>
              <Label htmlFor="email" className="mb-2">
                Email <span className="text-red-600">*</span>
              </Label>
              <Input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "border-red-500" : ""}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="phone" className="mb-2">
                Phone <span className="text-red-600">*</span>
              </Label>
              <Input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? "border-red-500" : ""}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-center">
            <div>
              <Label htmlFor="storeName" className="mb-2">
                Store Name <span className="text-red-600">*</span>
              </Label>
              <Input
                type="text"
                id="storeName"
                value={formData.storeName}
                onChange={handleChange}
                className={errors.storeName ? "border-red-500" : ""}
              />
              {errors.storeName && (
                <p className="text-red-500 text-sm mt-1">{errors.storeName}</p>
              )}
            </div>
            <div>
              <Label htmlFor="deliveryOptions" className="mb-2">
                How do you deliver?
              </Label>
              <div className="relative" ref={dropdownRef}>
                <div
                  className="border border-black p-2 w-full cursor-pointer flex items-center justify-between"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  role="button"
                  tabIndex={0}
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                >
                  <span
                    className={`${
                      formData.deliveryOptions.length === 0
                        ? "text-gray-400"
                        : "text-black"
                    }`}
                  >
                    {formData.deliveryOptions.length > 0
                      ? formData.deliveryOptions.join(", ")
                      : "Select options"}
                  </span>
                  <BiChevronDown className="text-lg" />
                </div>
                {isDropdownOpen && (
                  <div 
                    className="absolute left-0 top-full mt-2 w-full bg-white border border-black rounded-md shadow-lg z-10"
                    role="listbox"
                  >
                    {["None", "UberEats", "DoorDash", "In-Store"].map((option) => (
                      <div
                        key={option}
                        className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                        onClick={() => toggleOption(option)}
                        role="option"
                        aria-selected={formData.deliveryOptions.includes(option)}
                      >
                        <span
                          className={`w-4 h-4 border-2 border-black rounded-full ${
                            formData.deliveryOptions.includes(option)
                              ? "bg-[#D40C0C]"
                              : "bg-white"
                          }`}
                        ></span>
                        {option}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div>
            <Button
              type="submit"
              className="bg-[#D40C0C] text-white hover:bg-gray-900 border-none"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>

        {/* Contact Information Section */}
        <div className="mt-8 mb-auto grid gap-x-4 gap-y-10 py-2 sm:grid-cols-3">
          <div>
            <div className="mb-3 md:mb-4">
              <BiEnvelope className="size-8" />
            </div>
            <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
              Email
            </h3>
            <p className="mb-2">Reach us at:</p>
            <a className="underline" href="mailto:support@grabbl.com">
              support@grabbl.com
            </a>
          </div>
          <div>
            <div className="mb-3 md:mb-4">
              <BiPhone className="size-8" />
            </div>
            <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
              Phone
            </h3>
            <p className="mb-2">Call us at:</p>
            <a className="underline" href="tel:+19206292941">
              +1 (920) 629-2941
            </a>
          </div>
          <div>
            <div className="mb-3 md:mb-4">
              <BiMap className="size-8" />
            </div>
            <h3 className="mb-2 text-md leading-[1.4] font-bold md:text-xl">
              Office
            </h3>
            <p className="mb-2">1370 Hazelwood Dr #214</p>
            <a
              className="underline"
              href="https://www.google.com/maps?q=1370+Hazelwood+Dr+%23214,+Smyrna+TN+37167"
              target="_blank"
              rel="noopener noreferrer"
            >
              Smyrna TN 37167
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}