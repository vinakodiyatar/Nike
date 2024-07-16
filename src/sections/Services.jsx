import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";
const Sevices = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((services) => (
        <ServiceCard key={services.label} {...services} />
      ))}
    </section>
  );
};

export default Sevices;
