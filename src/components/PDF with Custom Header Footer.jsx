
import jsPDF from 'jspdf';

const HeaderFooterPdfGenerator = () => {
  const generatePDFWithHeaderFooter = () => {
    const doc = new jsPDF();
    
    // Header function
    const addHeader = () => {
      doc.setFontSize(8);
      doc.text("Company Name", 20, 10);
      doc.text(new Date().toLocaleString(), 180, 10, { align: "right" });
      doc.line(20, 12, 190, 12);
    };
    
    // Footer function
    const addFooter = () => {
      const pageCount = doc.internal.getNumberOfPages();
      doc.setFontSize(8);
      for(let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.text(`Page ${i} of ${pageCount}`, 105, 290, { align: "center" });
        doc.text("© 2024 Your Company", 20, 290);
      }
    };
    
    // Add header
    addHeader();
    
    // Add content
    doc.setFontSize(12);
    doc.text("Main Content Goes Here", 20, 30);
    
    // Add lots of content to demonstrate multiple pages
    for(let i = 0; i < 5; i++) {
      doc.text(`Content block ${i + 1}`, 20, 50 + (i * 10));
      if((i + 1) % 20 === 0) {
        doc.addPage();
        addHeader();
      }
    }
    
    // Add footer to all pages
    addFooter();
    
    doc.save("with-header-footer.pdf");
  };

  return (
    <button onClick={generatePDFWithHeaderFooter}>
      Generate PDF with Header/Footer
    </button>
  );
};

export default HeaderFooterPdfGenerator;