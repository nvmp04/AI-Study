import { FileText } from "lucide-react";
import { useState } from "react";

function PDFcontent({ documentInfo }) {
  const pdfLink =
    "https://www.antennahouse.com/hubfs/xsl-fo-sample/pdf/basic-link-1.pdf";


  return (
    <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-8 backdrop-blur-xl min-h-[800px]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-r from-red-500 to-orange-600 p-2 rounded-xl">
            <FileText className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Original PDF Content</h2>
        </div>
      </div>

      {/* PDF Viewer */}
      <iframe  
        className="bg-white/5 border-2 border-dashed border-white/20 rounded-xl h-[700px] w-[100%] flex items-center justify-center overflow-auto"
        src = {pdfLink}  
        type="application/pdf"
      />
    </div>
  );
}

export default PDFcontent;
