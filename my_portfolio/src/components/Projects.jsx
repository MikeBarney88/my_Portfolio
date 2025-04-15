import Dropdown from "./Dropdown";

const Projects = () => {
  const productImages = [
    {
      url: "/api/placeholder/400/300",
      alt: "Product Front",
      label: "Front View",
      caption: "Front view of product",
    },
    {
      url: "/api/placeholder/400/300",
      alt: "Product Back",
      label: "Back View",
      caption: "Back view of product",
    },
    // Add more images as needed
  ];

  return (
    <main>
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </main>
  );
};
export default Projects;
