import { useState } from 'react';
import jsPDF from 'jspdf';

const FormPdfGenerator = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateFormPDF = () => {
    const doc = new jsPDF();
    
    // Title
    doc.setFontSize(20);
    doc.text("Form Submission", 105, 15, { align: "center" });
    
    // Content
    doc.setFontSize(12);
    doc.text(`Name: ${formData.name}`, 20, 30);
    doc.text(`Email: ${formData.email}`, 20, 40);
    
    // Handle long messages with text wrapping
    const splitMessage = doc.splitTextToSize(`Message: ${formData.message}`, 180);
    doc.text(splitMessage, 20, 50);
    
    doc.save("form-submission.pdf");
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={generateFormPDF}>
          Generate Form PDF
        </button>
      </form>
    </div>
  );
};

export default FormPdfGenerator;