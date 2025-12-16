import React, { useState } from "react";
import bg from "../assets/6.jpg"; // change extension if needed

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneCountry: "+91",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", form);
  };

  return (
    <section
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-12"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Glass enquiry box */}
      <div className="w-full max-w-4xl rounded-xl bg-white/25 backdrop-blur-md shadow-xl border border-white/30">
        <div className="p-6 sm:p-10">
          <p className="text-center font-montserrat tracking-widest text-sm text-[#7C0A02]/80 uppercase">
            For Special Requests &amp; Orders
          </p>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            {/* First + Last */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-montserrat text-[#333] mb-2">
                  First Name <span className="text-[#7C0A02]">*</span>
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/80 border border-[#222]/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#FA8072]"
                />
              </div>

              <div>
                <label className="block font-montserrat text-[#333] mb-2">
                  Last Name <span className="text-[#7C0A02]">*</span>
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/80 border border-[#222]/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#FA8072]"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block font-montserrat text-[#333] mb-2">
                Email <span className="text-[#7C0A02]">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full bg-white/80 border border-[#222]/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#FA8072]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-montserrat text-[#333] mb-2">
                Phone
              </label>
              <div className="flex w-full border border-[#222]/60 bg-white/80">
                <select
                  name="phoneCountry"
                  value={form.phoneCountry}
                  onChange={handleChange}
                  className="bg-transparent px-3 py-3 outline-none border-r border-[#222]/40 font-montserrat"
                >
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                </select>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 outline-none focus:ring-2 focus:ring-[#FA8072]"
                />
              </div>
            </div>

            {/* Enquiry */}
            <div>
              <label className="block font-montserrat text-[#333] mb-2">
                Enquiry
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-white/80 border border-[#222]/60 px-4 py-3 outline-none focus:ring-2 focus:ring-[#FA8072]"
                placeholder="Tell us about your requirement"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#7C0A02] text-white font-montserrat py-3 rounded-md hover:bg-[#FA8072] transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;