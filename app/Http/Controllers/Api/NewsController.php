<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Repositories\NewsRepository;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    /**
     * @var NewsRepository
     */
    protected $newsRepository;

    /**
     * NewsController constructor.
     * @param NewsRepository $newsRepository
     */

    public function __construct(NewsRepository $newsRepository)
    {
        $this->newsRepository = $newsRepository;
    }

    public function getPageIndex()
    {
        $order = [
            'sort' => 'desc',
            'key' => 'id'
        ];
        $posts = $this->newsRepository->getAllWhere(null, $order);
    }
}
