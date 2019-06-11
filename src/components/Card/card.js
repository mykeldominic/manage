import React from 'react'
import './card.css'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

const card = ({ props, cardimages, cardinfo }) => {
    console.log(cardimages)
    console.log(cardinfo)
    return (
        <div>
            <div className="cards">
                <div className="card">
                    <img src="/images/create-advert.png" className="card-img" />
                </div>
                {cardinfo.map(row => (
                    <div className="card">
                        <img src={row.imgsrc} className="card-img" />
                        <div key={row.carddate} className="card-info">
                            <div className="card-info-inn">
                                <p className="card-header">{row.cardheader}</p>
                                <p className="card-date">{row.carddate}</p>

                                <div className="card-foot">
                                    <Button className="view-btn">VIEW</Button>
                                    <DeleteIcon className="delete-btn" />

                                    <div className="initials">{row.initials}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default card