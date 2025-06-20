import React from 'react';
import { MapPin, Phone, Navigation, ExternalLink } from 'lucide-react';

const AnimatedMap = () => {
    const locationName = "TOOTH-PICK, Dehradun, India";
    const locationQuery = encodeURIComponent(locationName);
    const latitude = 30.372233;
    const longitude = 78.096346;
    const iframeSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.3456789012345!2d${longitude - 0.001}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908d7a773deaed7%3A0xd8a7cf4ad3bda26d!2sTOOTH-PICK!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`;

    return (
        <section className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100 overflow-hidden relative ">

                {/* Full Width Map Container */}
                <div className="w-full">
                    <div className="relative group">
                        {/* Full width map container with glassmorphism */}
                        <div className="relative bg-white/80 shadow-2xl border-t border-white/50">
                            <div className="relative overflow-hidden border-8 border-blue-800">
                                <iframe
                                    src={`${iframeSrc}&noborder`}
                                    allowFullScreen
                                    loading="lazy"
                                    title="2nd Floor Tooth Pick, Dehradun Location"
                                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] border-0 pointer-events-none"
                                    style={{ filter: 'grayscale(0%)' }}
                                />
                            </div>

                            {/* Enhanced floating Google Maps button */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                                <div className="group relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-600 rounded-full blur opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${locationQuery}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-sm"
                                    >
                                        <Navigation className="w-4 h-4 animate-pulse" />
                                        <span>Open in Google Maps</span>
                                        <ExternalLink className="w-3 h-3 opacity-70" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export { AnimatedMap };