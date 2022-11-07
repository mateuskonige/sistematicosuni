<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Conquista extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'modalidade',
        'colocacao',
        'campeonato_id'
    ];

    public function campeonato()
    {
        return $this->belongsTo(Campeonato::class);
    }
}
