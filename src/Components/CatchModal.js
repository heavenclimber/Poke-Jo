import React, { useState } from 'react'
import SuccessCaught from './SuccessCaught'
import FailedCaught from './FailedCaught'
export default function CatchModal({ name, data, closeModal }) {


    const [pokeThrow, setThrow] = useState(true)
    const [modalShow, setModal] = useState(false)

    const caught = Math.random() < 0.5
    setTimeout(() => {
        setThrow(false);
        setModal(true);
    }, 3000)

    return (
        <div className='catchModalContainer' data-testid='catchmodalcontainer'>
            {modalShow && <div className='catchModal'>
                {caught ? <SuccessCaught name={name} data={data}  closeModal={closeModal}/> : <FailedCaught name={name} closeModal={closeModal} />}
            </div>}
            {pokeThrow && <div className="pokeball">
                <div className="pokeball__button"></div>
            </div>}

        </div>
    )
}
