<?php

namespace App\Http\Controllers;

use App\Models\Campeonato;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CampeonatoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $campeonatos = Campeonato::all();

        return Inertia::render('Admin/Campeonatos/Index', [
            'campeonatos' => $campeonatos,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/Campeonatos/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nome' => 'required|min:3|max:32',
            'ano' => 'required|between:4,4',
        ]);

        Campeonato::create($validated);

        return redirect()->route('admin.campeonatos.index')->with('success', 'Campeonato cadastrado.');
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $campeonato = Campeonato::findOrFail($id);

        return Inertia::render('Admin/Campeonatos/Edit', [
            'campeonato' => $campeonato,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'nome' => 'required|min:3|max:32',
            'ano' => 'required|between:4,4',
        ]);

        $campeonato = Campeonato::findOrFail($id);
        $campeonato->update($validated);

        return redirect()->route('admin.campeonatos.index')->with('success', 'Campeonato atualizado.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $campeonato = Campeonato::findOrFail($id);
        $campeonato->delete();

        return redirect()->route('admin.campeonatos.index')->with('error', 'Campeonato excluído.');
    }
}
