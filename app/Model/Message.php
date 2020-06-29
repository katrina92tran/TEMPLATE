<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Message extends Model
{
    protected $fillable = ['message'];

    /**
     * A message belong to user
     *
     * @return BelongsTo
     */
    public function user(){
        return  $this->belongsTo(User::class);
    }
}
