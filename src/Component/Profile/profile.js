import React, { useEffect, useState } from "react";
import {
    PencilLine,
    UserCheck,
    UploadCloud,
    Mail,
    Phone,
    Home,
    Briefcase,
    Calendar,
    UserCircle2,
    Cake,
    Users,
    Heart,
    Building2,
    ShieldCheck,
    Settings,
} from "lucide-react";

export default function Profile({ darkMode }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/users/1")
            .then((res) => res.json())
            .then((data) => setUser(data));
    }, []);

    if (!user) return null;

    const containerStyle = `${darkMode
        ? "bg-white/5 text-white shadow-[0_16px_60px_rgba(0,0,0,0.3)] backdrop-blur-2xl border border-white/20"
        : "backdrop-blur-2xl bg-white/90 md:bg-white/70 xl:bg-white/60 shadow-[0_8px_20px_rgba(0,0,0,0.1)] text-[#1A237E] border border-[#1A237E]/20"}`;

    return (
        <div className="ml-4 md:ml-[16.5rem] xl:ml-[19rem] mt-4 mr-4">
            <section className={`grid grid-cols-1 gap-10 p-6 sm:p-10 rounded-3xl transition-all ${containerStyle}`}>
                <div className="flex flex-col md:flex-col xl:flex-row gap-10 items-center">
                    {/* Profile Picture */}
                    <div className="relative group">
                        <img
                            src={user.image}
                            alt="Profile"
                            className={`w-52 h-52 rounded-full object-cover shadow-xl border-4 ${darkMode ? "border-white/20" : "border-[#1A237E]/20"}`}
                        />
                        <button
                            className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:scale-105 transition"
                            title="Upload New Picture"
                        >
                            <UploadCloud size={20} />
                        </button>
                    </div>

                    {/* Basic Info */}
                    <div className="flex-1 space-y-3 w-full">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between flex-wrap gap-4 w-full">
                            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                                {user.firstName} {user.lastName}
                            </h2>
                            <button className="order-first sm:order-none group flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-tr from-indigo-500 via-blue-500 to-sky-500 text-white hover:from-indigo-600 hover:to-sky-600 transition-all duration-300 shadow-lg hover:scale-105 w-fit">
                                <PencilLine size={18} className="transition-transform group-hover:rotate-6" /> Edit Profile
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <p className="flex items-center gap-2 text-sm">
                                <Mail size={16} /> {user.email}
                            </p>
                            <p className="flex items-center gap-2 text-sm">
                                <Phone size={16} /> {user.phone}
                            </p>
                            <p className="flex items-center gap-2 text-sm">
                                <Home size={16} /> {user.address.address}, {user.address.city}
                            </p>
                            <p className="flex items-center gap-2 text-sm">
                                <Briefcase size={16} /> {user.company.name}
                            </p>
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div>
                    <h3 className="text-2xl font-semibold mb-3 flex items-center gap-2">
                        <UserCircle2 size={20} /> About Me
                    </h3>
                    <p className="text-base leading-relaxed max-w-4xl">
                        Hello, I'm <strong>{user.firstName}</strong> from <strong>{user.address.city}</strong>. I currently work at <strong>{user.company.name}</strong> as a <strong>{user.company.title}</strong>. I enjoy building user-centric solutions, collaborating with cross-functional teams, and continuously learning new technologies to stay ahead in the tech world.
                    </p>
                </div>

                {/* Info Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { label: "Username", value: `@${user.username}`, icon: UserCircle2 },
                        { label: "Birth Date", value: user.birthDate, icon: Cake },
                        { label: "Gender", value: user.gender, icon: Users },
                        { label: "Age", value: user.age, icon: Calendar },
                        { label: "Blood Group", value: user.bloodGroup, icon: Heart },
                        { label: "Department", value: user.company.department, icon: Building2 },
                    ].map(({ label, value, icon: Icon }, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-4 p-5 rounded-2xl shadow-md border backdrop-blur-md transition-all ${darkMode ? "bg-white/10 text-white border-white/20" : "bg-white text-[#1A237E] border-[#1A237E]/10"}`}
                        >
                            <Icon size={24} className="shrink-0" />
                            <div>
                                <h4 className="text-sm font-semibold opacity-80">{label}</h4>
                                <p className="text-lg font-medium truncate">{value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Status Section */}
                <div className="mt-6 flex flex-wrap gap-4 items-center justify-start">
                    <button className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium border border-red-500 text-red-500 hover:bg-red-50 transition">
                        <ShieldCheck size={18} /> Deactivate Account
                    </button>
                </div>
            </section>
        </div>
    );
}