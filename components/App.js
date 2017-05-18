/* Main Component  */
import React from 'react';
import _ from 'lodash'

import BookingList from './BookingList.js';
import AddBooking from './AddBooking.js';
import Search from './Search.js';

class App extends React.Component {

    constructor(props){

        super(props);

        this.data = [
                        {
                            "carName": "BMW",
                            "ownerName": "Praveen",
                            "bokDate": "2016-06-20 15:30",
                            "bokNotes": "BMW. The ultimate driving machine."
                        },
                        {
                            "carName": "Swift",
                            "ownerName": "Sekar",
                            "bokDate": "2016-06-24 08:30",
                            "bokNotes": "Power, beauty and soul."
                        },
                        {
                            "carName": "Audi",
                            "ownerName": "Singh",
                            "bokDate": "2016-06-22 15:50",
                            "bokNotes": "Engineered to move the human spirit."
                        },
                        {
                            "carName": "Duster",
                            "ownerName": "Power Pandi",
                            "bokDate": "2016-06-21 9:15",
                            "bokNotes": "Wake up and drive"
                        },
                        {
                            "carName": "Volkswagan",
                            "ownerName": "Ajay",
                            "bokDate": "2016-06-21 9:15",
                            "bokNotes": "Power Of Sport"
                        },

                    ];


        /* App Initial State  */
        this.state = {

            booking: '',
            displayBooking: false,
            queryText : ''

        };

        /* Bind functions @@ If you are using es6 Arrow functions this not nessory    */
        this.removeBooking      = this.removeBooking.bind(this);

        this.bookingFormToggle  = this.bookingFormToggle.bind(this);

        this.addBooking         = this.addBooking.bind(this);

        this.searchFilter       = this.searchFilter.bind(this);


    }

    componentWillMount(){
        // Update state
        this.setState({booking: this.data});
    }

    removeBooking(item){

        var allBooking = this.state.booking;
        var newBooking = _.without(allBooking, item);

        this.setState({
        booking: newBooking
        });

    }


 bookingFormToggle(){

    var toggleFlag = this.state.displayBooking;

    if(toggleFlag)
        toggleFlag = false;
    else
        toggleFlag = true;

    this.setState({
        displayBooking: toggleFlag

    });

}

addBooking(data){
    var bookingList = this.state.booking;
    bookingList.push(data);

    this.setState({
        booking: bookingList,
        displayBooking: false
    });
}

searchFilter(q)
{
     var  booking_list = this.state.booking;

     var  filteredApts = [];

    if(q != '')
    {
        booking_list.forEach(function(item) {
        if(
            (item.carName.toLowerCase().indexOf(q)!=-1) ||
            (item.ownerName.toLowerCase().indexOf(q)!=-1) ||
            (item.bokDate.toLowerCase().indexOf(q)!=-1) ||
            (item.bokNotes.toLowerCase().indexOf(q)!=-1)
        ) {

            filteredApts.push(item);
        }
        });
    }

    if(filteredApts.length != 0 )
        this.setState({booking:filteredApts});
    else
        this.setState({booking:this.data});
}

   render(props) {

      return (
          <div>
            <div className="row">
                <div>
                    <AddBooking
                    displayForm = {this.state.displayBooking}
                    handleFormToggle = {this.bookingFormToggle}
                    AddBooking = {this.addBooking}/>
                    <Search search={this.searchFilter}/>
                    <BookingList booking={this.state.booking} handleDelete={this.removeBooking}/>
                </div>
            </div>

        </div>
      );
   }


}

export default App;
