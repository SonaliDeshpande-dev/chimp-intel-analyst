
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadIcon, AlertCircleIcon, FileTextIcon, PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isDragOver, setIsDragOver] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0]);
    }
  };

  const validateAndSetFile = (file: File) => {
    // Check file type (should be CSV)
    if (file.type !== "text/csv" && !file.name.endsWith(".csv")) {
      toast({
        variant: "destructive",
        title: "Invalid File Format",
        description: "Please upload a CSV file exported from Mailchimp.",
      });
      return;
    }

    setFile(file);
    toast({
      title: "File Selected",
      description: `"${file.name}" is ready to upload.`,
    });
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  const handleUpload = () => {
    if (!file) return;

    setIsUploading(true);
    
    // Simulate upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setUploadProgress(progress);
      
      if (progress >= 100) {
        clearInterval(interval);
        setIsUploading(false);
        
        // Simulate processing the file
        setTimeout(() => {
          toast({
            title: "Upload Complete",
            description: "Your file has been processed successfully!",
          });
          
          // For demo purposes, we'll just save the file name to localStorage
          // In a real app, you would process the CSV and store the data
          const demoData = {
            fileName: file.name,
            uploadDate: new Date().toISOString(),
            fileSize: file.size,
          };
          
          localStorage.setItem("campaignData", JSON.stringify(demoData));
          navigate("/dashboard");
        }, 1000);
      }
    }, 100);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <div
        className={`border-2 border-dashed rounded-lg p-8 transition-colors ${
          isDragOver ? "border-primary bg-primary/5" : "border-muted-foreground/25"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          {!file ? (
            <>
              <div className="rounded-full bg-primary/10 p-3">
                <UploadIcon className="h-10 w-10 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Upload Mailchimp CSV Data</h3>
                <p className="text-sm text-muted-foreground max-w-md mx-auto">
                  Drag and drop your campaign export file here, or click to browse
                </p>
              </div>
              <label htmlFor="file-upload" className="cursor-pointer">
                <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                  <PlusCircleIcon className="mr-2 h-4 w-4" />
                  Select CSV File
                </div>
                <input
                  id="file-upload"
                  type="file"
                  accept=".csv"
                  className="sr-only"
                  onChange={handleFileChange}
                />
              </label>
              <div className="text-xs text-muted-foreground">
                <p>Supported format: CSV</p>
              </div>
            </>
          ) : (
            <>
              <div className="rounded-full bg-secondary p-3">
                <FileTextIcon className="h-8 w-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{file.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {(file.size / 1024).toFixed(2)} KB • CSV
                </p>
              </div>
              {isUploading ? (
                <div className="w-full space-y-2">
                  <Progress value={uploadProgress} className="h-2 w-full" />
                  <p className="text-sm text-muted-foreground">Uploading... {uploadProgress}%</p>
                </div>
              ) : (
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setFile(null)}
                  >
                    Change
                  </Button>
                  <Button size="sm" onClick={handleUpload}>
                    Upload & Analyze
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <div className="mt-8 rounded-lg border bg-card p-6">
        <div className="flex items-start space-x-4">
          <AlertCircleIcon className="h-6 w-6 text-primary mt-1" />
          <div>
            <h3 className="font-semibold mb-2">How to Export Data from Mailchimp</h3>
            <ol className="text-sm space-y-2 text-muted-foreground list-decimal pl-4">
              <li>Log in to your Mailchimp account</li>
              <li>Navigate to the Campaigns section</li>
              <li>Select the campaign you want to analyze</li>
              <li>Click on the "Export as CSV" option</li>
              <li>Save the file to your computer</li>
              <li>Upload the saved CSV file here</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
