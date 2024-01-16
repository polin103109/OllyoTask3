import React from 'react'
import { useSpinnerContext } from '../Context/Wheelcontext';
import WheelComponent from './Canvas';
import { useUserContext } from '../Context/UserContext';


export const SpinWheel = ({ setIsSpinnerOpen }) => {
    const { setIsSpinning, setIsSpinnerReadyToSpin } = useSpinnerContext();
    const { setUsers } = useUserContext();

    const onFinished = () => {
        if (winner !== undefined) {
            setUsers((prev) => {
                if (prev.length === 0) return prev;

                if (!prev[prev.length - 1].discountId) {
                    prev[prev.length - 1].discountId = winner;
                }

                return [...prev];
                
            });
        }

        setIsSpinning(false);
    };

    const handleEditSpinner = () => {
        setIsSpinnerOpen(false);
        setIsSpinnerReadyToSpin(false);
    };

    return (
        <>
            <div className={`${styles.spinnerWheelContainer}`}>
                <WheelComponent
                    className={styles.wheel}
                    onFinished={(winner) => onFinished(winner)}
                    isOnlyOnce={false}
                    size={300}
                    upDuration={100}
                    downDuration={1000}
                    fontFamily="Inter"
                />
                <div className={styles.arrow}>
                    
                </div>
                <button>className={styles.editBtn}
                    isIcon
                    rounded
                    onClick={handleEditSpinner}</button>
            
                
            </div>
        </>
    );
};

