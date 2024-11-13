import jsPDF from 'jspdf';

const BasicPdfGenerator = () => {
  const generatePDF = () => {
    const doc = new jsPDF();

    // Add text
    doc.text('Hello World!', 20, 20);
    doc.text('This is sample PDF', 20, 30);

    // Save the PDF
    doc.save('sample.pdf');
  };

  return <button onClick={generatePDF}>Generate Simple PDF</button>;
};

export default BasicPdfGenerator;
