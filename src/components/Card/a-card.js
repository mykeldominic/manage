import React from 'react'
import './a-card.css'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'

const card = ({ props, data, cardinfo }) => {
    console.log(cardinfo)

    var getInitials = function (string) {
        var names = string.split(' '),
            initials = names[0].substring(0, 1).toUpperCase();
        
        if (names.length > 1) {
            initials += names[names.length - 1].substring(0, 1).toUpperCase();
        }
        return initials;
    };

    return (
        <div>
            <div className="a-cards">
                {cardinfo.map(row => (
                    <div key={row.userId} className="a-card">
                        <div className="a-initials">{(getInitials(row.firstName))}{(getInitials(row.lastName))}</div>
                        <p className="a-card-name">{row.firstName} {row.lastName}</p>
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