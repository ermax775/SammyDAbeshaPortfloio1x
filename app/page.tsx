'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Refs for sections
    const homeRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);
    const experienceRef = useRef<HTMLElement>(null);
    const testimonialsRef = useRef<HTMLElement>(null);
    const contactRef = useRef<HTMLElement>(null);

    const doctorImages = ['/images/doctor-blue-scrubs.jpg', '/images/doctor-white-coat.jpg'];

    useEffect(() => {
        setIsLoaded(true);

        // Auto-flip images every 4 seconds
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % doctorImages.length);
        }, 4000);

        return () => clearInterval(imageInterval);
    }, []);

    // Navigation function
    const scrollToSection = (section: string) => {
        setActiveSection(section);

        const refs = {
            home: homeRef,
            about: aboutRef,
            experience: experienceRef,
            testimonials: testimonialsRef,
            contact: contactRef,
        };

        const targetRef = refs[section as keyof typeof refs];
        if (targetRef?.current) {
            targetRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const experiences = [
        {
            title: 'Senior Medical Officer',
            hospital: 'Black Lion Hospital',
            period: '2022 - Present',
            location: 'Addis Ababa, Ethiopia',
            current: true,
        },
        {
            title: 'Emergency Medicine Physician',
            hospital: "St. Paul's Hospital Millennium Medical College",
            period: '2021 - Present',
            location: 'Addis Ababa, Ethiopia',
            current: true,
        },
        {
            title: 'General Practitioner',
            hospital: 'Yekatit 12 Hospital Medical College',
            period: '2020 - Present',
            location: 'Addis Ababa, Ethiopia',
            current: true,
        },
        {
            title: 'Resident Physician',
            hospital: 'Tikur Anbessa Specialized Hospital',
            period: '2019 - 2021',
            location: 'Addis Ababa, Ethiopia',
            current: false,
        },
        {
            title: 'Medical Intern',
            hospital: 'Zewditu Memorial Hospital',
            period: '2018 - 2019',
            location: 'Addis Ababa, Ethiopia',
            current: false,
        },
    ];

    const testimonials = [
        {
            name: 'Dr. Meron Tadesse',
            role: 'Chief Medical Officer, Black Lion Hospital',
            text: 'Dr. Samuel is an exceptional physician with remarkable diagnostic skills and compassionate patient care. His dedication to medical excellence is truly inspiring.',
        },
        {
            name: 'Almaz Bekele',
            role: 'Patient',
            text: "Dr. Samuel saved my life during a critical emergency. His quick thinking and professional expertise gave me a second chance. I'm forever grateful.",
        },
        {
            name: 'Dr. Dawit Hailu',
            role: "Colleague, St. Paul's Hospital",
            text: 'Working alongside Dr. Samuel has been a privilege. His commitment to continuous learning and patient advocacy sets him apart as a remarkable physician.',
        },
    ];

    const volunteerWork = [
        'Medical Mission - Rural Oromia Region (2023)',
        'COVID-19 Vaccination Drive Coordinator (2021-2022)',
        'Free Medical Camp - Mercato Community (2020-2023)',
        'Medical Education Volunteer - Addis Ababa University (2019-Present)',
    ];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-x-hidden"
            data-oid="7gyp0pk"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
                data-oid="-kbh-7."
            >
                <div className="max-w-7xl mx-auto px-6 py-4" data-oid="94-t4d4">
                    <div className="flex justify-between items-center" data-oid="_tb9s0c">
                        <div
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                            data-oid="13-vi6d"
                        >
                            Dr. Samuel Dejene Abesha
                        </div>
                        <div className="hidden md:flex space-x-8" data-oid="o_auh72">
                            {['Home', 'About', 'Experience', 'Testimonials', 'Contact'].map(
                                (item) => (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className={`hover:text-blue-400 transition-colors duration-300 relative group ${
                                            activeSection === item.toLowerCase()
                                                ? 'text-blue-400'
                                                : ''
                                        }`}
                                        data-oid="rore:.p"
                                    >
                                        {item}
                                        <span
                                            className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                                                activeSection === item.toLowerCase()
                                                    ? 'w-full'
                                                    : 'w-0 group-hover:w-full'
                                            }`}
                                            data-oid="nebalnr"
                                        ></span>
                                    </button>
                                ),
                            )}
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white"
                            data-oid="prgvep_"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                ref={homeRef}
                className="min-h-screen flex items-center justify-center relative pt-20"
                data-oid="tw1hh3."
            >
                <div className="absolute inset-0 overflow-hidden" data-oid="pkj0_vh">
                    <div
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
                        data-oid="xf6em71"
                    ></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"
                        data-oid="cm_i80a"
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce"
                        data-oid="5idpsq2"
                    ></div>
                </div>

                <div
                    className={`text-center z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="vyux:::"
                >
                    <div className="mb-8 relative" data-oid="0n5nc1n">
                        {/* Animated Image Flipper */}
                        <div className="relative w-64 h-64 mx-auto" data-oid="j-iovmt">
                            {doctorImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-1000 transform ${
                                        index === currentImageIndex
                                            ? 'opacity-100 scale-100 rotate-0'
                                            : 'opacity-0 scale-95 rotate-12'
                                    }`}
                                    data-oid="iykpxui"
                                >
                                    <div className="relative w-full h-full" data-oid="vaccyzx">
                                        <Image
                                            src={image}
                                            alt={`Dr. Samuel Dejene Abesha - Professional Photo ${index + 1}`}
                                            fill
                                            className="object-cover rounded-full shadow-2xl border-4 border-blue-400"
                                            style={{
                                                borderImage:
                                                    'linear-gradient(135deg, #60a5fa, #67e8f9) 1',
                                            }}
                                            priority={index === 0}
                                            data-oid="583--wf"
                                        />

                                        {/* Gradient overlay for better contrast */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-full"
                                            data-oid="it7v5a5"
                                        ></div>
                                    </div>
                                </div>
                            ))}

                            {/* Floating medical icons */}
                            <div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-2xl animate-bounce shadow-lg"
                                data-oid="r360mkf"
                            >
                                🩺
                            </div>
                            <div
                                className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-lg animate-pulse shadow-lg"
                                data-oid=":afh-84"
                            >
                                ⚕️
                            </div>

                            {/* Image flip indicators */}
                            <div
                                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
                                data-oid=".gcia61"
                            >
                                {doctorImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentImageIndex
                                                ? 'bg-blue-400 scale-125'
                                                : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                        data-oid="242olpb"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <h1
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse"
                        data-oid="a.::.d_"
                    >
                        Dr. Samuel Dejene Abesha
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-200 mb-4" data-oid="gyu-t3h">
                        Medical Doctor & Healthcare Professional
                    </p>
                    <p className="text-lg text-gray-300 mb-8" data-oid="fx28eud">
                        Addis Ababa, Ethiopia • 5+ Years Experience
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="2uk.ruj"
                    >
                        <button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            data-oid="shk-z7-"
                        >
                            Download CV
                        </button>
                        <button
                            className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
                            data-oid="g_qz4yy"
                        >
                            Schedule Appointment
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section ref={aboutRef} className="py-20 px-6" data-oid="epifrps">
                <div className="max-w-6xl mx-auto" data-oid="8q68fvh">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="q_gsxup"
                    >
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="xazmn3b">
                        <div data-oid="-1wlpbh">
                            <p
                                className="text-lg text-gray-300 mb-6 leading-relaxed"
                                data-oid="vooad4a"
                            >
                                I am a dedicated medical professional with over 5 years of
                                experience serving the healthcare needs of Addis Ababa and
                                surrounding communities. My passion lies in providing compassionate,
                                evidence-based medical care while continuously advancing my
                                knowledge in modern medical practices.
                            </p>
                            <p
                                className="text-lg text-gray-300 mb-6 leading-relaxed"
                                data-oid="gw0g2_j"
                            >
                                Currently practicing at three prestigious medical institutions in
                                Addis Ababa, I specialize in emergency medicine, general practice,
                                and community healthcare. My commitment extends beyond clinical
                                practice to include extensive volunteer work and medical education.
                            </p>
                            <div className="grid grid-cols-2 gap-4" data-oid="sl:g9r8">
                                <div
                                    className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                                    data-oid="tiotuoo"
                                >
                                    <div
                                        className="text-3xl font-bold text-blue-400"
                                        data-oid="_h_b:wp"
                                    >
                                        5+
                                    </div>
                                    <div className="text-sm text-gray-300" data-oid="sycpy7v">
                                        Years Experience
                                    </div>
                                </div>
                                <div
                                    className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                                    data-oid=".oc2uxy"
                                >
                                    <div
                                        className="text-3xl font-bold text-cyan-400"
                                        data-oid="gugq_06"
                                    >
                                        3
                                    </div>
                                    <div className="text-sm text-gray-300" data-oid=":udx300">
                                        Current Positions
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative" data-oid="jprv:h-">
                            {/* Secondary image display with hover effect */}
                            <div
                                className="relative w-full h-96 rounded-2xl overflow-hidden group"
                                data-oid="5ggd1oi"
                            >
                                <Image
                                    src={doctorImages[1 - currentImageIndex]}
                                    alt="Dr. Samuel Dejene Abesha - About Section"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    data-oid="agdz_g8"
                                />

                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-500"
                                    data-oid="gfo6u:9"
                                ></div>

                                {/* Floating elements */}
                                <div
                                    className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl animate-pulse"
                                    data-oid="7bmjmar"
                                >
                                    🏥
                                </div>
                            </div>
                            <div
                                className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-3xl animate-bounce shadow-xl"
                                data-oid="v9xhomj"
                            >
                                ⚕️
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section ref={experienceRef} className="py-20 px-6 bg-black/20" data-oid="2lsiq-a">
                <div className="max-w-6xl mx-auto" data-oid="_:q0w2o">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="s65ixyi"
                    >
                        Professional Experience
                    </h2>
                    <div className="space-y-8" data-oid="_7u7gef">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 ${exp.current ? 'border-l-4 border-green-400' : ''}`}
                                data-oid="actohek"
                            >
                                <div
                                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                                    data-oid="bqed4mg"
                                >
                                    <div data-oid="wuksd2.">
                                        <h3
                                            className="text-xl font-bold text-blue-400"
                                            data-oid="yja3484"
                                        >
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg text-white" data-oid="feb4ygu">
                                            {exp.hospital}
                                        </p>
                                    </div>
                                    <div className="text-right" data-oid="gml.3y6">
                                        <p className="text-gray-300" data-oid="fn_o.9d">
                                            {exp.period}
                                        </p>
                                        <p className="text-sm text-gray-400" data-oid="lwa-ax8">
                                            {exp.location}
                                        </p>
                                        {exp.current && (
                                            <span
                                                className="inline-block bg-green-500 text-xs px-2 py-1 rounded-full mt-1"
                                                data-oid="te43j8w"
                                            >
                                                Current
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Volunteer Work */}
            <section className="py-20 px-6" data-oid="i_o_eri">
                <div className="max-w-6xl mx-auto" data-oid="774mkhu">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="het72m4"
                    >
                        Volunteer Services
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6" data-oid="l-n7903">
                        {volunteerWork.map((work, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-xl backdrop-blur-sm hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
                                data-oid="ehmequk"
                            >
                                <div className="flex items-center" data-oid="s5asv1o">
                                    <div
                                        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl mr-4"
                                        data-oid="km:2hnh"
                                    >
                                        🤝
                                    </div>
                                    <p className="text-white" data-oid="g.ps3i0">
                                        {work}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section ref={testimonialsRef} className="py-20 px-6 bg-black/20" data-oid="i133-tx">
                <div className="max-w-6xl mx-auto" data-oid="n4wj7dr">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="yc-_p:r"
                    >
                        Testimonials
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8" data-oid="05o:nbc">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
                                data-oid="zpc1kde"
                            >
                                <div className="text-4xl text-blue-400 mb-4" data-oid="csuqfgk">
                                    "
                                </div>
                                <p className="text-gray-300 mb-6 italic" data-oid="mm7n5gh">
                                    {testimonial.text}
                                </p>
                                <div data-oid="w33kynk">
                                    <p className="font-bold text-white" data-oid="zok69-m">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-blue-400" data-oid="z4w.ddq">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact & Appointment Section */}
            <section ref={contactRef} className="py-20 px-6" data-oid="2vog77u">
                <div className="max-w-4xl mx-auto text-center" data-oid="yrirnse">
                    <h2
                        className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid=".8m3o4c"
                    >
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-300 mb-12" data-oid="o54.702">
                        Ready to discuss your healthcare needs or explore professional
                        opportunities?
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12" data-oid="zq0lue5">
                        <div
                            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-xl backdrop-blur-sm"
                            data-oid="eqg_72m"
                        >
                            <div className="text-4xl mb-4" data-oid="z2lopes">
                                📋
                            </div>
                            <h3 className="text-xl font-bold mb-4" data-oid="n54k6ax">
                                Medical Consultation
                            </h3>
                            <p className="text-gray-300 mb-6" data-oid="k2cbn2y">
                                Schedule an appointment for professional medical consultation and
                                healthcare services.
                            </p>
                            <button
                                className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
                                data-oid="za7pzrm"
                            >
                                Book Consultation
                            </button>
                        </div>

                        <div
                            className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-xl backdrop-blur-sm"
                            data-oid="in.1-0t"
                        >
                            <div className="text-4xl mb-4" data-oid="ypicm:z">
                                💼
                            </div>
                            <h3 className="text-xl font-bold mb-4" data-oid="p2110ra">
                                Professional Discussion
                            </h3>
                            <p className="text-gray-300 mb-6" data-oid="ues9i37">
                                Connect for professional opportunities, collaborations, or career
                                discussions.
                            </p>
                            <button
                                className="px-6 py-3 bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors duration-300"
                                data-oid="r3aqopb"
                            >
                                Schedule Meeting
                            </button>
                        </div>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="5fux48y"
                    >
                        <button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            data-oid="wy1f7x6"
                        >
                            📄 Download Resume
                        </button>
                        <button
                            className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
                            data-oid="if.x:sb"
                        >
                            📧 Send Email
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-black/40 border-t border-white/10" data-oid="c5furdl">
                <div className="max-w-6xl mx-auto text-center" data-oid="gg806hv">
                    <div
                        className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="7kydit_"
                    >
                        Dr. Samuel Dejene Abesha
                    </div>
                    <p className="text-gray-400 mb-6" data-oid=":stgiue">
                        Dedicated to Excellence in Healthcare • Addis Ababa, Ethiopia
                    </p>
                    <div className="flex justify-center space-x-6" data-oid=".e:wfuw">
                        <div
                            className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                            data-oid="edsrwwr"
                        >
                            📧
                        </div>
                        <div
                            className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer"
                            data-oid="ieb95dp"
                        >
                            📱
                        </div>
                        <div
                            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer"
                            data-oid="o9:awg-"
                        >
                            💼
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-8" data-oid="2195p-.">
                        ErMax7 © 2025 Dr. Samuel Dejene Abesha. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
