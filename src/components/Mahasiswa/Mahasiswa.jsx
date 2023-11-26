import React, { useState, useEffect } from 'react';
import userLogo from '../../assets/user-logo.png';
import './Mahasiswa.css'

export default function Mahasiswa(props) {

    const mahasiswa = props.mahasiswa

    const [aspekPenilaian1, setAspekPenilaian1] = useState(mahasiswa.nilai1);
    const [aspekPenilaian2, setAspekPenilaian2] = useState(mahasiswa.nilai2);
    const [aspekPenilaian3, setAspekPenilaian3] = useState(mahasiswa.nilai3);
    const [aspekPenilaian4, setAspekPenilaian4] = useState(mahasiswa.nilai4);

    const handleDropdownChange1 = (event) => {
        props.onChildVariableChange(event.target.value, mahasiswa.id, 1)
        setAspekPenilaian1(event.target.value);
        
      };
    const handleDropdownChange2 = (event) => {
        props.onChildVariableChange(event.target.value, mahasiswa.id, 2)
        setAspekPenilaian2(event.target.value);
      };
    const handleDropdownChange3 = (event) => {
        props.onChildVariableChange(event.target.value, mahasiswa.id, 3)
        setAspekPenilaian3(event.target.value);
      };
    const handleDropdownChange4 = (event) => {
        props.onChildVariableChange(event.target.value, mahasiswa.id, 4)
        setAspekPenilaian4(event.target.value);
      };
   
    

    

    return(
        <div className='sws-container'>
            <div className='sws-identity'>
                <div className='sws-image'>
                    <img src={userLogo} alt="" className='sws-identity-image'/>
                </div>
                <div className='sws-name'>
                    <p>Mahasiswa {mahasiswa.name}</p>
                </div>
            </div>
            <div className='sws-score'>
                <div className='score score-1'>
                    <select value={aspekPenilaian1} onChange={handleDropdownChange1}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className='score score-2'>
                    <select value={aspekPenilaian2} onChange={handleDropdownChange2}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className='score score-3'>
                    <select value={aspekPenilaian3} onChange={handleDropdownChange3}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div className='score score-4'>
                    <select value={aspekPenilaian4} onChange={handleDropdownChange4}>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
        </div>
    );
}