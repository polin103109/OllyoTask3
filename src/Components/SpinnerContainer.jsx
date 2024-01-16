import React,{useState} from 'react'
import { useSpinnerContext } from '../Context/Wheelcontext';
import SpinWheel from './Spinwheel';
function SpinnerContainer() {
    const [isSpinnerOpen, setIsSpinnerOpen] = useState(true);
    const { isSpinnerReadyToSpin, setIsSpinnerReadyToSpin } =
        useSpinnerContext();
    
    return (
        <div >
            {isSpinnerOpen ? (
                <>
                    <div >
                        <SpinWheel setIsSpinnerOpen={setIsSpinnerOpen} />
                    </div>
                    {isSpinnerReadyToSpin ? (
                        <UserForm />
                    ) : (
                        <button 
                        onClick={() => setIsSpinnerReadyToSpin(true)}
                    >
                        Spin To Win</button>
    
                        
                    )}
                </>
            ) : (
                <SpinnerForm setIsSpinnerOpen={setIsSpinnerOpen} />
            )}
            {isSpinnerReadyToSpin && (
                <button 
                onClick={() => setIsSpinnerReadyToSpin(false)}
                color="danger"
            ></button>
                  
               
            )}
    </div>
  )
}

export default SpinnerContainer;