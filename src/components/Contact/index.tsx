import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="bg-[url(/images/blue-bg.png)] bg-cover py-20 lg:py-32">
      <div className="container flex justify-between gap-5 max-lg:flex-col max-lg:text-center lg:items-center lg:gap-7">
        <h2 className="text-lg font-bold leading-loose text-white lg:max-w-[40rem] lg:text-2xl xl:text-5xl">
          Supercharge your software development with our expert team - get in
          touch today!
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
