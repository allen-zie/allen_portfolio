export const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 lg:px-8 py-20">
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-primary">Get In Touch</h2>
        <p className="text-lg text-foreground/80 mb-12">
          I'm always open to new opportunities and interesting projects.
        </p>
        <a
          href="mailto:contact@allenzndlovu.com"
          className="inline-block px-8 py-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          Say Hello
        </a>
        <div className="mt-12 text-foreground/60">
          <p>Based in South Africa</p>
          <p>Available for remote work worldwide</p>
        </div>
      </div>
    </section>
  );
};