<?php

namespace App\Http\Controllers;

use App\Models\Campeonato;
use App\Models\Conquista;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class SobreController extends Controller
{
    public function index()
    {
        $campeonatos = Campeonato::with('conquistas')->get();

        $anos = $campeonatos->map(function ($campeonato) {
            return $campeonato->ano;
        })->unique();

        return Inertia::render('Sobre/Index', [
            'anos' => $anos,
            'campeonatos' => $campeonatos,
        ]);
    }
}
