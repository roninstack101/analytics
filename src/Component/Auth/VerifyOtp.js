import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShieldCheck, KeyRound, Sun, Moon } from "lucide-react";

export default function VerifyOTP({ setDarkMode, darkMode }) {
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const tempUser = JSON.parse(localStorage.getItem("tempUser"));
    const lightColor = "#1A237E";

    useEffect(() => {
        if (tempUser?.email) {
            fetch("http://localhost:5000/send-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: tempUser.email }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (!data.success) {
                        alert("Failed to send OTP. Please try again.");
                    }
                })
                .catch(() => alert("Server error while sending OTP."));
        }
    }, [tempUser?.email]);

    const handleVerify = async () => {
        if (!otp) return alert("Please enter the OTP");
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/verify-otp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: tempUser.email, otp }),
            });

            const data = await res.json();
            if (data.verified) {
                const user = { ...tempUser, verified: true };
                localStorage.setItem("user", JSON.stringify(user));
                localStorage.removeItem("tempUser");
                navigate("/dashboard");
            } else {
                alert("Invalid OTP. Please try again.");
            }
        } catch (error) {
            console.error("OTP Verification Error:", error);
            alert("Server error while verifying OTP.");
        }
        setLoading(false);
    };

    return (
        <div
            className={`min-h-screen flex items-center justify-center px-4 transition-all duration-300`}
        >
            <div className="absolute top-4 right-4">
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="p-2 bg-white/10 backdrop-blur rounded-md text-white"
                >
                    {darkMode ? (
                        <Sun className="w-5 h-5 text-white" />
                    ) : (
                        <Moon className="w-5 h-5" style={{ color: lightColor }} />
                    )}
                </button>
            </div>
            <div className="w-full max-w-md bg-white/90 dark:bg-white/10 border border-white/30 shadow-xl backdrop-blur-xl rounded-2xl p-8 space-y-6">
                <div className="flex justify-center text-indigo-700 dark:text-white">
                    <ShieldCheck size={40} />
                </div>
                <h2 className="text-2xl font-bold text-center">Verify OTP</h2>
                <p className="text-center text-sm text-gray-800 dark:text-gray-200">
                    OTP sent to <strong>{tempUser?.email}</strong>
                </p>
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-3 border rounded-xl outline-none text-center text-lg tracking-widest shadow-inner focus:ring-2 focus:ring-indigo-400 dark:bg-black/20 dark:text-white"
                />
                <button
                    onClick={handleVerify}
                    disabled={loading}
                    className={`w-full bg-gradient-to-tr from-indigo-500 via-blue-500 to-sky-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-all flex justify-center items-center gap-2 ${loading ? "opacity-60 cursor-not-allowed" : ""
                        }`}
                >
                    <KeyRound size={18} /> {loading ? "Verifying..." : "Verify and Continue"}
                </button>
            </div>
        </div>
    );
}
