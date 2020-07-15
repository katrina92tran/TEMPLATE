@extends('admin.layouts.app')
@section('content')
    <!-- Page Heading -->
    <h1 class="h3 mb-2 text-gray-800">{{__('news.news')}}</h1>
    <!-- DataTales Example -->
    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">List</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($data as $k => $item)
                        <tr>
                            <td>{{$k + 1}}</td>
                            <td>{{$item->title}}</td>
                            <td>{{$item->description}}</td>
                            <td>
                                <a href="{{route('news.edit',$item->id)}}" class="btn btn-success">{{__('common.edit')}}</a>
                                <button class="btn btn-danger" type="button">{{__('common.delete')}}</button>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
                {!! $data->links() !!}
            </div>
        </div>
    </div>
@endsection
