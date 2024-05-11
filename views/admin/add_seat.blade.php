@extends('admin_layout')
@section('admin_content')

    <div class="adm__add-movie col l-9 m-4 c-6">
        <h1>ADD SEAT</h1>

        <div class="adm__add-movie--container">
            <div class="adm__add-movie--container---movie---details">
                <h1>SEAT DETAILS</h1>
                <form role="form" id="form1" action="{{ URL::to('/save-seat-list') }}" method="post" enctype="multipart/form-data">
                    {{ csrf_field() }}
                    <div>
                        <div>
                            <div>
                                <p>Room</p>
                                <select name="seat_room" class="form-control input-sm m-bot15">
                                    @foreach($seat_room as $key => $room)
                                    @if($room->room_id != 0)
                                    <option value="{{  $room->room_id }}">{{  $room->room_name }}</option>
                                    @endif
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div class="">
                            <div >
                                <p>Seat</p>
                                <input type="text" name="seat_name" id="" placeholder="Insert name...">
                            </div>
                            <div>
                                <p>Type</p>
                                <input type="text" name="seat_type" id="" placeholder="Insert name...">
                            </div>

                        </div>
                        <div>

                            <div>
                                <p>
                                    Status

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <title>Ctrl + Click to select multiple formats</title>
                                        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                                    </svg>
                                </p>
                                <select name="seat_status">
                                    <option value="1">Empty</option>
                                    <option value="0">Selected </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="adm__add-movie--container">
                <div class="adm__add-movie--container---save---btn">
                    <div>
                        <input type="submit" name="add_seat_list" id="submit-btn" value="SAVE">
                    </div>
                </div>
            </div>
         </form>
    </div>
@endsection

