import AboutImage from "@assets/images/About_Us.jpg";

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto my-12 mt-20 px-4 lg:px-8">
      <div className="flex flex-wrap lg:flex-nowrap items-start gap-8">
        <div className="w-full lg:w-1/2">
          <img
            src={AboutImage}
            loading="lazy"
            alt="About Us - Almere Zaden"
            className="w-full h-auto max-h-[70vh] object-cover rounded-lg shadow-md"
          />
        </div>

        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-sunset-orange leading-tight mb-4">
            Welcome to Almere Zaden, where our passion for high-quality
          </h2>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
            vegetable seeds is driven by a commitment to ethical practices and
            exceptional breeding standards. Founded in the heart of the
            Netherlands, our mission is fueled by the desire to share the
            excellence that characterizes this region’s renowned horticultural
            practices with the entire world.
          </p>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
            With our guiding motto, "From the Netherlands to the World," we
            proudly export superior vegetable seeds that embody the high
            standards synonymous with Dutch horticulture. Each seed is developed
            with care and rigorously tested in the Netherlands to ensure they
            meet the stringent quality requirements that guarantee reliability
            and performance.
          </p>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-4">
            At Almere Zaden, we believe in providing access to the finest seeds
            that not only yield bountiful harvests but also promote sustainable
            farming practices. By adhering to the esteemed standards set by the
            Netherlands, we ensure our customers receive seeds that excel in
            both garden and agricultural settings.
          </p>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Join us on this mission to cultivate a greener future and experience
            firsthand the incredible potential of Almere Zaden vegetable seeds,
            where exceptional quality meets global farming aspirations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
