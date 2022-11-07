<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Campeonato extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'ano',
    ];

    public function conquistas()
    {
        return $this->hasMany(Conquista::class);
    }
}
