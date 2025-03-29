import Navbar from "@/components/Navbar";
import ContactForm from "@/components/Contact";
export default function Contact() {
  return (
    <>
      <Navbar />
    {/* <div className="flex justify-center items-center h-screen ">
      <h1 className="text-2xl ">This Page is Contact</h1>
    </div> */}
    <div className="mt-10">
      <ContactForm />

    </div>
    
    </>
  );
}