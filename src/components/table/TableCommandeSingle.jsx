import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const TotalCa = styled.div`
display : flex;
justify-content: flex-end;
font-weight: 900;
`

const TableCommandeStyle = styled.table`
      width: 100%;
    `

const TableCommandeSingle = (commandes) => {


    //const {items: clients, loading, load} = usePaginationFetch('http://127.0.0.1:8000/api/clients/' + idUser);

    const headTable = ["Type", "Magasine", "Prix", "Status", ""];

    //useEffect(() => load(), [load])

    return(
        <div>
            {/*{!loading && 'Chargement...'}*/}
            <TableCommandeStyle>
                 <thead>
                    <tr>
                        {headTable.map((item, key) => <th key={key}>{item}</th>)}
                    </tr>
                </thead>
                <tbody>
                {commandes.commandes.map( (commande,key) => (
                    <tr key={key}>
                        <td><Link to={{pathname: `/commande/${commande.id}`}}>Type de produit</Link></td>
                        <td><Link to={{pathname: `/commande/${commande.id}`}}>{commande.fin}</Link></td>
                        <td><Link to={{pathname: `/commande/${commande.id}`}}>Champ manquant</Link></td>
                        <td><Link to={{pathname: `/commande/${commande.id}`}}>{commande.facturation}</Link></td>
                    </tr>
                ))}
                </tbody>
            </TableCommandeStyle>
            {/*{JSON.stringify(client)}*/}
            <TotalCa>Total de CA : 1854€</TotalCa>

        </div>
    )
}
export default TableCommandeSingle;