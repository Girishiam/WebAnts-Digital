'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, Search, Calendar, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { countries } from '@/constants/countries';
import { companyDetails } from '@/data/company';
import { useEmail } from '@/hooks/use-email';

export default function ContactSection() {
    const [isChecked, setIsChecked] = useState(false);
    const { sendContactForm, isLoading, status, resetStatus } = useEmail();

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        services: '',
        organization: '',
        industry: '',
        message: ''
    });

    // Default to USA or first in list
    const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === 'US') || countries[0]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const searchInputRef = useRef<HTMLInputElement>(null);

    // Filter countries based on search
    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.dial_code.includes(searchQuery) ||
        country.code.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle outside click to close dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Focus search input when dropdown opens
    useEffect(() => {
        if (isDropdownOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isDropdownOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const success = await sendContactForm({
            name: formData.name,
            email: formData.email,
            phone: `${selectedCountry.dial_code} ${formData.phone}`,
            message: formData.message,
            serviceStr: formData.services,
            orgName: formData.organization,
            industry: formData.industry
        });

        if (success) {
            setFormData({
                name: '',
                email: '',
                phone: '',
                services: '',
                organization: '',
                industry: '',
                message: ''
            });
            // Removed auto-reset to show success screen persistently
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24">

            <div className="relative rounded-[2.5rem] bg-[#02182B] overflow-hidden py-24 px-4 md:px-12 min-h-[800px] flex items-center">

                {/* Background Decor */}
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-cyan/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto w-full">

                    <AnimatePresence mode="wait">
                        {status === 'success' ? (
                            <motion.div
                                key="success-view"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5 }}
                                className="flex flex-col items-center justify-center text-center py-20"
                            >
                                <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                                    <Check className="w-12 h-12 text-green-500" />
                                </div>
                                <h3 className="text-4xl md:text-6xl font-monument uppercase text-white mb-6">
                                    Message <span className="text-electric-cyan">Sent!</span>
                                </h3>
                                <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
                                    Thank you for reaching out to WebAnts Digital. We have received your inquiry and will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={resetStatus}
                                    className="px-10 py-4 rounded-full border border-gray-700 text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    Send Another Message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form-view"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Header */}
                                <div className="mb-16">
                                    <h2 className="text-3xl md:text-5xl font-monument uppercase text-white mb-6 leading-tight">
                                        Get in <span className="text-electric-cyan">Touch</span> with Us
                                    </h2>
                                    <p className="text-gray-400 text-lg leading-relaxed max-w-3xl mb-8">
                                        We'd love to hear from you! Whether you have a question, need assistance, or are ready to start your next project, our team is here to help. Reach out today, and let's work together to create something amazing.
                                    </p>

                                    {/* Strategy Call CTA */}
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <a
                                            href={companyDetails.contact.calendlyUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-electric-cyan to-ants-blue rounded-full text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity shadow-lg shadow-electric-cyan/25"
                                        >
                                            <Calendar className="w-5 h-5" />
                                            <span>Book a Free Strategy Call</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Form */}
                                <form className="space-y-12" onSubmit={handleSubmit}>

                                    {/* Row 1 */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                                        <div className="group relative">
                                            <label className="text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2 block">Full Name *</label>
                                            <input
                                                required
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:outline-none focus:border-electric-cyan transition-colors placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div className="group relative">
                                            <label className="text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2 block">Email *</label>
                                            <input
                                                required
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                type="email"
                                                placeholder="johnexample@abc.com"
                                                className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:outline-none focus:border-electric-cyan transition-colors placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div className="group relative">
                                            <label className="text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2 block">Phone Number *</label>
                                            <div className="flex gap-4">
                                                <div className="relative" ref={dropdownRef}>
                                                    <button
                                                        type="button"
                                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                        className="flex items-center gap-2 text-gray-400 border-b border-gray-700 pb-3 hover:text-white transition-colors min-w-[80px]"
                                                    >
                                                        <img
                                                            src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
                                                            srcSet={`https://flagcdn.com/w80/${selectedCountry.code.toLowerCase()}.png 2x`}
                                                            alt={selectedCountry.name}
                                                            className="w-6 h-auto object-cover rounded-sm"
                                                        />
                                                        <span className="text-base font-medium">{selectedCountry.dial_code}</span>
                                                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                                    </button>

                                                    <AnimatePresence>
                                                        {isDropdownOpen && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: 10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: 10 }}
                                                                className="absolute top-full left-0 mt-2 bg-[#031d34] border border-gray-700 rounded-lg shadow-xl z-50 w-64 max-h-64 overflow-hidden flex flex-col"
                                                            >
                                                                {/* Search Input */}
                                                                <div className="p-2 border-b border-gray-700 sticky top-0 bg-[#031d34] z-10">
                                                                    <div className="relative">
                                                                        <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                                                                        <input
                                                                            ref={searchInputRef}
                                                                            type="text"
                                                                            placeholder="Search..."
                                                                            value={searchQuery}
                                                                            onChange={(e) => setSearchQuery(e.target.value)}
                                                                            className="w-full bg-gray-900/50 text-white text-sm rounded-md py-1.5 pl-8 pr-2 focus:outline-none focus:ring-1 focus:ring-electric-cyan"
                                                                        />
                                                                    </div>
                                                                </div>

                                                                {/* Country List */}
                                                                <div className="overflow-y-auto flex-1 scrollbar-hide">
                                                                    {filteredCountries.length > 0 ? (
                                                                        filteredCountries.map((country) => (
                                                                            <button
                                                                                key={country.code}
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    setSelectedCountry(country);
                                                                                    setIsDropdownOpen(false);
                                                                                    setSearchQuery('');
                                                                                }}
                                                                                className="w-full flex items-center gap-3 px-4 py-2 hover:bg-electric-cyan/10 hover:text-electric-cyan text-gray-300 text-sm transition-colors text-left"
                                                                            >
                                                                                <img
                                                                                    src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                                                                                    srcSet={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png 2x`}
                                                                                    alt={country.name}
                                                                                    className="w-5 h-auto object-cover rounded-sm shrink-0"
                                                                                />
                                                                                <span className="flex-1 truncate">{country.name}</span>
                                                                                <span className="text-gray-500 text-xs">{country.dial_code}</span>
                                                                            </button>
                                                                        ))
                                                                    ) : (
                                                                        <div className="px-4 py-3 text-gray-500 text-sm text-center">No results found</div>
                                                                    )}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                                <input
                                                    required
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    type="tel"
                                                    placeholder="555 123 4567"
                                                    className="flex-1 bg-transparent border-b border-gray-700 text-white pb-3 focus:outline-none focus:border-electric-cyan transition-colors placeholder:text-gray-600"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2 */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                                        <div className="group relative">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-electric-cyan transition-colors">Services you need</label>
                                            <input
                                                name="services"
                                                value={formData.services}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Required Services"
                                                className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:outline-none focus:border-electric-cyan transition-colors placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div className="group relative">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-electric-cyan transition-colors">Organization name</label>
                                            <input
                                                name="organization"
                                                value={formData.organization}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Enter Your Organization Name"
                                                className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:outline-none focus:border-electric-cyan transition-colors placeholder:text-gray-600"
                                            />
                                        </div>
                                        <div className="group relative">
                                            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-electric-cyan transition-colors">Industry</label>
                                            <input
                                                name="industry"
                                                value={formData.industry}
                                                onChange={handleChange}
                                                type="text"
                                                placeholder="Enter Your Industry Name"
                                                className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:outline-none focus:border-electric-cyan transition-colors placeholder:text-gray-600"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="group relative">
                                        <label className="text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2 block">Message *</label>
                                        <textarea
                                            required
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Tell us what you're looking for"
                                            rows={1}
                                            className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:outline-none focus:border-electric-cyan transition-colors placeholder:text-gray-600 resize-none min-h-[40px]"
                                        />
                                    </div>

                                    {/* Footer & Submit */}
                                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-4">

                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <div
                                                className={`w-5 h-5 border rounded transition-colors flex items-center justify-center ${isChecked ? 'bg-electric-cyan border-electric-cyan' : 'border-gray-600 group-hover:border-electric-cyan'
                                                    }`}
                                            >
                                                {isChecked && <Check className="w-3 h-3 text-black" />}
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={isChecked}
                                                    onChange={() => setIsChecked(!isChecked)}
                                                />
                                            </div>
                                            <span className="text-gray-400 text-sm group-hover:text-white transition-colors">This Project requires an NDA</span>
                                        </label>

                                        <button
                                            disabled={isLoading}
                                            className="group bg-[#031d34] border border-electric-cyan/30 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-electric-cyan hover:text-black hover:border-electric-cyan transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? (
                                                <>
                                                    Sending...
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                </>
                                            ) : (
                                                <>
                                                    Send us a message!
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>

                                    </div>

                                    {/* Error Message */}
                                    {status === 'error' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center"
                                        >
                                            Something went wrong. Please try again or email us directly at {companyDetails.contact.email}.
                                        </motion.div>
                                    )}

                                </form>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
