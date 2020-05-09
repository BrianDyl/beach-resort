import React from 'react'
 import RoomFilter from './RoomFilter'
import RoomsList from './RoomsList'
import {withRoomConsumer} from '../context'
 import Loading from './Loading'

function RoomContainer({context}) {
const {loading,sortedRooms,rooms} = context;
if(loading){
        return <Loading />;
        }
        return (
            <>
                <RoomFilter rooms={rooms}/>
                <RoomsList rooms={sortedRooms} />
            </>
        )
}
export default withRoomConsumer(RoomContainer);
// import React from 'react'
// import RoomsFilter from './RoomsFiltered'
// import RoomsList from './RoomsList'
// import {RoomConsumer} from '../context'
// import Loading from './Loading'

// export default function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const{loading,sortedRooms,rooms} = value;
//                     if(loading){
//                         return <Loading />;
//                     }
//                     return (
//                         <div>
//                             hello from RoomsContainer
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms} />
//                      </div>
//                     );
//                 }
//             }
//         </RoomConsumer>
        
//     )
// }
