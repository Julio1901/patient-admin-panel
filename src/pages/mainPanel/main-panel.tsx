
import axios from 'axios';
import { PATIENTS_ENDPOIN } from '../../common/network/endpoints';
import { IPatient } from '../../common/network/interfaces';
import { useEffect, useRef } from 'react';


export const MainPanel = () => {
    
    const initialized = useRef(false)

    useEffect( () => {
        if (!initialized.current) {
            initialized.current = true
            fetchData()
            console.log('chamou')
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
        <div>
            <h1>Main Panel</h1>
        </div>
    )
       
        
}