import jsPDF from 'jspdf';

const FormattedPdfGenerator = () => {
  const generateFormattedPDF = () => {
    const doc = new jsPDF();

    // Set font
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('Document Title', 105, 20, { align: 'center' });

    // Reset font
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);

    // Add paragraphs
    const text =
      'This is a long paragraph that will automatically wrap to the next line when it reaches the margin. It demonstrates text wrapping capabilities.';
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    const splitText = doc.splitTextToSize(text, 180);
    doc.text(splitText, 15, 40);

    // Add new page
    doc.addPage();
    doc.text('This is page 2!', 20, 20);

    // Save
    doc.save('formatted.pdf');
  };

  return <button onClick={generateFormattedPDF}>Generate Formatted PDF</button>;
};

export default FormattedPdfGenerator;
