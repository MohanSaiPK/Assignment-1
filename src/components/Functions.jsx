import { useState } from "react";
import { SampleTesting } from "./Cards/SampleTesting";

export const Functions = () => {
  const FunctionsData = [
    {
      id: 1,

      image: "../Logos/lims-logo.png",
      desc: "Qualis LIMS is an enterprise class laboratory information management system designed to digitally transform Laboratories by enabling a fully paperless environment for sample testing, automating laboratory processes & Regulatory Compliance.",
      cardImage: [
        "../Logos/sample.png",
        "../Logos/search.png",
        "../Logos/result.png",
        "../Logos/report.png",
      ],
      bigImage: "../Banner/lims-ss (1).png",
      cardText: [
        "Sample Management",
        "Test & Specification Management",
        "Test Result Entry",
        "Dynamic Reports",
      ],
    },
    {
      id: 2,
      image: "../Logos/eln-dark.png",
      desc: "Logilab ELN is a cutting-edge Electronic Lab Notebook solution tailored for Quality Control & Research Labs. It empowers labs to record, execute, and store test & experimental data in a compliant paperless setting.",
      cardImage: [
        "../Logos/spreadsheet.png",
        "../Logos/proto.png",
        "../Logos/manage.png",
        "../Logos/execution.png",
      ],
      bigImage: "../Banner/eln-ss.png",
      cardText: [
        "Spreadsheet Data Capture",
        "Multi-Step Protocols",
        "Project Management",
        "Task Execution",
      ],
    },
    {
      id: 3,
      image: "../Logos/sdms-dark.png",
      desc: "Logilab SDMS is an advanced scientific data management platform that enables a central reliable source of truth for Capture, Catalogue & Archival of Instrument Raw Data & Metadata all while maintaining 21 CFR Part 11 Compliance.",
      cardImage: [
        "../Logos/data.png",
        "../Logos/non-pc.png",
        "../Logos/rs232.png",
        "../Logos/21.png",
      ],
      bigImage: "../Banner/sdms-ss.png",
      cardText: [
        "Raw Data & Metadata Capture",
        "PC & Non-PC based Instruments",
        "RS232/TCPIP Connectivity",
        "21 CFR Part 11 Compliance",
      ],
    },
    {
      id: 4,
      image: "../Logos/dms-dark.png",
      desc: "Qualis DMS is a unified Document Management Platform for regulated organizations. It seamlessly Connects, Manage and Streamlines documents, ensuring full control, traceability, and compliance.",
      cardImage: [
        "../Logos/paperless.png",
        "../Logos/access.png",
        "../Logos/distribution.png",
        "../Logos/regulatory.png",
      ],
      bigImage: "../Banner/dms-ss.png",
      cardText: [
        "Paperless Document Management",
        "Controlled Document Access",
        "Distribution of Approved Documents",
        "Improved Regulatory Compliance",
      ],
    },
  ];

  const [selectedData, setSelectedData] = useState(FunctionsData[0]);
  const [activeButton, setActiveButton] = useState(1);
  const handleButtonClick = (id) => {
    const data = FunctionsData.find((item) => item.id === id);
    setSelectedData(data);
    setActiveButton(id);
  };

  return (
    <div className="m-0 bg-gray-100 px-10 text-center items-center font-nunito py-20">
      <h1 className="text-center text-customGrayText text-4xl font-extrabold leading-normal">
        Achieve Complete Process <br></br>Automation, Digitalisation and
        <br></br>
        Compliance across Laboratory <br></br>Operations
      </h1>
      <p className="pt-10 text-base">
        Seamlessly manage your tests, samples, experiments & reports, Capture
        data from any<br></br> lab instrument,<br></br> Record and execute your
        test procedures and more !
      </p>
      <div className="space-x-4 py-4">
        <button
          className={`p-4 rounded-3xl font-bold ${
            activeButton === 1
              ? "bg-customBlue text-white "
              : "bg-white text-customBlue border-2 border-gray-200"
          }`}
          onClick={() => handleButtonClick(1)}
        >
          Sample Testing
        </button>
        <button
          className={`p-4 rounded-3xl font-bold ${
            activeButton === 2
              ? "bg-customBlue text-white"
              : "bg-white text-customBlue border-2 border-gray-200"
          }`}
          onClick={() => handleButtonClick(2)}
        >
          Experiment/Task Execution
        </button>
        <button
          className={`p-4 rounded-3xl font-bold ${
            activeButton === 3
              ? "bg-customBlue text-white"
              : "bg-white text-customBlue border-2 border-gray-200"
          }`}
          onClick={() => handleButtonClick(3)}
        >
          Instrument Data Capture
        </button>
        <button
          className={`p-4 rounded-3xl font-bold ${
            activeButton === 4
              ? "bg-customBlue text-white"
              : "bg-white text-customBlue border-2 border-gray-200"
          }`}
          onClick={() => handleButtonClick(4)}
        >
          Document Management
        </button>
      </div>
      <div className="m-0 bg-gray-100 px-32 text-center items-center font-nunito ">
        {<SampleTesting data={selectedData} />}
      </div>
    </div>
  );
};
