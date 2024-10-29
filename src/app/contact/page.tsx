import { Contact, MainLayout } from "@/core";

export default function ContactPage() {
  return (
    <MainLayout>
      <Contact.Form />
      <div className="mt-12 flex flex-col justify-center items-center text-center w-full">
        <h2 className="font-bold text-[72px]">Employment</h2>
        <h5 className="text-sm mx-[400px] mt-4">
          Interested in joining a team of professional security guards? Please
          send your resume and cover letter to info@signaturesecurity.org. We
          look forward to hearing from you!
        </h5>
      </div>
    </MainLayout>
  );
}
