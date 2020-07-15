<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\News\AdminStore;
use App\Repositories\NewsRepository;
use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * @var NewsRepository
     */
    protected $newsRepository;
    /**
     * Constant type news
     */
    protected  $type;

    /**
     * NewsController constructor.
     * @param NewsRepository $newsRepository
     */

    public function __construct(NewsRepository $newsRepository)
    {
        $this->newsRepository = $newsRepository;
        $this->type = config('constant.type_news');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Http\Response|\Illuminate\View\View
     */
    public function index()
    {
        $order = [
            'sort' => 'desc',
            'key' => 'id'
        ];
        $data = $this->newsRepository->getAllWhere(null, $order, true);
        return view('admin.news.index', compact('data'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Renderable
     */
    public function create()
    {
        $type = $this->type;
        return view('admin.news.create', compact('type'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function store(AdminStore $request)
    {
        $data = $request->all();
        //upload img
        $pathNews = 'uploads/news';
        $path = public_path($pathNews);
        if (!file_exists($path)) {
            mkdir( $path, 0755, true);
        }
        $img = $this->newsRepository->uploadFile($data['img'], $path);
        $data['img'] = $pathNews.'/'.$img;
        $news = $this->newsRepository->create($data);

        return view('admin.news.index', compact('news'));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function edit($id)
    {
        $type = $this->type;
        $post = $this->newsRepository->find($id);
        return view('admin.news.edit', compact('type', 'post'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function update(Request $request, $id)
    {
        dd(2222);
        $data = $request->all();
        //upload img
        $pathNews = 'uploads/news';
        $path = public_path($pathNews);
        if (!file_exists($path)) {
            mkdir( $path, 0755, true);
        }
        $img = $this->newsRepository->uploadFile($data['img'], $path);
        $data['img'] = $pathNews.'/'.$img;
        $news = $this->newsRepository->update($id, $data);
        return redirect(route('news.index'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
