<?php
namespace App\Repositories;
 use App\Models\News;
 use App\Repositories\EloquentRepository;

class NewsRepository extends EloquentRepository implements RepositoryInterface
{

    public function getModel()
    {
        return News::class;
    }
}

