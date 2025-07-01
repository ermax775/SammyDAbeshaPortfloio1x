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
            data-oid="-.xupvl"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
                data-oid="y858utj"
            >
                <div className="max-w-7xl mx-auto px-6 py-4" data-oid="-e27v.l">
                    <div className="flex justify-between items-center" data-oid="4v3fuap">
                        <div
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                            data-oid="27_6f0c"
                        >
                            Dr. Samuel Dejene Abesha
                        </div>
                        <div className="hidden md:flex space-x-8" data-oid="sd_s5wv">
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
                                        data-oid="p3.i9h1"
                                    >
                                        {item}
                                        <span
                                            className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                                                activeSection === item.toLowerCase()
                                                    ? 'w-full'
                                                    : 'w-0 group-hover:w-full'
                                            }`}
                                            data-oid="_qv5_xx"
                                        ></span>
                                    </button>
                                ),
                            )}
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white"
                            data-oid="-g9228g"
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
                data-oid="fs5vh19"
            >
                <div className="absolute inset-0 overflow-hidden" data-oid="4osxjp8">
                    <div
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
                        data-oid="nhokgm:"
                    ></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"
                        data-oid="_6e:n_x"
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce"
                        data-oid="f9_.jv."
                    ></div>
                </div>

                <div
                    className={`text-center z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="1gpt2ir"
                >
                    <div className="mb-8 relative" data-oid="h1wi97c">
                        {/* Animated Image Flipper */}
                        <div className="relative w-64 h-64 mx-auto" data-oid="s0._5z8">
                            {doctorImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-1000 transform ${
                                        index === currentImageIndex
                                            ? 'opacity-100 scale-100 rotate-0'
                                            : 'opacity-0 scale-95 rotate-12'
                                    }`}
                                    data-oid="e.sw7kt"
                                >
                                    <div className="relative w-full h-full" data-oid="yh5ymhi">
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
                                            data-oid="6r8u3c8"
                                        />

                                        {/* Gradient overlay for better contrast */}
                                        <div
                                            className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-full"
                                            data-oid="m:f3bss"
                                        ></div>
                                    </div>
                                </div>
                            ))}

                            {/* Floating medical icons */}
                            <div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-2xl animate-bounce shadow-lg"
                                data-oid="pbzn-l1"
                            >
                                🩺
                            </div>
                            <div
                                className="absolute -bottom-2 -left-2 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-lg animate-pulse shadow-lg"
                                data-oid="o78d92l"
                            >
                                ⚕️
                            </div>

                            {/* Image flip indicators */}
                            <div
                                className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2"
                                data-oid="ro858h8"
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
                                        data-oid="pjve8qp"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <h1
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse"
                        data-oid="i3qqjh8"
                    >
                        Dr. Samuel Dejene Abesha
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-200 mb-4" data-oid="xhztlgh">
                        Medical Doctor & Healthcare Professional
                    </p>
                    <p className="text-lg text-gray-300 mb-8" data-oid="9jjnyeo">
                        Addis Ababa, Ethiopia • 5+ Years Experience
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="p4xl1tn"
                    >
                        <button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            data-oid="c4yqp-g"
                        >
                            Download CV
                        </button>
                        <button
                            className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
                            data-oid="cyb3y6:"
                        >
                            Schedule Appointment
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section ref={aboutRef} className="py-20 px-6" data-oid="__6-:jb">
                <div className="max-w-6xl mx-auto" data-oid="ezl8_6s">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="gy_lkzs"
                    >
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="8axa8m2">
                        <div data-oid="60lfj88">
                            <p
                                className="text-lg text-gray-300 mb-6 leading-relaxed"
                                data-oid="fcafi08"
                            >
                                I am a dedicated medical professional with over 5 years of
                                experience serving the healthcare needs of Addis Ababa and
                                surrounding communities. My passion lies in providing compassionate,
                                evidence-based medical care while continuously advancing my
                                knowledge in modern medical practices.
                            </p>
                            <p
                                className="text-lg text-gray-300 mb-6 leading-relaxed"
                                data-oid="23:t5k:"
                            >
                                Currently practicing at three prestigious medical institutions in
                                Addis Ababa, I specialize in emergency medicine, general practice,
                                and community healthcare. My commitment extends beyond clinical
                                practice to include extensive volunteer work and medical education.
                            </p>
                            <div className="grid grid-cols-2 gap-4" data-oid="13m6_s9">
                                <div
                                    className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                                    data-oid="5ble2pg"
                                >
                                    <div
                                        className="text-3xl font-bold text-blue-400"
                                        data-oid="qhcndvv"
                                    >
                                        5+
                                    </div>
                                    <div className="text-sm text-gray-300" data-oid="-p9i78x">
                                        Years Experience
                                    </div>
                                </div>
                                <div
                                    className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                                    data-oid="5fbks4c"
                                >
                                    <div
                                        className="text-3xl font-bold text-cyan-400"
                                        data-oid="jry_:5k"
                                    >
                                        3
                                    </div>
                                    <div className="text-sm text-gray-300" data-oid="yr58cka">
                                        Current Positions
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative" data-oid="lgm73ch">
                            {/* Secondary image display with hover effect */}
                            <div
                                className="relative w-full h-96 rounded-2xl overflow-hidden group"
                                data-oid="989cj5z"
                            >
                                <Image
                                    src={doctorImages[1 - currentImageIndex]}
                                    alt="Dr. Samuel Dejene Abesha - About Section"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    data-oid="ldukat0"
                                />

                                <div
                                    className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 group-hover:from-blue-500/20 group-hover:to-cyan-500/20 transition-all duration-500"
                                    data-oid="q5wc40l"
                                ></div>

                                {/* Floating elements */}
                                <div
                                    className="absolute top-4 right-4 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl animate-pulse"
                                    data-oid="yxlff7o"
                                >
                                    🏥
                                </div>
                            </div>
                            <div
                                className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-3xl animate-bounce shadow-xl"
                                data-oid="zc7i-nw"
                            >
                                ⚕️
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section ref={experienceRef} className="py-20 px-6 bg-black/20" data-oid="o--9nc5">
                <div className="max-w-6xl mx-auto" data-oid="c.xutqt">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="l:remu8"
                    >
                        Professional Experience
                    </h2>
                    <div className="space-y-8" data-oid="tm6vucc">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 ${exp.current ? 'border-l-4 border-green-400' : ''}`}
                                data-oid="wf8k85u"
                            >
                                <div
                                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                                    data-oid="g:-2h19"
                                >
                                    <div data-oid="gkf1958">
                                        <h3
                                            className="text-xl font-bold text-blue-400"
                                            data-oid="fmoljyt"
                                        >
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg text-white" data-oid="ang8cvl">
                                            {exp.hospital}
                                        </p>
                                    </div>
                                    <div className="text-right" data-oid="eovkhn3">
                                        <p className="text-gray-300" data-oid="o6ss-3u">
                                            {exp.period}
                                        </p>
                                        <p className="text-sm text-gray-400" data-oid="5k:d4qc">
                                            {exp.location}
                                        </p>
                                        {exp.current && (
                                            <span
                                                className="inline-block bg-green-500 text-xs px-2 py-1 rounded-full mt-1"
                                                data-oid="379j9o_"
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
            <section className="py-20 px-6" data-oid="_s-q:w7">
                <div className="max-w-6xl mx-auto" data-oid="8qubxw-">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="tvvmlov"
                    >
                        Volunteer Services
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6" data-oid="7iwfu19">
                        {volunteerWork.map((work, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-xl backdrop-blur-sm hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
                                data-oid=":8jwi9i"
                            >
                                <div className="flex items-center" data-oid="kqcn.xd">
                                    <div
                                        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl mr-4"
                                        data-oid="re0bnft"
                                    >
                                        🤝
                                    </div>
                                    <p className="text-white" data-oid="5i09uar">
                                        {work}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section ref={testimonialsRef} className="py-20 px-6 bg-black/20" data-oid="zd.2v96">
                <div className="max-w-6xl mx-auto" data-oid="jb_ml1r">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="sny2odl"
                    >
                        Testimonials
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8" data-oid="y80u_tn">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
                                data-oid="ilsyaz5"
                            >
                                <div className="text-4xl text-blue-400 mb-4" data-oid="18v:wij">
                                    "
                                </div>
                                <p className="text-gray-300 mb-6 italic" data-oid="e2idmxj">
                                    {testimonial.text}
                                </p>
                                <div data-oid="c49rzpa">
                                    <p className="font-bold text-white" data-oid="l6fq:4f">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-blue-400" data-oid="0487lzs">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact & Appointment Section */}
            <section ref={contactRef} className="py-20 px-6" data-oid=":gfmh7_">
                <div className="max-w-4xl mx-auto text-center" data-oid="y75e-ee">
                    <h2
                        className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="w0gug7_"
                    >
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-300 mb-12" data-oid="pw.pn_q">
                        Ready to discuss your healthcare needs or explore professional
                        opportunities?
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12" data-oid="_f1:bhx">
                        <div
                            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-xl backdrop-blur-sm"
                            data-oid="dq0z03o"
                        >
                            <div className="text-4xl mb-4" data-oid="4.gn00l">
                                📋
                            </div>
                            <h3 className="text-xl font-bold mb-4" data-oid="piuzzcr">
                                Medical Consultation
                            </h3>
                            <p className="text-gray-300 mb-6" data-oid="j:7y7hc">
                                Schedule an appointment for professional medical consultation and
                                healthcare services.
                            </p>
                            <button
                                className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
                                data-oid="3uyetj0"
                            >
                                Book Consultation
                            </button>
                        </div>

                        <div
                            className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-xl backdrop-blur-sm"
                            data-oid="qxrhps7"
                        >
                            <div className="text-4xl mb-4" data-oid="4lnvy3b">
                                💼
                            </div>
                            <h3 className="text-xl font-bold mb-4" data-oid="te5hs25">
                                Professional Discussion
                            </h3>
                            <p className="text-gray-300 mb-6" data-oid="fqnjxf_">
                                Connect for professional opportunities, collaborations, or career
                                discussions.
                            </p>
                            <button
                                className="px-6 py-3 bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors duration-300"
                                data-oid=".mxoqbq"
                            >
                                Schedule Meeting
                            </button>
                        </div>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="h.qzkbu"
                    >
                        <button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            data-oid="w_g.yr8"
                        >
                            📄 Download Resume
                        </button>
                        <button
                            className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
                            data-oid="9fiyxji"
                        >
                            📧 Send Email
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-black/40 border-t border-white/10" data-oid="geuoywn">
                <div className="max-w-6xl mx-auto text-center" data-oid="v5on.tn">
                    <div
                        className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid=":m5i5s6"
                    >
                        Dr. Samuel Dejene Abesha
                    </div>
                    <p className="text-gray-400 mb-6" data-oid="atpd8a4">
                        Dedicated to Excellence in Healthcare • Addis Ababa, Ethiopia
                    </p>
                    <div className="flex justify-center space-x-6" data-oid="c4d-k.p">
                        <div
                            className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                            data-oid="33vj1ru"
                        >
                            📧
                        </div>
                        <div
                            className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer"
                            data-oid="iqcii36"
                        >
                            📱
                        </div>
                        <div
                            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer"
                            data-oid="3ivzf1r"
                        >
                            💼
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-8" data-oid="g3zil5f">
                        © 2024 Dr. Samuel Dejene Abesha. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
