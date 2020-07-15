@extends('admin.layouts.app')
@section('content')
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">{{__('news.news')}}</h1>
    </div>
    <div class="row">
        <div class="col-xl-8 col-lg-7">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">{{__('common.create')}}</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <form method="POST" action="{{route('news.store')}}" enctype="multipart/form-data">
                        @csrf
                        <div class="form-group">
                            <label for="type">{{__('common.type')}}</label>
                            <select class="form-control" id="type" name="type">
                                @foreach($type as $k => $option)
                                    <option value="{{$k}}">{{$option}}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="title">{{__('news.title')}}</label>
                            <input class="form-control @error('title') is-invalid @enderror" id="title" type="text" placeholder="{{__('news.enter_title')}}" name="title">
                            @error('title')
                                <div class="alert alert-danger">{{$message}}</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="img">{{__('common.img')}}</label>
                            <input type="file" class="form-control-file @error('img') is-invalid @enderror" id="img" name="img">
                            @error('img')
                            <div class="alert alert-danger">{{$message}}</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="description">{{__('common.description')}}</label>
                            <textarea class="form-control @error('description') is-invalid @enderror" name="description" id="description" rows="3" placeholder="{{__('common.enter_')}}"></textarea>
                            @error('description')
                            <div class="alert alert-danger">{{$message}}</div>
                            @enderror
                        </div>
                        <div class="form-group">
                            <label for="content">{{__('common.content')}}</label>
                            <textarea class="form-control @error('content') is-invalid @enderror" name="content" id="content" rows="3" placeholder="{{__('common.enter_')}}"></textarea>
                            @error('content')
                            <div class="alert alert-danger">{{$message}}</div>
                            @enderror
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
