import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons"; // Değişiklik yapıldı

const HeaderFirstComponent = () => {
  const styles = {
    navbarBrand: {
      display: 'flex',
      alignItems: 'center'
    },
    logo: {
      marginRight: '10px' // Ayarlamak istediğiniz boşluğa göre değeri ayarlayın
    },
    icon: {
      marginLeft: '10px', // Ayarlamak istediğiniz boşluğa göre değeri ayarlayın
      color: '#fff', // İkon rengi
      fontSize: '20px' // İkon boyutu
    }
  };

  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:5173" style={styles.navbarBrand}>
            <img src="src/assets/sks.jpg" alt="Logo" width="55" height="40" className="d-inline-block align-text-top" style={styles.logo} />
            SEVKİYAT KONTROL SİSTEMLERİ
          </a>
          {/* İkon bağlantıları */}
          <div>
            <a href="mailto:sevkiyatkontrolsistemi@gmail.com" style={styles.icon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
            <a href="https://www.instagram.com/sevkiyatkontrolsistemleri/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://x.com/SKS_2024?t=Unfw7tE7Z8a6kJit2ngWBA&s=08" target="_blank" rel="noopener noreferrer" style={styles.icon}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderFirstComponent;
