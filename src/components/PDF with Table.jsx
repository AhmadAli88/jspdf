import jsPDF from 'jspdf';

const TablePdfGenerator = () => {
  const generateTablePDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text('Sales Report', 105, 15, { align: 'center' });

    // Table data
    const tableData = [
      ['Name', 'Age', 'City'],
      ['John Doe', '30', 'New York'],
      ['Jane Smith', '25', 'London'],
      ['Bob Johnson', '35', 'Paris'],
    ];

    // Set initial y position
    let y = 30;

    // Set styles
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);

    // Draw table
    tableData.forEach((row, index) => {
      let x = 20;

      // Header row
      if (index === 0) {
        doc.setFont('helvetica', 'bold');
      } else {
        doc.setFont('helvetica', 'normal');
      }

      row.forEach((cell) => {
        doc.text(cell.toString(), x, y);
        x += 50;
      });

      // Add line below each row
      doc.line(20, y + 2, 170, y + 2);
      y += 10;
    });

    doc.save('table-report.pdf');
  };

  return <button onClick={generateTablePDF}>Generate Table PDF</button>;
};

export default TablePdfGenerator;
