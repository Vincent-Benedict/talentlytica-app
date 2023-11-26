import './TableHeader.css'

export default function TableHeader() {
    return (
        <div className='table-container'>
            <div className='sws-identity'>
                
            </div>
            <div className='sws-table'>
                <div className='score-header score-1'>
                    <p>Aspek</p>
                    <p>Penilaian 1</p>
                </div>
                <div className='score-header score-2'>
                    <p>Aspek</p>
                    <p>Penilaian 2</p>
                </div>
                <div className='score-header score-3'>
                    <p>Aspek</p>
                    <p>Penilaian 3</p>
                </div>
                <div className='score-header score-4'>
                    <p>Aspek</p>
                    <p>Penilaian 4</p>
                </div>
            </div>
        </div>
    )
}