<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\News;
use Faker\Generator as Faker;

$factory->define(News::class, function (Faker $faker) {
    return [
        'title' => $faker->name,
        'description' => $faker->text(200),
        'content' => $faker->text,
        'img' => $faker->image('public/uploads/news',400,300, null, false)
    ];
});
