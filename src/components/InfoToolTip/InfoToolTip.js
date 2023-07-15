import "./InfoToolTip.css"

function InfoToolTip({isOpen, onClose, infoToolTipType, infoToolTipText }) {

    
    return (
        <div className={`popup ${isOpen && 'popup_opend'}`}>
            <div className="popup__container">
                <button className="popup__close-button" type="button" onClick={onClose} />
                <div className={`popup__info-tooltip ${!infoToolTipType ? 'popup__info-tooltip_err' : ''}`} />
                <h3
                    className="popup__title popup__title_registration">
                    {infoToolTipText}
                </h3>
            </div>
        </div>
    )

}

export default InfoToolTip