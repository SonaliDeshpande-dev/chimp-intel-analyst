
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FileUpload from "@/components/FileUpload";

const UploadPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-8 px-4">
        <div className="max-w-screen-lg mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-center">Upload Campaign Data</h1>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Upload your Mailchimp campaign CSV exports to analyze performance 
            and get AI-powered insights on how to improve your email marketing.
          </p>
          <FileUpload />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UploadPage;
