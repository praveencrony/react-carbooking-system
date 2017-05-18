import React from 'react';
import { Link } from 'react-router';

class BookingList extends React.Component {

    constructor(props){

        super(props);

        //this.handleDelete = this.handleDelete.bind(this);
    }


    handleDelete(item)
    {
        this.props.handleDelete(item);
    }

    render(props) {

        var  booking_list = this.props.booking;

        booking_list = booking_list.map((item, index) =>
        {
            return(

                <li className="pet-item media" key={index}>
                    <div className="media-left">
                        <button className="pet-delete btn btn-xs btn-danger" onClick={this.handleDelete.bind(this,item)}>
                            <span className="glyphicon glyphicon-remove"></span>
                        </button>
                    </div>
                    <div className="pet-info media-body">
                        <div className="pet-head">
                            <span className="pet-name">{item.carName}</span>
                            <span className="apt-date pull-right">{item.bokDate}</span>
                        </div>
                        <div className="owner-name"><span className="label-item">Name:</span>
                            {item.ownerName}
                        </div>
                        <div className="apt-notes">
                            {item.bokNotes}
                        </div>
                    </div>
                </li>

            )
        });


      return (
          <div>
            <div className="row">
                <div>
                <ul className="item-list media-list">
                    {booking_list}
                </ul>
                </div>
            </div>

        </div>
      );
   }
}

export default BookingList;
