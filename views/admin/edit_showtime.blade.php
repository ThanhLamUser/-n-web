
@extends('admin_layout')
@section('admin_content')

{{-- <div class="row">
    <div class="col-lg-12">
        <section class="panel">
            <header class="panel-heading">
                Thêm suất chiếu
            </header>
            <?php
            // $message = Session::get('message');
            // if($message){
            //     echo $message;
            //     $message = Session::get('message',null);
            // }
            ?>
            <div class="panel-body">
                <div class="position-center">
                    <form role="form" action="{{ URL::to('/save-showtime-list') }}" method="post"
                        enctype="multipart/form-data">
                        {{ csrf_field() }}
                        <div class="form-group">
                            <label for="showtime_movie">Phim</label>
                            <select name="showtime_movie" class="form-control input-sm m-bot15">
                                @foreach($movie_showtime as $key => $movie)
                                <option value="{{  $movie->movie_id }}">{{  $movie->movie_name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="showtime_room">Phòng </label>
                            <select name="showtime_room" class="form-control input-sm m-bot15">
                                @foreach($room_showtime as $key => $room)
                                @if($room->room_status != 0)
                                    <option value="{{ $room->room_id }}">{{ $room->room_name }}</option>
                                @endif
                            @endforeach
                            </select>
                        </div>
                        <label for="showtime_date">Ngày:</label>
                        <input type="date" id="showtime_date" name="showtime_date"><br><br>

                        <div id="showtime_add">
                            <label for="showtime_timeslot">Thêm Khung Giờ:</label>
                            <input type="time" id="showtime_timeslot" name="showtime_timeslot">
                            <button type="button" onclick="showtime_add()">Thêm suất chiếu </button>
                         </div>
                        <button type="submit" name="add_showtime_list" class="btn btn-info">Thêm</button>
                    </form>
                </div>

            </div>
        </section>
</div> --}}
    <div class="adm__add-movie col l-9 m-4 c-6">
        <h1>ADD SHOWTIME</h1>

        <div class="adm__add-movie--container">
            <div class="adm__add-movie--container---movie---details">
                <h1>SHOWTIME DETAILS</h1>
                @foreach ($edit_showtime as $key => $edit_value)
                <form role="form" id="form1" action="{{ URL::to('/update-showtime/'.$edit_value->showtime_id) }}" method="post" enctype="multipart/form-data">
                    {{ csrf_field() }}
                    <div>
                        <div>
                            <div>
                                <p>Movie</p>
                                <select name="showtime_movie" class="form-control input-sm m-bot15">
                                    @foreach($movie_showtime as $key => $movie)
                                    @if($movie->movie_status != 0)
                                    <option value="{{  $movie->movie_id }}">{{  $movie->movie_name }}</option>
                                    @endif
                                    @endforeach
                                </select>
                            </div>
                        </div>
                        <div >
                            <div>
                                <p>Room</p>
                                <select name="showtime_room" class="form-control input-sm m-bot15">
                                    <option value="0">No rooms have been selected</option>
                                    @foreach($room_showtime as $key => $room)
                                        @if($room->room_status != 0)
                                            <option value="{{ $room->room_id }}">{{ $room->room_name }}</option>
                                        @endif
                                    @endforeach
                                </select>
                            </div>

                        </div>
                        <div>
                            <div>
                                <p>Date</p>
                                <input type="date" id="showtime_date" value="{{ $edit_value->showtime_date }}" name="showtime_date"><br><br>
                            </div>
                            <div id="showtime_add">
                                <p >Time</p>
                                <input type="time" id="showtime_timeslot" value="{{ $edit_value->showtime_timeslot }}" name="showtime_timeslot">
                             </div>
                             <div>
                                <p>End Time</p>
                                <input type="time" id="showtime_endtime"value="{{ $edit_value->showtime_endtime }}" name="showtime_endtime" >
                            </div>
                                {{-- <button type="button" onclick="showtime_add()">Thêm suất chiếu </button> --}}

                        </div>
                    </div>
                </div>
            </div>
            <div class="adm__add-movie--container">
                <div class="adm__add-movie--container---save---btn">
                    <div>
                        <input type="submit" name="edit_showtime_list" id="submit-btn" value="SAVE">
                    </div>
                </div>
            </div>
         </form>
         @endforeach
    </div>
    @endsection
