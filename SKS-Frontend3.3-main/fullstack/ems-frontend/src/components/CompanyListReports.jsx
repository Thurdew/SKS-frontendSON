import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listCompanies } from "../services/CompanyService";
import FooterComponent from "./FooterComponent";
import SideBar from "./SideBar";
import './CompanyReports.css';

export const ComapnyListReports = () => {
    const [companies, setCompanies] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {  
        getAllCompanies();
    },[])

    function getAllCompanies(){
        listCompanies()
            .then((response) => {
                setCompanies(response.data);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const detailRapor = () => {
        navigator('/companyRaportsDetails')
    }

    return (
        <div className="container">
            <SideBar />
            <div className="content">
                <div>
                    <div>
                        <h2 className="list-company-title7">Firma Raporları</h2> 
                        <button className="btn btn-secondary mb-2" onClick={detailRapor}>Rapor Detayları</button>
                    </div>
                    <table className="table table-striped table-bordered custom-table">
                        <thead>
                            <tr>
                                <th>Firma</th>  
                            </tr>
                        </thead>
                        <tbody>
                            {companies.map(company => (
                                <tr key={company.id}>
                                    <td>{company.companyName}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="background-logo"></div> {/* Şeffaf logo */}
            <FooterComponent />
        </div>
    );
}

export default ComapnyListReports;
