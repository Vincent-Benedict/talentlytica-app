import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Mahasiswa from '../../components/Mahasiswa/Mahasiswa';
import './HomePage.css'
import TableHeader from '../../components/TableHeader/TableHeader';
import MahasiswaModel from '../../models/Mahasiswa/Mahasiswa';

export default function HomePage(){

    const [mahasiswas, setMahasiswas] = useState([]);
    
    useEffect(() => {
        let mahasiswasTemp = [];
        if(mahasiswas.length == 0) {
            for (let i = 0; i < 10; i++) {
                mahasiswasTemp.push(new MahasiswaModel(i, i+1, 0, 0, 0, 0))
            }
            setMahasiswas(mahasiswasTemp);
        }
    });
    

    const handleChildVariableChange = (value, id, aspekPenilaian) => {

        console.log('value:', value, ' dari mahasiswa: ', id+1, ' aspek penilaian: ', aspekPenilaian);
        if(aspekPenilaian == 1){
            mahasiswas[id].nilai1 = +value;
        } else if(aspekPenilaian == 2) {
            mahasiswas[id].nilai2 = +value;
        } else if(aspekPenilaian == 3) {
            mahasiswas[id].nilai3 = +value;
        } else if(aspekPenilaian == 4) {
            mahasiswas[id].nilai4 = +value;
        }
    };

    const submitHandle = () => {
        const jsonData = {
            aspek_penilaian_1: {
                mahasiswa_1: mahasiswas[0].nilai1,
                mahasiswa_2: mahasiswas[1].nilai1,
                mahasiswa_3: mahasiswas[2].nilai1,
                mahasiswa_4: mahasiswas[3].nilai1,
                mahasiswa_5: mahasiswas[4].nilai1,
                mahasiswa_6: mahasiswas[5].nilai1,
                mahasiswa_7: mahasiswas[6].nilai1,
                mahasiswa_8: mahasiswas[7].nilai1,
                mahasiswa_9: mahasiswas[8].nilai1,
                mahasiswa_10: mahasiswas[9].nilai1,
            },
            aspek_penilaian_2: {
                mahasiswa_1: mahasiswas[0].nilai2,
                mahasiswa_2: mahasiswas[1].nilai2,
                mahasiswa_3: mahasiswas[2].nilai2,
                mahasiswa_4: mahasiswas[3].nilai2,
                mahasiswa_5: mahasiswas[4].nilai2,
                mahasiswa_6: mahasiswas[5].nilai2,
                mahasiswa_7: mahasiswas[6].nilai2,
                mahasiswa_8: mahasiswas[7].nilai2,
                mahasiswa_9: mahasiswas[8].nilai2,
                mahasiswa_10: mahasiswas[9].nilai2,
            },
            aspek_penilaian_3: {
                mahasiswa_1: mahasiswas[0].nilai3,
                mahasiswa_2: mahasiswas[1].nilai3,
                mahasiswa_3: mahasiswas[2].nilai3,
                mahasiswa_4: mahasiswas[3].nilai3,
                mahasiswa_5: mahasiswas[4].nilai3,
                mahasiswa_6: mahasiswas[5].nilai3,
                mahasiswa_7: mahasiswas[6].nilai3,
                mahasiswa_8: mahasiswas[7].nilai3,
                mahasiswa_9: mahasiswas[8].nilai3,
                mahasiswa_10: mahasiswas[9].nilai3,
            },
            aspek_penilaian_4: {
                mahasiswa_1: mahasiswas[0].nilai4,
                mahasiswa_2: mahasiswas[1].nilai4,
                mahasiswa_3: mahasiswas[2].nilai4,
                mahasiswa_4: mahasiswas[3].nilai4,
                mahasiswa_5: mahasiswas[4].nilai4,
                mahasiswa_6: mahasiswas[5].nilai4,
                mahasiswa_7: mahasiswas[6].nilai4,
                mahasiswa_8: mahasiswas[7].nilai4,
                mahasiswa_9: mahasiswas[8].nilai4,
                mahasiswa_10: mahasiswas[9].nilai4,
            },
        };
    
        const jsonString = JSON.stringify(jsonData, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
    
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'mahasiswa.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className='home-page-container'>
            <Header/>
            <TableHeader/>
            {
                mahasiswas.map((m,index) => 
                    // console.log(m.name)
                    <Mahasiswa key={index} index={index} mahasiswa={m}
                        onChildVariableChange={handleChildVariableChange} />
                )
            }
            <div className='button-submit'>
                <button onClick={submitHandle}>Simpan</button>
            </div>
        </div>
        
    )
}