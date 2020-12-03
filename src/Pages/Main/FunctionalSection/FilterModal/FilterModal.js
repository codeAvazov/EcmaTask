import React from 'react';
import './FilterModal.scss';

function FilterModal({openModal}) {
    return (
        <div className={!openModal ? 'filter' : 'filter openFilter'}>
            <div className='selects'>
                <div className='select'>
                    <div>Kursni tanlang</div>
                    <div>
                        <i className="ri-arrow-down-s-line"/>
                    </div>
                </div>
                <div className='select'>
                    <div>Modulni tanlang</div>
                    <div>
                        <i className="ri-arrow-down-s-line"/>
                    </div>
                </div>
                <div className='select'>
                    <div>Darsni tanlang</div>
                    <div>
                        <i className="ri-arrow-down-s-line"/>
                    </div>
                </div>
            </div>
            <div className='checks'>
                <div className='checkboxFilter'>
                    <div className='d-flex pt-2 mr-2'>
                        <label
                            className='labelWrap'
                            style={{borderColor : '#00B533'}}
                        >
                            <div className='labelBg'/>
                        </label>
                    </div>
                    <div>Balans boyicha o`tish</div>
                </div>
                <div className='checkboxFilter'>
                    <div className='d-flex pt-2 mr-2'>
                        <label
                            className='labelWrap'
                            style={{borderColor : '#00B533'}}
                        >
                            <div className='labelBg'/>
                        </label>
                    </div>
                    <div>Balans boyicha o`tish</div>
                </div>
                <div className='checkboxFilter'>
                    <div className='d-flex pt-2 mr-2'>
                        <label
                            className='labelWrap'
                            style={{borderColor : '#00B533'}}
                        >
                            <div className='labelBg'/>
                        </label>
                    </div>
                    <div>Balans boyicha o`tish</div>
                </div>
                <div className='checkboxFilter'>
                    <div className='d-flex pt-2 mr-2'>
                        <label
                            className='labelWrap'
                            style={{borderColor : '#00B533'}}
                        >
                            <div className='labelBg'/>
                        </label>
                    </div>
                    <div>Balans boyicha o`tish</div>
                </div>
                <div className='checkboxFilter'>
                    <div className='d-flex pt-2 mr-2'>
                        <label
                            className='labelWrap'
                            style={{borderColor : '#00B533'}}
                        >
                            <div className='labelBg'/>
                        </label>
                    </div>
                    <div>Balans boyicha o`tish</div>
                </div>
                <div className='checkboxFilter'>
                    <div className='d-flex pt-2 mr-2'>
                        <label
                            className='labelWrap'
                            style={{borderColor : '#00B533'}}
                        >
                            <div className='labelBg'/>
                        </label>
                    </div>
                    <div>Balans boyicha o`tish</div>
                </div>
                <div className='checkboxFilter'>
                    <div className='d-flex pt-2 mr-2'>
                        <label
                            className='labelWrap'
                            style={{borderColor : '#00B533'}}
                        >
                            <div className='labelBg'/>
                        </label>
                    </div>
                    <div>Balans boyicha o`tish</div>
                </div>
            </div>
        </div>
    );
}

export default FilterModal;