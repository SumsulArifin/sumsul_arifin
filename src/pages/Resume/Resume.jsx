import React, { useState, useEffect } from "react";
import Particle from "../../components/Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const pdfUrl = "/Md_Sumsul_Arifin2.pdf"; // URL path to your PDF in public folder

    return (
        <div className="w-full min-h-screen bg-gray-900 relative text-white">
            <Particle />
            <div className="flex justify-center py-6 relative z-10">
                <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
                >
                    <AiOutlineDownload className="text-lg" />
                    Download CV
                </a>
            </div>
            <div className="flex justify-center">
                <Document file={pdfUrl} className="flex justify-center">
                    <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                </Document>
            </div>
            <div className="flex justify-center py-6 relative z-10">
                <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition duration-300"
                >
                    <AiOutlineDownload className="text-lg" />
                    Download CV
                </a>
            </div>
        </div>
    );
}
