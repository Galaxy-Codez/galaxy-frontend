import React from "react";

function ContactForm() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 bg-white px-7 py-6 dark:bg-black/70">
      <input
        type="text"
        placeholder="Full Name"
        name="name"
        height={55}
        className="w-full border-b border-black/10 bg-transparent px-2 py-6 outline-none dark:border-white lg:min-w-96"
        size={30}
      />
      <input
        type="text"
        placeholder="Work Email"
        name="email"
        height={55}
        className="w-full border-b border-black/10 bg-transparent px-2 py-6 outline-none dark:border-white lg:min-w-96"
        size={30}
      />
      <input
        type="text"
        placeholder="Work Phone"
        name="phone"
        height={55}
        className="w-full border-b border-black/10 bg-transparent px-2 py-6 outline-none dark:border-white lg:min-w-96"
        size={30}
      />
      <input
        type="text"
        placeholder="Company Name"
        name="company-name"
        height={55}
        className="w-full border-b border-black/10 bg-transparent px-2 py-6 outline-none dark:border-white lg:min-w-96"
        size={30}
      />
      <textarea
        placeholder="Message"
        name="message"
        cols={4}
        className="w-full border-b border-black/10 bg-transparent px-2 py-6 outline-none dark:border-white lg:min-w-96"
      />
      <button className="flex w-fit rounded border border-primaryBlue bg-primaryBlue px-8 py-3 font-bold text-white hover:border-app-orange hover:bg-app-orange hover:bg-transparent hover:text-app-orange">
        Get in touch
      </button>
    </div>
  );
}

export default ContactForm;
