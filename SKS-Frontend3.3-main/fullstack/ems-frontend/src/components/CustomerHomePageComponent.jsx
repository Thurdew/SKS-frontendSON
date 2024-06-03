import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderFirstComponent from './HeaderFirstComponent';
import FooterComponent from "./FooterComponent";

const CustomerHomePageComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [shipments, setShipments] = useState(location.state?.shipments || []);
  const [teslimatNo, setTeslimatNo] = useState(location.state?.teslimatNo || '');

  useEffect(() => {
    if (location.state) {
      if (location.state.shipments) {
        setShipments(location.state.shipments);
      }
      if (location.state.teslimatNo) {
        setTeslimatNo(location.state.teslimatNo);
      }
    }
  }, [location.state]);

  const handleLogout = () => {
    // Burada çıkış işlemleri yapılabilir (örn. kullanıcı oturumunu sonlandırma, token temizleme vs.)
    navigate('/'); // Giriş sayfasına yönlendirme
  };

  const handleNewQuery = () => {
    // Yeni sorgulama sayfasına yönlendirme
    navigate('/customerlogin');
  };

  return (
    <div className='container'>
      <HeaderFirstComponent />
      <div className='content'>
        <h2 className='text-center'>Müşteri Takip Ekranı</h2>
        <br /><br /><br />
        <h4 className='text-center'>Teslimat Numarası: {teslimatNo}</h4>
        <br /><br />
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Tarih</th>
              <th>Firma</th>
              <th>Yüklendiği Gemi</th>
              <th>Araç Sınıfı</th>
              <th>Çekici</th>
              <th>Dorse</th>
              <th>Kalkış Yeri</th>
              <th>Varış Yeri</th>
              <th>Ürün</th>
              <th>Fiyat</th>
            </tr>
          </thead>
          <tbody>
            {shipments.map((shipment) => (
              <tr key={shipment.id}>
                <td>{shipment.shipmentDate}</td>
                <td>{shipment.company.companyName}</td>
                <td>{shipment.ship.shipName}</td>
                <td>{shipment.vehicles[0]?.vehicleType}</td>
                <td>{shipment.vehicles[0]?.towPlate}</td>
                <td>{shipment.vehicles[0]?.trailerPlate}</td>
                <td>{shipment.departurePoint}</td>
                <td>{shipment.destinationPoint}</td>
                <td>{shipment.product.productName}</td>
                <td>{shipment.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ marginTop: '20px', textAlign: 'center' }}> {/* Başlık ortalamak için textAlign: 'center' ekledik */}
          <button className="btn btn-primary" onClick={handleNewQuery} style={{ marginRight: '10px' }}>Yeni Sorgulama Yap</button>
          <button className="btn btn-danger" onClick={handleLogout}>Çıkış Yap</button>
        </div>
      </div>
      <div className="background-logo"></div>
      <FooterComponent />
    </div>
  );
}

export default CustomerHomePageComponent;
