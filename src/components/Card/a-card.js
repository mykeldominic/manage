import React from 'react'
import './a-card.css'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

const card = ({ props, cardinfo }) => {
    console.log(cardinfo)
    return (
        <div>
            <div className="a-cards">
                {cardinfo.map(row => (
                    <div className="a-card">
                        <div className="a-initials">{row.initials}</div>
                        <p className="a-card-name">{row.name}</p>
                        <p className="a-card-email">{row.email}</p>

                        <div className="a-card-foot">
                            <Button className="a-edit-btn">EDIT</Button>
                            <Button className="a-block-btn">BLOCK</Button>
                            <DeleteIcon className="a-delete-btn" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default card