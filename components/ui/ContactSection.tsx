'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, ChevronDown, Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { countries } from '@/constants/countries';

export default function ContactSection() {
    const [isChecked, setIsChecked] = useState(false);

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

    return (
        <section className="relative w-full max-w-[1700px] mx-auto px-4 md:px-6 mb-24">

            <div className="relative rounded-[2.5rem] bg-[#02182B] overflow-hidden py-24 px-4 md:px-12">

                {/* Background Decor */}
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-electric-cyan/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto">

                    {/* Header */}
                    <div className="mb-16">
                        <h2 className="text-3xl md:text-5xl font-monument uppercase text-white mb-6 leading-tight">
                            Get in <span className="text-electric-cyan">Touch</span> with Us
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
                            We'd love to hear from you! Whether you have a question, need assistance, or are ready to start your next project, our team is here to help. Reach out today, and let's work together to create something amazing.
                        </p>
                    </div>

                    {/* Form */}
                    <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>

                        {/* Row 1 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            <div className="group relative">
                                <label className="text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2 block">Full Name *</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:outline-none focus:border-electric-cyan transition-colors placeholder:text-gray-600"
                                />
                            </div>
                            <div className="group relative">
                                <label className="text-xs font-bold text-electric-cyan uppercase tracking-widest mb-2 block">Email *</label>
                                <input
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
                                    type="text"
                                    placeholder="Required Services"
                                    className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:outline-none focus:border-electric-cyan transition-colors placeholder:text-gray-600"
                                />
                            </div>
                            <div className="group relative">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-electric-cyan transition-colors">Organization name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Your Organization Name"
                                    className="w-full bg-transparent border-b border-gray-700 text-white pb-3 focus:outline-none focus:border-electric-cyan transition-colors placeholder:text-gray-600"
                                />
                            </div>
                            <div className="group relative">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block group-focus-within:text-electric-cyan transition-colors">Industry</label>
                                <input
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

                            <button className="group bg-[#031d34] border border-electric-cyan/30 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-electric-cyan hover:text-black hover:border-electric-cyan transition-all duration-300 flex items-center gap-2">
                                Send us a message!
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
}
