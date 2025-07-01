'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

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
            data-oid="cjfjr-f"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
                data-oid="a19d3zp"
            >
                <div className="max-w-7xl mx-auto px-6 py-4" data-oid="e0o1wrk">
                    <div className="flex justify-between items-center" data-oid="u1ad_vo">
                        <div
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                            data-oid="yom:hkr"
                        >
                            Dr. Samuel Dejene Abesha
                        </div>
                        <div className="hidden md:flex space-x-8" data-oid="2od10r1">
                            {['Home', 'About', 'Experience', 'Testimonials', 'Contact'].map(
                                (item) => (
                                    <button
                                        key={item}
                                        onClick={() => setActiveSection(item.toLowerCase())}
                                        className="hover:text-blue-400 transition-colors duration-300 relative group"
                                        data-oid="9h-vmiu"
                                    >
                                        {item}
                                        <span
                                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                                            data-oid="1auxizv"
                                        ></span>
                                    </button>
                                ),
                            )}
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white"
                            data-oid="5p8x_oa"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="min-h-screen flex items-center justify-center relative pt-20"
                data-oid="yduyozk"
            >
                <div className="absolute inset-0 overflow-hidden" data-oid="t86y5:t">
                    <div
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
                        data-oid="gels27v"
                    ></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"
                        data-oid="-b5wkca"
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce"
                        data-oid="y.:_4x."
                    ></div>
                </div>

                <div
                    className={`text-center z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="3mn5e2j"
                >
                    <div className="mb-8 relative" data-oid="3o-bfbb">
                        <div
                            className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full flex items-center justify-center text-6xl font-bold text-slate-900 shadow-2xl animate-pulse"
                            data-oid="oip5i6l"
                        >
                            DS
                        </div>
                        <div
                            className="absolute -top-4 -right-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-2xl animate-bounce"
                            data-oid="_b13ezv"
                        >
                            🩺
                        </div>
                    </div>

                    <h1
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse"
                        data-oid="fhanb7p"
                    >
                        Dr. Samuel Dejene Abesha
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-200 mb-4" data-oid="trhah9s">
                        Medical Doctor & Healthcare Professional
                    </p>
                    <p className="text-lg text-gray-300 mb-8" data-oid="_jkwk9k">
                        Addis Ababa, Ethiopia • 5+ Years Experience
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="gfgqt6o"
                    >
                        <button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            data-oid="0to48i8"
                        >
                            Download CV
                        </button>
                        <button
                            className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
                            data-oid="th4aajt"
                        >
                            Schedule Appointment
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-6" data-oid="pc563er">
                <div className="max-w-6xl mx-auto" data-oid="v2zfmq-">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="t2sfbtn"
                    >
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="0b_bega">
                        <div data-oid="5i07rhy">
                            <p
                                className="text-lg text-gray-300 mb-6 leading-relaxed"
                                data-oid="1ncfdyp"
                            >
                                I am a dedicated medical professional with over 5 years of
                                experience serving the healthcare needs of Addis Ababa and
                                surrounding communities. My passion lies in providing compassionate,
                                evidence-based medical care while continuously advancing my
                                knowledge in modern medical practices.
                            </p>
                            <p
                                className="text-lg text-gray-300 mb-6 leading-relaxed"
                                data-oid="rwknz_r"
                            >
                                Currently practicing at three prestigious medical institutions in
                                Addis Ababa, I specialize in emergency medicine, general practice,
                                and community healthcare. My commitment extends beyond clinical
                                practice to include extensive volunteer work and medical education.
                            </p>
                            <div className="grid grid-cols-2 gap-4" data-oid="-ro.lpz">
                                <div
                                    className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                                    data-oid="eq260h:"
                                >
                                    <div
                                        className="text-3xl font-bold text-blue-400"
                                        data-oid="bf2w4sl"
                                    >
                                        5+
                                    </div>
                                    <div className="text-sm text-gray-300" data-oid="c7y29-n">
                                        Years Experience
                                    </div>
                                </div>
                                <div
                                    className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                                    data-oid=":xlja64"
                                >
                                    <div
                                        className="text-3xl font-bold text-cyan-400"
                                        data-oid="8:jlrfo"
                                    >
                                        3
                                    </div>
                                    <div className="text-sm text-gray-300" data-oid="k18e.-g">
                                        Current Positions
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative" data-oid="m1dpl4g">
                            <div
                                className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center text-8xl animate-pulse"
                                data-oid="jkfjowh"
                            >
                                🏥
                            </div>
                            <div
                                className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-3xl animate-bounce"
                                data-oid="o--cvur"
                            >
                                ⚕️
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 px-6 bg-black/20" data-oid="6.77z1p">
                <div className="max-w-6xl mx-auto" data-oid="ru_f410">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="cqs9ex2"
                    >
                        Professional Experience
                    </h2>
                    <div className="space-y-8" data-oid="9k_vi7h">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 ${exp.current ? 'border-l-4 border-green-400' : ''}`}
                                data-oid="2_.i1l3"
                            >
                                <div
                                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                                    data-oid="g0-nl:y"
                                >
                                    <div data-oid="4bwl7mm">
                                        <h3
                                            className="text-xl font-bold text-blue-400"
                                            data-oid="mahot1s"
                                        >
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg text-white" data-oid="v8rxnk6">
                                            {exp.hospital}
                                        </p>
                                    </div>
                                    <div className="text-right" data-oid="94lg:0e">
                                        <p className="text-gray-300" data-oid="8is5xax">
                                            {exp.period}
                                        </p>
                                        <p className="text-sm text-gray-400" data-oid="eei6dt3">
                                            {exp.location}
                                        </p>
                                        {exp.current && (
                                            <span
                                                className="inline-block bg-green-500 text-xs px-2 py-1 rounded-full mt-1"
                                                data-oid="o7fw1yl"
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
            <section className="py-20 px-6" data-oid="ok80mea">
                <div className="max-w-6xl mx-auto" data-oid="dnv:des">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="2n8pgx:"
                    >
                        Volunteer Services
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6" data-oid="g2ocide">
                        {volunteerWork.map((work, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-xl backdrop-blur-sm hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
                                data-oid="qo6861:"
                            >
                                <div className="flex items-center" data-oid="s820e6c">
                                    <div
                                        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl mr-4"
                                        data-oid=".e_ofva"
                                    >
                                        🤝
                                    </div>
                                    <p className="text-white" data-oid="wh2x6--">
                                        {work}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 bg-black/20" data-oid="nfiigsl">
                <div className="max-w-6xl mx-auto" data-oid="tzzn1-7">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="aiioxev"
                    >
                        Testimonials
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8" data-oid="s3m:o6-">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
                                data-oid="h6hp_xz"
                            >
                                <div className="text-4xl text-blue-400 mb-4" data-oid="yvmvq1q">
                                    "
                                </div>
                                <p className="text-gray-300 mb-6 italic" data-oid="m9.8mp-">
                                    {testimonial.text}
                                </p>
                                <div data-oid="t-bvyxy">
                                    <p className="font-bold text-white" data-oid="lb-egzg">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-blue-400" data-oid="wzt0ouq">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact & Appointment Section */}
            <section className="py-20 px-6" data-oid="hmq_9pi">
                <div className="max-w-4xl mx-auto text-center" data-oid="zbt4.ne">
                    <h2
                        className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="bzu1heq"
                    >
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-300 mb-12" data-oid="x3w:nsj">
                        Ready to discuss your healthcare needs or explore professional
                        opportunities?
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12" data-oid="4rzn82j">
                        <div
                            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-xl backdrop-blur-sm"
                            data-oid="4sjfw3a"
                        >
                            <div className="text-4xl mb-4" data-oid="kgk.1rj">
                                📋
                            </div>
                            <h3 className="text-xl font-bold mb-4" data-oid="3n-u7.z">
                                Medical Consultation
                            </h3>
                            <p className="text-gray-300 mb-6" data-oid=".ow2jrl">
                                Schedule an appointment for professional medical consultation and
                                healthcare services.
                            </p>
                            <button
                                className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
                                data-oid="m5omj0d"
                            >
                                Book Consultation
                            </button>
                        </div>

                        <div
                            className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-xl backdrop-blur-sm"
                            data-oid="4gbbxvt"
                        >
                            <div className="text-4xl mb-4" data-oid="rusz3s3">
                                💼
                            </div>
                            <h3 className="text-xl font-bold mb-4" data-oid="glu1p6q">
                                Professional Discussion
                            </h3>
                            <p className="text-gray-300 mb-6" data-oid="bg6k8yq">
                                Connect for professional opportunities, collaborations, or career
                                discussions.
                            </p>
                            <button
                                className="px-6 py-3 bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors duration-300"
                                data-oid="9ruboeu"
                            >
                                Schedule Meeting
                            </button>
                        </div>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="ontng4q"
                    >
                        <button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            data-oid="xj0ilow"
                        >
                            📄 Download Resume
                        </button>
                        <button
                            className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
                            data-oid="adw8539"
                        >
                            📧 Send Email
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-black/40 border-t border-white/10" data-oid="_39:m6s">
                <div className="max-w-6xl mx-auto text-center" data-oid="..7b1x8">
                    <div
                        className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="oz8-9ti"
                    >
                        Dr. Samuel Dejene Abesha
                    </div>
                    <p className="text-gray-400 mb-6" data-oid="cogs_9k">
                        Dedicated to Excellence in Healthcare • Addis Ababa, Ethiopia
                    </p>
                    <div className="flex justify-center space-x-6" data-oid="8_mlzjz">
                        <div
                            className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                            data-oid="2pwhcib"
                        >
                            📧
                        </div>
                        <div
                            className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer"
                            data-oid="jg:58yi"
                        >
                            📱
                        </div>
                        <div
                            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer"
                            data-oid="eujm3uv"
                        >
                            💼
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-8" data-oid="im3srr.">
                        © 2024 Dr. Samuel Dejene Abesha. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
