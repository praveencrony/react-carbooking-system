/* Booking Form Component  */
import React from 'react';

class AddBooking extends React.Component {

    constructor(props){

        super(props);

        this.toggleFormDisplay  = this.toggleFormDisplay.bind(this);
        this.handleAdd          = this.handleAdd.bind(this);

        this.state = {
            error : false
        }
    }


    toggleFormDisplay()
    {
       this.props.handleFormToggle();
    }

    handleAdd(e)
    {

        e.preventDefault();

        if(this.refs.inputCarName.value != '' &&
                this.refs.inputOwnerName.value && this.refs.inputAptDate.value &&
                        this.refs.inputAptTime.value && this.refs.inputAptNotes.value)
        {


                var bookingData = {
                        carName: this.refs.inputCarName.value,
                        ownerName: this.refs.inputOwnerName.value,
                        bokDate: this.refs.inputAptDate.value + ' ' +
                        this.refs.inputAptTime.value,
                        bokNotes: this.refs.inputAptNotes.value

                }



                this.refs.inputCarName.value = '',
                this.refs.inputOwnerName.value = '',
                this.refs.inputAptDate.value = '',
                this.refs.inputAptTime.value = '',
                this.refs.inputAptNotes.value = ''

                this.props.AddBooking(bookingData);

                 this.setState({
                        error:false
                    });
        }
        else{
            this.setState({
                error:true
            });
        }
    }

    render(props) {

         var formControl = {
            display: this.props.displayForm ? 'block' : 'none'
        };

        var errorControl = {
            display: this.state.error ? 'block' : 'none'
        };
      return (
             <div className="panel panel-primary">
                <div className="panel-heading apt-addheading" onClick={ this.toggleFormDisplay }>
                    <span className="glyphicon glyphicon-plus"></span> Add Booking
                </div>
                <div className="panel-body" style = { formControl }>
                    <form className="add-appointment form-horizontal" onSubmit={ this.handleAdd } ref="bookingForm">
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="carName">Select Car</label>
                            <div className="col-sm-10">
                                <select className="form-control" id="carName" ref="inputCarName">
                                <option value="">Select Car</option>
                                <option value="BMW">BMW</option>
                                <option value="Audi">Audi</option>
                                <option value="Duster">Duster</option>
                                <option value="Swift">Swift</option>
                                 <option value="Volkswagan">Volkswagan</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="carOwner">Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control"
                                id="carOwner" ref="inputOwnerName" placeholder="Name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="aptDate">Date</label>
                            <div className="col-sm-4">
                                <input type="date" className="form-control"
                                id="aptDate" ref="inputAptDate" />
                            </div>
                            <label className="col-sm-2 control-label" htmlFor="aptTime">Time</label>
                            <div className="col-sm-4">
                                <input type="time" className="form-control"
                                id="aptTime" ref="inputAptTime" />
                            </div>
                        </div>
                       <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="aptNotes">Notes</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" rows="4" cols="50"
                                id="aptNotes" ref="inputAptNotes" placeholder="Booking Notes"></textarea>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-primary pull-right">Add Booking</button>
                            </div>
                        </div>
                    </form>
                    <div className="alert alert-danger" style={errorControl}>
                        <strong>*</strong> All Fields are mandatory
                    </div>
                </div>
            </div>
      );
   }
}

export default AddBooking;
