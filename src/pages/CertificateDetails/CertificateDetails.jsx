import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { apiServer } from '../../utils/http';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';
// import jsPDF from 'jspdf';
const CertificateDetails = () => {
  const { id } = useParams();
  const [certificateData, setCertificateData] = useState(null);
  const certificateRef = useRef(null);
  const [qrCodeData, setQrCodeData] = useState('');
//   const [showSaveOptions, setShowSaveOptions] = useState(false);
  useEffect(() => {
    const fetchCertificateDetails = async () => {
      try {
        const response = await apiServer.get(`/certificate/bySub/${id}`);
        setCertificateData(response.data);
        setQrCodeData(window.location.href);
      } catch (error) {
        console.error('Error fetching certificate details:', error);
      }
    };

    fetchCertificateDetails();

   
    return () => {
     
    };
  }, [id]); 

const formatDuration = (durationInSeconds) => {
    const date = new Date(null);
    date.setSeconds(durationInSeconds);
    return date.toISOString().substr(11, 8);
  };
  

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`;
  };

  const handleDownloadImage = async () => {
    try {
      const canvas = await html2canvas(certificateRef.current);
      const imgData = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = imgData;
      link.download = `Giấy chứng nhận ${id}.png`;
      link.click();
    } catch (error) {
      console.error('Error creating image:', error);
    }
  };

//   const handleDownloadPDF = async () => {
//     try {
//       const canvas = await html2canvas(certificateRef.current);

//       const pdf = new jsPDF({
//         orientation: 'landscape', // Adjust the orientation as needed
//         unit: 'mm',
//         format: 'a4',
//       });

//       pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0);

//       pdf.save(`Giấy chứng nhận ${id}.pdf`);
//     } catch (error) {
//       console.error('Error creating PDF:', error);
//     }
//   };

//   const handleSaveOptionsClick = () => {
//     setShowSaveOptions((prev) => !prev);
//   };

  return (
    <>
      {certificateData ? (
     <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
     <div className="bg-gradient-to-r from-blue-400 to-green-500 p-8 mx-auto w-full rounded-lg shadow-md flex flex-col overflow-x-auto">
       <div  ref={certificateRef}  style={{
    background: 'linear-gradient(-50deg, rgb(254, 254, 192), #fff, rgb(254, 254, 192), #fff, rgb(254, 254, 192), #fff, rgb(254, 254, 192), #fff)',
  }} className="bg-yellow-50 p-8 min-w-[800px] mx-auto max-w-3xl rounded-lg shadow-md flex flex-col relative mt-3 mb-3">
            <img
              className="w-auto h-8 absolute top-3 left-2"
              src="/images/logo.png"
              alt="Logo"
            />
            <p className="text-sm text-right absolute top-3 right-2">
              <span className="text-xs">
                Mã khen thưởng: {certificateData.sub_id}
              </span>
              <br />
              <span className="text-xs">
                Đường dẫn: <Link to={`/certification/${certificateData.sub_id}`} target="_blank" rel="noopener noreferrer">{qrCodeData}</Link>
              </span>
            </p>
            <h2 className="text-4xl font-bold mb-4 mt-12 text-center text-red-500">GIẤY CHỨNG NHẬN</h2>
            <div className="">
              <p className="text-3xl font-semibold text-orange-600 mt-3 mb-12">
                Tên khóa học: <span className="font-italic">{certificateData.course.name}</span>
              </p>
              <p className="text-xl font-semibold my-10">
                Họ và tên: <span className="font-italic italic">{certificateData.user.fullname}</span>
              </p>
              <p className="text-base my-2 font-semibold">
                Thời lượng: <span className="font-normal">{formatDuration(certificateData.total_duration)}
                </span>
              </p>
              <p className="text-base font-semibold">Ngày cấp:  <span className="font-normal">{formatDateTime(certificateData.created_at)}</span></p>
            </div>
            <div className="text-center mt-4 absolute bottom-8 right-10">
                <QRCode value={qrCodeData} size={100} />
              </div>

          </div>
         
        </div>
        <div className="flex justify-center mt-4">
              <button onClick={handleDownloadImage} className="mb-3 bg-red-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
                Lưu ảnh (PNG)
              </button>
              {/* {showSaveOptions && ( */}
                {/* <div className="flex flex-col absolute top-16 right-0 bg-white rounded-md shadow-md">
                  <button onClick={handleDownloadImage} className="py-2 px-4 hover:bg-gray-100">
                    Lưu ảnh (PNG)
                  </button> */}
                  {/* <button onClick={handleDownloadPDF} className="py-2 px-4 hover:bg-gray-100">
                    Lưu PDF
                  </button> */}
                {/* </div> */}
              {/* )} */}
            </div>
        </div>
      ) : (
        <p className="text-lg text-center">Không có dữ liệu</p>
        
      )}
    </>
  );
};



export default CertificateDetails;
