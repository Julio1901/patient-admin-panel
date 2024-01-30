
import axios from 'axios';
import { PATIENTS_ENDPOIN } from '../../common/network/endpoints';
import { IPatient } from '../../common/network/interfaces';
import { useEffect, useRef } from 'react';
import { MainContainer } from './styles';
import { DefaultLateralMenu } from '../../components/defaultLateralMenu/defaultLateralMenu';



export const MainPanel = () => {
    
    const initialized = useRef(false)

    useEffect( () => {
        if (!initialized.current) {
            initialized.current = true
            fetchData()
        }
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get<IPatient[]>(PATIENTS_ENDPOIN)
            console.log(response)
        }catch (error: any) {
            alert(`Error fetching data: ${(error as Error).message ?? 'Unknown error'}`);
          }

    }

    return(
        <MainContainer>
            <DefaultLateralMenu/>
            <h1>Main Panel</h1>
        </MainContainer>
    )
       
        
}