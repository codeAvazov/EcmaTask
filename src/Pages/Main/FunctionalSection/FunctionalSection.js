import React, {useState} from 'react';
import './FunctionalSection.scss';
import FilterModal from "./FilterModal/FilterModal";

function FunctionalSection() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='funcBlock'>
            <div className='left_section position-relative'>
                <div className='search_input_block'>
                    <i className="ri-search-line"/>
                    <i className="ri-filter-3-line goRight" onClick={openModal} />
                    <input type="text" className='search_input' placeholder={'Search'} />
                </div>
                <div className={'iconSec'}><i className="ri-refresh-line"/></div>
                <FilterModal openModal={isOpen}/>
            </div>
            <div className='right_section'>
                <div className={'iconSec'}><i className="ri-calendar-check-line"/></div>
                <div className='ml-3 d-flex align-items-center justify-content-center mobile-layout'>
                    <div className='excel'>
                        <div><i className="ri-file-excel-2-line"/></div>
                        <div>Export to excel</div>
                    </div>
                    <div className='msg'>
                        <div><i className="ri-mail-send-line"/></div>
                        <div>Xabar yuborish</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FunctionalSection;