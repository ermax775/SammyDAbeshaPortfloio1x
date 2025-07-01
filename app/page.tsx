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
            data-oid="95l.umh"
        >
            {/* Navigation */}
            <nav
                className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
                data-oid=":eo75.z"
            >
                <div className="max-w-7xl mx-auto px-6 py-4" data-oid="sj0p_60">
                    <div className="flex justify-between items-center" data-oid="glv4221">
                        <div
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                            data-oid="l4z09.-"
                        >
                            Dr. Samuel Dejene Abesha
                        </div>
                        <div className="hidden md:flex space-x-8" data-oid="v6i9d9x">
                            {['Home', 'About', 'Experience', 'Testimonials', 'Contact'].map(
                                (item) => (
                                    <button
                                        key={item}
                                        onClick={() => setActiveSection(item.toLowerCase())}
                                        className="hover:text-blue-400 transition-colors duration-300 relative group"
                                        data-oid="bav9n_o"
                                    >
                                        {item}
                                        <span
                                            className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"
                                            data-oid="jds86lc"
                                        ></span>
                                    </button>
                                ),
                            )}
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden text-white"
                            data-oid="9nxuwj0"
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section
                className="min-h-screen flex items-center justify-center relative pt-20"
                data-oid=":sxocsi"
            >
                <div className="absolute inset-0 overflow-hidden" data-oid="ryn00:j">
                    <div
                        className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
                        data-oid="uij2owr"
                    ></div>
                    <div
                        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"
                        data-oid="n.4aayu"
                    ></div>
                    <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-bounce"
                        data-oid=".kig56m"
                    ></div>
                </div>

                <div
                    className={`text-center z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="lsq69it"
                >
                    <div className="mb-8 relative" data-oid="3at2lat">
                        <div
                            className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-400 to-cyan-300 rounded-full flex items-center justify-center text-6xl font-bold text-slate-900 shadow-2xl animate-pulse"
                            data-oid="bjorc1-"
                        >
                            DS
                        </div>
                        <div
                            className="absolute -top-4 -right-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-2xl animate-bounce"
                            data-oid="cv8vod6"
                        >
                            🩺
                        </div>
                    </div>

                    <h1
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse"
                        data-oid=":5xvd_l"
                    >
                        Dr. Samuel Dejene Abesha
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-200 mb-4" data-oid="p_5xt9o">
                        Medical Doctor & Healthcare Professional
                    </p>
                    <p className="text-lg text-gray-300 mb-8" data-oid="e:7jd3f">
                        Addis Ababa, Ethiopia • 5+ Years Experience
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="675vigb"
                    >
                        <button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            data-oid="l9y0otm"
                        >
                            Download CV
                        </button>
                        <button
                            className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
                            data-oid="je7-_0n"
                        >
                            Schedule Appointment
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-6" data-oid="_fcxjk_">
                <div className="max-w-6xl mx-auto" data-oid="-3km194">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="ry:ktl-"
                    >
                        About Me
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center" data-oid="35rck00">
                        <div data-oid="h6wsnry">
                            <p
                                className="text-lg text-gray-300 mb-6 leading-relaxed"
                                data-oid="9o.b9hj"
                            >
                                I am a dedicated medical professional with over 5 years of
                                experience serving the healthcare needs of Addis Ababa and
                                surrounding communities. My passion lies in providing compassionate,
                                evidence-based medical care while continuously advancing my
                                knowledge in modern medical practices.
                            </p>
                            <p
                                className="text-lg text-gray-300 mb-6 leading-relaxed"
                                data-oid="np.uj0o"
                            >
                                Currently practicing at three prestigious medical institutions in
                                Addis Ababa, I specialize in emergency medicine, general practice,
                                and community healthcare. My commitment extends beyond clinical
                                practice to include extensive volunteer work and medical education.
                            </p>
                            <div className="grid grid-cols-2 gap-4" data-oid="uizbsfn">
                                <div
                                    className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                                    data-oid="-y5ehay"
                                >
                                    <div
                                        className="text-3xl font-bold text-blue-400"
                                        data-oid="th__rae"
                                    >
                                        5+
                                    </div>
                                    <div className="text-sm text-gray-300" data-oid="m3x.q9k">
                                        Years Experience
                                    </div>
                                </div>
                                <div
                                    className="bg-white/10 p-4 rounded-lg backdrop-blur-sm"
                                    data-oid="_blhp9u"
                                >
                                    <div
                                        className="text-3xl font-bold text-cyan-400"
                                        data-oid="jph7jc0"
                                    >
                                        3
                                    </div>
                                    <div className="text-sm text-gray-300" data-oid="8r3d9xz">
                                        Current Positions
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative" data-oid="au_qjvg">
                            <div
                                className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center text-8xl animate-pulse"
                                data-oid="c39wz4-"
                            >
                                🏥
                            </div>
                            <div
                                className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-3xl animate-bounce"
                                data-oid="zqti-hz"
                            >
                                ⚕️
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="py-20 px-6 bg-black/20" data-oid="6.-gj0-">
                <div className="max-w-6xl mx-auto" data-oid="-x6865q">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="3:zcu8t"
                    >
                        Professional Experience
                    </h2>
                    <div className="space-y-8" data-oid="-gk3yj8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 transform hover:scale-105 transition-all duration-300 ${exp.current ? 'border-l-4 border-green-400' : ''}`}
                                data-oid="l3a3ozu"
                            >
                                <div
                                    className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                                    data-oid="gayg0ax"
                                >
                                    <div data-oid="c8395zy">
                                        <h3
                                            className="text-xl font-bold text-blue-400"
                                            data-oid="tcs.k2n"
                                        >
                                            {exp.title}
                                        </h3>
                                        <p className="text-lg text-white" data-oid="9y3xlyn">
                                            {exp.hospital}
                                        </p>
                                    </div>
                                    <div className="text-right" data-oid="hl-5qsg">
                                        <p className="text-gray-300" data-oid="myapaip">
                                            {exp.period}
                                        </p>
                                        <p className="text-sm text-gray-400" data-oid=".qti5br">
                                            {exp.location}
                                        </p>
                                        {exp.current && (
                                            <span
                                                className="inline-block bg-green-500 text-xs px-2 py-1 rounded-full mt-1"
                                                data-oid="s7o1z8c"
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
            <section className="py-20 px-6" data-oid="nb.z:qe">
                <div className="max-w-6xl mx-auto" data-oid="qc6yzvl">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="wm-m133"
                    >
                        Volunteer Services
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6" data-oid="ni_dg:_">
                        {volunteerWork.map((work, index) => (
                            <div
                                key={index}
                                className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 rounded-xl backdrop-blur-sm hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300"
                                data-oid="xalfpx0"
                            >
                                <div className="flex items-center" data-oid="h4u:oph">
                                    <div
                                        className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl mr-4"
                                        data-oid="ws1bdrm"
                                    >
                                        🤝
                                    </div>
                                    <p className="text-white" data-oid="we5f6pp">
                                        {work}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 px-6 bg-black/20" data-oid="bucl.xb">
                <div className="max-w-6xl mx-auto" data-oid="t18:yky">
                    <h2
                        className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="elyhe-5"
                    >
                        Testimonials
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8" data-oid="-bte-o2">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300"
                                data-oid="v_aoc41"
                            >
                                <div className="text-4xl text-blue-400 mb-4" data-oid="yfuh.db">
                                    "
                                </div>
                                <p className="text-gray-300 mb-6 italic" data-oid="yg1uw.8">
                                    {testimonial.text}
                                </p>
                                <div data-oid="iozf3v0">
                                    <p className="font-bold text-white" data-oid="-x7n35m">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-sm text-blue-400" data-oid="b7ju_vw">
                                        {testimonial.role}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact & Appointment Section */}
            <section className="py-20 px-6" data-oid="nt0l67i">
                <div className="max-w-4xl mx-auto text-center" data-oid="yat3qu9">
                    <h2
                        className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="sroc009"
                    >
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-300 mb-12" data-oid=":.8zu7c">
                        Ready to discuss your healthcare needs or explore professional
                        opportunities?
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-12" data-oid="ar44rw4">
                        <div
                            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8 rounded-xl backdrop-blur-sm"
                            data-oid="5lkeevy"
                        >
                            <div className="text-4xl mb-4" data-oid="3zkltt0">
                                📋
                            </div>
                            <h3 className="text-xl font-bold mb-4" data-oid="rvp0bz:">
                                Medical Consultation
                            </h3>
                            <p className="text-gray-300 mb-6" data-oid="jy77rvy">
                                Schedule an appointment for professional medical consultation and
                                healthcare services.
                            </p>
                            <button
                                className="px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
                                data-oid="050_2jc"
                            >
                                Book Consultation
                            </button>
                        </div>

                        <div
                            className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 p-8 rounded-xl backdrop-blur-sm"
                            data-oid="02c_v9."
                        >
                            <div className="text-4xl mb-4" data-oid=".wf0b7w">
                                💼
                            </div>
                            <h3 className="text-xl font-bold mb-4" data-oid="jkw3858">
                                Professional Discussion
                            </h3>
                            <p className="text-gray-300 mb-6" data-oid="2-oev:a">
                                Connect for professional opportunities, collaborations, or career
                                discussions.
                            </p>
                            <button
                                className="px-6 py-3 bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors duration-300"
                                data-oid="yiotn1g"
                            >
                                Schedule Meeting
                            </button>
                        </div>
                    </div>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                        data-oid="v9xiw_6"
                    >
                        <button
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
                            data-oid="w:qqhp6"
                        >
                            📄 Download Resume
                        </button>
                        <button
                            className="px-8 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
                            data-oid="iqkae5:"
                        >
                            📧 Send Email
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-6 bg-black/40 border-t border-white/10" data-oid="de8k695">
                <div className="max-w-6xl mx-auto text-center" data-oid="52b:o-3">
                    <div
                        className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
                        data-oid="di-x5qo"
                    >
                        Dr. Samuel Dejene Abesha
                    </div>
                    <p className="text-gray-400 mb-6" data-oid="_vegxh-">
                        Dedicated to Excellence in Healthcare • Addis Ababa, Ethiopia
                    </p>
                    <div className="flex justify-center space-x-6" data-oid=":jwtmf5">
                        <div
                            className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
                            data-oid="o72ago5"
                        >
                            📧
                        </div>
                        <div
                            className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors cursor-pointer"
                            data-oid="tjtjq.8"
                        >
                            📱
                        </div>
                        <div
                            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer"
                            data-oid="bpy84:n"
                        >
                            💼
                        </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-8" data-oid="xgqhron">
                        © 2024 Dr. Samuel Dejene Abesha. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
