
const Contact = () => {
  return (
    <section className="bg-[url(/images/blue-bg.png)] bg-cover py-20 lg:py-32">
      <div className="container flex justify-between gap-5 max-lg:flex-col max-lg:text-center lg:items-center lg:gap-7">
        <h1 className="text-lg font-bold leading-loose text-white lg:max-w-[40rem] lg:text-2xl xl:text-5xl">
          Supercharge your software development with our expert team - get in
          touch today!
        </h1>
        <div className="flex flex-col items-center justify-center gap-5 bg-white px-7 py-6 dark:bg-black/70">
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            height={55}
            className="w-full border-b border-black/10 bg-transparent px-2 py-6 outline-none lg:min-w-96 dark:border-white"
            size={30}
          />
          <input
            type="text"
            placeholder="Work Email"
            name="email"
            height={55}
            className="w-full border-b border-black/10 bg-transparent px-2 py-6 outline-none lg:min-w-96 dark:border-white"
            size={30}
          />
          <input
            type="text"
            placeholder="Work Phone"
            name="phone"
            height={55}
            className="w-full border-b border-black/10 bg-transparent px-2 py-6 outline-none lg:min-w-96 dark:border-white"
            size={30}
          />
          <input
            type="text"
            placeholder="Company Name"
            name="company-name"
            height={55}
            className="w-full border-b border-black/10 bg-transparent px-2 py-6 outline-none lg:min-w-96 dark:border-white"
            size={30}
          />
          <textarea
            placeholder="Message"
            name="message"
            cols={4}
            className="w-full border-b border-black/10 bg-transparent px-2 py-6 outline-none lg:min-w-96 dark:border-white"
          />
          <button className="hover:bg-transparent flex w-fit rounded border border-app-orange bg-app-orange px-8 py-3 font-bold text-white hover:border-primaryBlue hover:text-primaryBlue">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
